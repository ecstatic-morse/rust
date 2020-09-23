//! Check the bodies of `const`s, `static`s and `const fn`s for illegal operations.
//!
//! This module will eventually replace the parts of `qualify_consts.rs` that check whether a local
//! has interior mutability or needs to be dropped, as well as the visitor that emits errors when
//! it finds operations that are invalid in a certain context.

use rustc_attr as attr;
use rustc_hir as hir;
use rustc_hir::def_id::{DefId, LocalDefId};
use rustc_middle::mir;
use rustc_middle::ty::{self, TyCtxt};
use rustc_span::Symbol;

pub use self::qualifs::Qualif;
pub use self::validation::non_const_fn_could_be_made_stable_const_fn;

mod ops;
pub mod post_drop_elaboration;
pub mod qualifs;
mod resolver;
pub mod validation;

/// Information about the item currently being const-checked, as well as a reference to the global
/// context.
pub struct ConstCx<'mir, 'tcx> {
    pub body: &'mir mir::Body<'tcx>,
    pub tcx: TyCtxt<'tcx>,
    pub def_id: LocalDefId,
    pub param_env: ty::ParamEnv<'tcx>,
    pub const_kind: Option<hir::ConstContext>,
}

impl ConstCx<'mir, 'tcx> {
    pub fn new(tcx: TyCtxt<'tcx>, def_id: LocalDefId, body: &'mir mir::Body<'tcx>) -> Self {
        let param_env = tcx.param_env(def_id);
        Self::new_with_param_env(tcx, def_id, body, param_env)
    }

    pub fn new_with_param_env(
        tcx: TyCtxt<'tcx>,
        def_id: LocalDefId,
        body: &'mir mir::Body<'tcx>,
        param_env: ty::ParamEnv<'tcx>,
    ) -> Self {
        let const_kind = tcx.hir().body_const_context(def_id);
        ConstCx { body, tcx, def_id: def_id, param_env, const_kind }
    }

    /// Returns the kind of const context this `Item` represents (`const`, `static`, etc.).
    ///
    /// Panics if this `Item` is not const.
    pub fn const_kind(&self) -> hir::ConstContext {
        self.const_kind.expect("`const_kind` must not be called on a non-const fn")
    }

    pub fn is_const_stable_const_fn(&self) -> bool {
        self.const_kind == Some(hir::ConstContext::ConstFn)
            && self.tcx.features().staged_api
            && is_const_stable_const_fn(self.tcx, self.def_id.to_def_id())
    }
}

/// Returns `true` if this `DefId` points to one of the official `panic` lang items.
pub fn is_lang_panic_fn(tcx: TyCtxt<'tcx>, def_id: DefId) -> bool {
    Some(def_id) == tcx.lang_items().panic_fn() || Some(def_id) == tcx.lang_items().begin_panic_fn()
}

pub fn allow_internal_unstable(tcx: TyCtxt<'tcx>, def_id: DefId, feature_gate: Symbol) -> bool {
    let attrs = tcx.get_attrs(def_id);
    attr::allow_internal_unstable(&tcx.sess, attrs)
        .map_or(false, |mut features| features.any(|name| name == feature_gate))
}

// Returns `true` if the given `const fn` is "const-stable".
//
// Panics if the given `DefId` does not refer to a `const fn`.
//
// Const-stability is only relevant for `const fn` within a `staged_api` crate. Only "const-stable"
// functions can be called in a const-context by users of the stable compiler. "const-stable"
// functions are subject to more stringent restrictions than "const-unstable" functions: They
// cannot use unstable features and can only call other "const-stable" functions.
pub fn is_const_stable_const_fn(tcx: TyCtxt<'tcx>, def_id: DefId) -> bool {
    use attr::{ConstStability, Stability, StabilityLevel};

    // Const-stability is only relevant for `const fn`.
    assert!(tcx.is_const_fn_raw(def_id));

    // Functions with `#[rustc_const_unstable]` are const-unstable.
    match tcx.lookup_const_stability(def_id) {
        Some(ConstStability { level: StabilityLevel::Unstable { .. }, .. }) => return false,
        Some(ConstStability { level: StabilityLevel::Stable { .. }, .. }) => return true,
        None => {}
    }

    // Functions with `#[unstable]` are const-unstable.
    //
    // FIXME(ecstaticmorse): We should keep const-stability attributes wholly separate from normal stability
    // attributes. `#[unstable]` should be irrelevant.
    if let Some(Stability { level: StabilityLevel::Unstable { .. }, .. }) =
        tcx.lookup_stability(def_id)
    {
        return false;
    }

    true
}
