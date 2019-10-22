// ignore-windows

// compile-flags: -g -C no-prepopulate-passes

// CHECK-LABEL: !DISubprogram(name: "main"
// CHECK:       !DILocation(line: 20, column: 1{{[^0-9]}}
// CHECK-NOT:   !DILocation(
// CHECK:       !DISubprogram(
//
// CHECK-LABEL: !DISubprogram(name: "{{[{][{]closure[}][}]}}"
// CHECK:       !DILocation(line: 23, column: 10{{[^0-9]}}
// CHECK-NOT:   !DILocation(

#![allow(dead_code)]
#![allow(unused_variables)]
#![allow(unused_assignments)]

fn main() {
    let x = foo();
}

fn foo() -> fn() -> i32 {
    || 42
}
