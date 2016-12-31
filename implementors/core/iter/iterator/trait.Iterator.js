(function() {var implementors = {};
implementors["rusqlite"] = ["impl&lt;'stmt, T, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='rusqlite/struct.MappedRows.html' title='rusqlite::MappedRows'>MappedRows</a>&lt;'stmt, F&gt; <span class='where'>where F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;<a class='struct' href='rusqlite/struct.Row.html' title='rusqlite::Row'>Row</a>) -&gt; T</span>","impl&lt;'stmt, T, E, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='rusqlite/struct.AndThenRows.html' title='rusqlite::AndThenRows'>AndThenRows</a>&lt;'stmt, F&gt; <span class='where fmt-newline'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='rusqlite/enum.Error.html' title='rusqlite::Error'>Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;<a class='struct' href='rusqlite/struct.Row.html' title='rusqlite::Row'>Row</a>) -&gt; <a class='enum' href='https://doc.rust-lang.org/nightly/core/result/enum.Result.html' title='core::result::Result'>Result</a>&lt;T, E&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
