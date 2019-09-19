// run-pass
#![feature(const_if_match)]

const _: i32 = if true { 5 } else { 6 };

const _: i32 = match 6 {
    x @ 5 | x @ 6 | x @ 7 => x,
    _ => 0
};

fn main() {}
