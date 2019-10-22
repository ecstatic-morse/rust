use self::InternalDebugLocation::*;

use super::utils::debug_context;
use super::metadata::UNKNOWN_COLUMN_NUMBER;
use rustc_codegen_ssa::mir::debuginfo::FunctionDebugContext;

use crate::llvm;
use crate::llvm::debuginfo::DIScope;
use crate::builder::Builder;
use crate::common::CodegenCx;
use rustc_codegen_ssa::traits::*;

use std::num::NonZeroUsize;

use libc::c_uint;
use syntax_pos::{Span, Pos};

/// Sets the current debug location at the beginning of the span.
///
/// Maps to a call to llvm::LLVMSetCurrentDebugLocation(...).
pub fn set_source_location<D>(
    debug_context: &FunctionDebugContext<D>,
    bx: &Builder<'_, 'll, '_>,
    scope: &'ll DIScope,
    span: Span,
) {
    let dbg_loc = if debug_context.source_locations_enabled {
        debug!("set_source_location: {}", bx.sess().source_map().span_to_string(span));
        InternalDebugLocation::from_span(bx.cx(), scope, span)
    } else {
        UnknownLocation
    };
    set_debug_location(bx, dbg_loc);
}


#[derive(Copy, Clone, PartialEq)]
pub enum InternalDebugLocation<'ll> {
    KnownLocation {
        scope: &'ll DIScope,
        line: usize,
        col: Option<NonZeroUsize>,
    },
    UnknownLocation
}

impl InternalDebugLocation<'ll> {
    pub fn new(scope: &'ll DIScope, line: usize, col: Option<NonZeroUsize>) -> Self {
        KnownLocation {
            scope,
            line,
            col,
        }
    }

    pub fn from_span(cx: &CodegenCx<'ll, '_>, scope: &'ll DIScope, span: Span) -> Self {
        let pos = cx.sess().source_map().lookup_char_pos(span.lo());

        // FIXME: Rust likes to emit zero-width spans just after the end of a function. For now,
        // zero-width spans to the preceding column to avoid emitting a column that points past the
        // end of a line. E.g.,
        //   |xyz = None
        //   x|yz = 1
        //   xy|z = 2
        //
        // See discussion in https://github.com/rust-lang/rust/issues/65437
        let col0 = pos.col.to_usize();
        let col1 = if span.is_empty() {
            NonZeroUsize::new(col0)
        } else {
            NonZeroUsize::new(col0 + 1)
        };

        Self::new(scope, pos.line, col1)
    }
}

pub fn set_debug_location(
    bx: &Builder<'_, 'll, '_>,
    debug_location: InternalDebugLocation<'ll>
) {
    let metadata_node = match debug_location {
        KnownLocation { scope, line, col } => {
            // For MSVC, set the column number to zero.
            // Otherwise, emit it. This mimics clang behaviour.
            // See discussion in https://github.com/rust-lang/rust/issues/42921
            let col_used =  if bx.sess().target.target.options.is_like_msvc {
                UNKNOWN_COLUMN_NUMBER
            } else {
                col.map_or(UNKNOWN_COLUMN_NUMBER, |c| c.get() as c_uint)
            };
            debug!("setting debug location to {} {}", line, col_used);

            unsafe {
                Some(llvm::LLVMRustDIBuilderCreateDebugLocation(
                    debug_context(bx.cx()).llcontext,
                    line as c_uint,
                    col_used,
                    scope,
                    None))
            }
        }
        UnknownLocation => {
            debug!("clearing debug location ");
            None
        }
    };

    unsafe {
        llvm::LLVMSetCurrentDebugLocation(bx.llbuilder, metadata_node);
    }
}
