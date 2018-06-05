initSidebarItems({"fn":[["copy","Copies `count * size_of::<T>()` bytes from `src` to `dst`. The source and destination may overlap."],["copy_nonoverlapping","Copies `count * size_of::<T>()` bytes from `src` to `dst`. The source and destination must not overlap."],["drop_in_place","Executes the destructor (if any) of the pointed-to value."],["eq","Compare raw pointers for equality."],["null","Creates a null raw pointer."],["null_mut","Creates a null mutable raw pointer."],["read","Reads the value from `src` without moving it. This leaves the memory in `src` unchanged."],["read_unaligned","Reads the value from `src` without moving it. This leaves the memory in `src` unchanged."],["read_volatile","Performs a volatile read of the value from `src` without moving it. This leaves the memory in `src` unchanged."],["replace","Moves `src` into the pointed `dest`, returning the previous `dest` value."],["swap","Swaps the values at two mutable locations of the same type, without deinitializing either."],["swap_nonoverlapping","Swaps `count * size_of::<T>()` bytes between the two regions of memory beginning at `x` and `y`. The two regions must not overlap."],["write","Overwrites a memory location with the given value without reading or dropping the old value."],["write_bytes","Sets `count * size_of::<T>()` bytes of memory starting at `dst` to `val`."],["write_unaligned","Overwrites a memory location with the given value without reading or dropping the old value."],["write_volatile","Performs a volatile write of a memory location with the given value without reading or dropping the old value."]],"struct":[["NonNull","`*mut T` but non-zero and covariant."]]});