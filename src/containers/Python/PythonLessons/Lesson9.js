import React, { Component } from 'react';



class Lesson9 extends Component {
		

	render() {
		let lt="<";
		return(
				<div>
					<h1>Tuples</h1>
					<p>Just like Lists and range , tuple is another sequence data type.
					<br/>A tuple consists of a number of values separated by commas, for instance:</p>
					<pre>
						  <code>
						       <p>
						       	>>> t = 12345, 54321, 'hello!
								<br/>>>>t[0]
								<br/>12345
								<br/>>>>t
								<br/>>>>(12345, 54321, 'hello!')
								</p>
						  </code>
					</pre>
					<p>tuples are always enclosed in parentheses, so that nested tuples are interpreted correctly
					<br/> they may be input with or without surrounding parentheses,
					 although often parentheses are necessary anyway
					 (if the tuple is part of a larger expression)
					 </p>
					 <pre>
						  <code>
						       <p>
						       	>>>u = t, (1, 2, 3, 4, 5)
								<br/>>>> u
								<br/>((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))
						
								</p>
						  </code>
					</pre>

					<p>Tuples are immutable but they can contain mutable object.
					</p>
					<pre>
						  <code>
						       <p>
						       	>>>t[0] = 88888
								<br/>Traceback (most recent call last):
								<br/>  File "{lt}stdin>", line 1, in {lt}module>
								<br/>TypeError: 'tuple' object does not support item assignment
								<br/><br/>v = ([1, 2, 3], [3, 2, 1])
								<br/> v
								<br/>([1, 2, 3], [3, 2, 1])
								</p>
						  </code>
					</pre>
					<br/><br/>
					<p>A special problem is the construction of tuples containing 0 or 1 items:
					<br/> the syntax has some extra quirks to accommodate these. 
					<br/>Empty tuples are constructed by an empty pair of parentheses.
					 <br/>A tuple with one item is constructed by following a value with a comma</p>
					<pre>
						  <code>
						       <p>
						       	>>> empty = ()
								<br/>>>> singleton = 'hello',
								<br/>>>> len(empty)
								<br/>0
								<br/><br/>>>> len(singleton)
								<br/>1
								<br/>>>> singleton
								<br/>('hello',)
								</p>
						  </code>
					</pre>
					<br/><br/><p>The statement t = 12345, 54321, 'hello!' is an example of tuple packing: the values 12345, 54321 and 'hello!' are packed together in a tuple.
					<br/><br/> The reverse operation is also possible which is called unpacking
					</p>
					<pre>
						  <code>
						       <p>
						       	>>> x, y, z = t
								</p>
						  </code>
					</pre>
				</div>
			);
	}

}



export default Lesson9;