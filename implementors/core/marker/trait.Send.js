(function() {var implementors = {};
implementors["alloc"] = [{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>",synthetic:true,types:["alloc::alloc::Global"]},{text:"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::boxed::Box"]},{text:"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/boxed/struct.PinBox.html\" title=\"struct alloc::boxed::PinBox\">PinBox</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::boxed::PinBox"]},{text:"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/arc/struct.Arc.html\" title=\"struct alloc::arc::Arc\">Arc</a>&lt;T&gt;",synthetic:false,types:["alloc::arc::Arc"]},{text:"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/arc/struct.Weak.html\" title=\"struct alloc::arc::Weak\">Weak</a>&lt;T&gt;",synthetic:false,types:["alloc::arc::Weak"]},{text:"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;",synthetic:false,types:["alloc::rc::Rc"]},{text:"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/rc/struct.Weak.html\" title=\"struct alloc::rc::Weak\">Weak</a>&lt;T&gt;",synthetic:false,types:["alloc::rc::Weak"]},{text:"impl&lt;T, A&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/raw_vec/struct.RawVec.html\" title=\"struct alloc::raw_vec::RawVec\">RawVec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::raw_vec::RawVec"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/binary_heap/struct.BinaryHeap.html\" title=\"struct alloc::binary_heap::BinaryHeap\">BinaryHeap</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::binary_heap::BinaryHeap"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/binary_heap/struct.PeekMut.html\" title=\"struct alloc::binary_heap::PeekMut\">PeekMut</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::binary_heap::PeekMut"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/binary_heap/struct.Iter.html\" title=\"struct alloc::binary_heap::Iter\">Iter</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::binary_heap::Iter"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/binary_heap/struct.IntoIter.html\" title=\"struct alloc::binary_heap::IntoIter\">IntoIter</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::binary_heap::IntoIter"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/binary_heap/struct.Drain.html\" title=\"struct alloc::binary_heap::Drain\">Drain</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::binary_heap::Drain"]},{text:"impl&lt;K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.BTreeMap.html\" title=\"struct alloc::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::BTreeMap"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.Iter.html\" title=\"struct alloc::btree_map::Iter\">Iter</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::Iter"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.IterMut.html\" title=\"struct alloc::btree_map::IterMut\">IterMut</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::IterMut"]},{text:"impl&lt;K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.IntoIter.html\" title=\"struct alloc::btree_map::IntoIter\">IntoIter</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::IntoIter"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.Keys.html\" title=\"struct alloc::btree_map::Keys\">Keys</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::Keys"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.Values.html\" title=\"struct alloc::btree_map::Values\">Values</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::Values"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.ValuesMut.html\" title=\"struct alloc::btree_map::ValuesMut\">ValuesMut</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::ValuesMut"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.Range.html\" title=\"struct alloc::btree_map::Range\">Range</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::Range"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.RangeMut.html\" title=\"struct alloc::btree_map::RangeMut\">RangeMut</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::RangeMut"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.VacantEntry.html\" title=\"struct alloc::btree_map::VacantEntry\">VacantEntry</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::VacantEntry"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_map/struct.OccupiedEntry.html\" title=\"struct alloc::btree_map::OccupiedEntry\">OccupiedEntry</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::OccupiedEntry"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"alloc/btree_map/enum.Entry.html\" title=\"enum alloc::btree_map::Entry\">Entry</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::map::Entry"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.BTreeSet.html\" title=\"struct alloc::btree_set::BTreeSet\">BTreeSet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::set::BTreeSet"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Iter.html\" title=\"struct alloc::btree_set::Iter\">Iter</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::set::Iter"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.IntoIter.html\" title=\"struct alloc::btree_set::IntoIter\">IntoIter</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::set::IntoIter"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Range.html\" title=\"struct alloc::btree_set::Range\">Range</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::set::Range"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Difference.html\" title=\"struct alloc::btree_set::Difference\">Difference</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::set::Difference"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.SymmetricDifference.html\" title=\"struct alloc::btree_set::SymmetricDifference\">SymmetricDifference</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::set::SymmetricDifference"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Intersection.html\" title=\"struct alloc::btree_set::Intersection\">Intersection</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::set::Intersection"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/btree_set/struct.Union.html\" title=\"struct alloc::btree_set::Union\">Union</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::btree::set::Union"]},{text:"impl&lt;'a, B:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"type\" href=\"alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::borrow::Cow"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.IntoIter.html\" title=\"struct alloc::linked_list::IntoIter\">IntoIter</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::linked_list::IntoIter"]},{text:"impl&lt;'a, T, F&gt; !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.DrainFilter.html\" title=\"struct alloc::linked_list::DrainFilter\">DrainFilter</a>&lt;'a, T, F&gt;",synthetic:true,types:["alloc::linked_list::DrainFilter"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.LinkedList.html\" title=\"struct alloc::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;",synthetic:false,types:["alloc::linked_list::LinkedList"]},{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.Iter.html\" title=\"struct alloc::linked_list::Iter\">Iter</a>&lt;'a, T&gt;",synthetic:false,types:["alloc::linked_list::Iter"]},{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.IterMut.html\" title=\"struct alloc::linked_list::IterMut\">IterMut</a>&lt;'a, T&gt;",synthetic:false,types:["alloc::linked_list::IterMut"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>",synthetic:true,types:["alloc::string::String"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>",synthetic:true,types:["alloc::string::FromUtf8Error"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/string/struct.FromUtf16Error.html\" title=\"struct alloc::string::FromUtf16Error\">FromUtf16Error</a>",synthetic:true,types:["alloc::string::FromUtf16Error"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"alloc/string/enum.ParseError.html\" title=\"enum alloc::string::ParseError\">ParseError</a>",synthetic:true,types:["alloc::string::ParseError"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/string/struct.Drain.html\" title=\"struct alloc::string::Drain\">Drain</a>&lt;'a&gt;",synthetic:false,types:["alloc::string::Drain"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::vec::Vec"]},{text:"impl&lt;'a, I&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec/struct.Splice.html\" title=\"struct alloc::vec::Splice\">Splice</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;I as <a class=\"trait\" href=\"core/iter/iterator/trait.Iterator.html\" title=\"trait core::iter::iterator::Iterator\">Iterator</a>&gt;::<a class=\"type\" href=\"core/iter/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::vec::Splice"]},{text:"impl&lt;'a, T, F&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec/struct.DrainFilter.html\" title=\"struct alloc::vec::DrainFilter\">DrainFilter</a>&lt;'a, T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::vec::DrainFilter"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec/struct.IntoIter.html\" title=\"struct alloc::vec::IntoIter\">IntoIter</a>&lt;T&gt;",synthetic:false,types:["alloc::vec::IntoIter"]},{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec/struct.Drain.html\" title=\"struct alloc::vec::Drain\">Drain</a>&lt;'a, T&gt;",synthetic:false,types:["alloc::vec::Drain"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.VecDeque.html\" title=\"struct alloc::vec_deque::VecDeque\">VecDeque</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::vec_deque::VecDeque"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.Iter.html\" title=\"struct alloc::vec_deque::Iter\">Iter</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["alloc::vec_deque::Iter"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.IterMut.html\" title=\"struct alloc::vec_deque::IterMut\">IterMut</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::vec_deque::IterMut"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.IntoIter.html\" title=\"struct alloc::vec_deque::IntoIter\">IntoIter</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["alloc::vec_deque::IntoIter"]},{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.Drain.html\" title=\"struct alloc::vec_deque::Drain\">Drain</a>&lt;'a, T&gt;",synthetic:false,types:["alloc::vec_deque::Drain"]},];
implementors["core"] = [];
implementors["proc_macro"] = [{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.Diagnostic.html\" title=\"struct proc_macro::Diagnostic\">Diagnostic</a>",synthetic:true,types:["proc_macro::diagnostic::Diagnostic"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.Span.html\" title=\"struct proc_macro::Span\">Span</a>",synthetic:true,types:["proc_macro::Span"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"proc_macro/enum.Level.html\" title=\"enum proc_macro::Level\">Level</a>",synthetic:true,types:["proc_macro::diagnostic::Level"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"proc_macro/enum.Delimiter.html\" title=\"enum proc_macro::Delimiter\">Delimiter</a>",synthetic:true,types:["proc_macro::Delimiter"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"proc_macro/enum.Spacing.html\" title=\"enum proc_macro::Spacing\">Spacing</a>",synthetic:true,types:["proc_macro::Spacing"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/token_stream/struct.IntoIter.html\" title=\"struct proc_macro::token_stream::IntoIter\">IntoIter</a>",synthetic:true,types:["proc_macro::token_stream::IntoIter"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.TokenStream.html\" title=\"struct proc_macro::TokenStream\">TokenStream</a>",synthetic:false,types:["proc_macro::TokenStream"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.LexError.html\" title=\"struct proc_macro::LexError\">LexError</a>",synthetic:false,types:["proc_macro::LexError"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.Span.html\" title=\"struct proc_macro::Span\">Span</a>",synthetic:false,types:["proc_macro::Span"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.LineColumn.html\" title=\"struct proc_macro::LineColumn\">LineColumn</a>",synthetic:false,types:["proc_macro::LineColumn"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.SourceFile.html\" title=\"struct proc_macro::SourceFile\">SourceFile</a>",synthetic:false,types:["proc_macro::SourceFile"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"proc_macro/enum.TokenTree.html\" title=\"enum proc_macro::TokenTree\">TokenTree</a>",synthetic:false,types:["proc_macro::TokenTree"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.Group.html\" title=\"struct proc_macro::Group\">Group</a>",synthetic:false,types:["proc_macro::Group"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.Punct.html\" title=\"struct proc_macro::Punct\">Punct</a>",synthetic:false,types:["proc_macro::Punct"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.Ident.html\" title=\"struct proc_macro::Ident\">Ident</a>",synthetic:false,types:["proc_macro::Ident"]},{text:"impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"proc_macro/struct.Literal.html\" title=\"struct proc_macro::Literal\">Literal</a>",synthetic:false,types:["proc_macro::Literal"]},];
implementors["test"] = [{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"test/struct.Bencher.html\" title=\"struct test::Bencher\">Bencher</a>",synthetic:true,types:["test::Bencher"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"test/struct.TestDesc.html\" title=\"struct test::TestDesc\">TestDesc</a>",synthetic:true,types:["test::TestDesc"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"test/struct.TestDescAndFn.html\" title=\"struct test::TestDescAndFn\">TestDescAndFn</a>",synthetic:true,types:["test::TestDescAndFn"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"test/struct.Metric.html\" title=\"struct test::Metric\">Metric</a>",synthetic:true,types:["test::Metric"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"test/struct.Options.html\" title=\"struct test::Options\">Options</a>",synthetic:true,types:["test::Options"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"test/struct.TestOpts.html\" title=\"struct test::TestOpts\">TestOpts</a>",synthetic:true,types:["test::TestOpts"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"test/struct.BenchSamples.html\" title=\"struct test::BenchSamples\">BenchSamples</a>",synthetic:true,types:["test::BenchSamples"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"test/struct.MetricMap.html\" title=\"struct test::MetricMap\">MetricMap</a>",synthetic:true,types:["test::MetricMap"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.TestName.html\" title=\"enum test::TestName\">TestName</a>",synthetic:true,types:["test::TestName"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.NamePadding.html\" title=\"enum test::NamePadding\">NamePadding</a>",synthetic:true,types:["test::NamePadding"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.TestFn.html\" title=\"enum test::TestFn\">TestFn</a>",synthetic:true,types:["test::TestFn"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.BenchMode.html\" title=\"enum test::BenchMode\">BenchMode</a>",synthetic:true,types:["test::BenchMode"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.ShouldPanic.html\" title=\"enum test::ShouldPanic\">ShouldPanic</a>",synthetic:true,types:["test::ShouldPanic"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.ColorConfig.html\" title=\"enum test::ColorConfig\">ColorConfig</a>",synthetic:true,types:["test::ColorConfig"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.OutputFormat.html\" title=\"enum test::OutputFormat\">OutputFormat</a>",synthetic:true,types:["test::OutputFormat"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.TestEvent.html\" title=\"enum test::TestEvent\">TestEvent</a>",synthetic:true,types:["test::TestEvent"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"test/stats/struct.Summary.html\" title=\"struct test::stats::Summary\">Summary</a>",synthetic:true,types:["test::stats::Summary"]},{text:"impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.TestResult.html\" title=\"enum test::TestResult\">TestResult</a>",synthetic:false,types:["test::TestResult"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
