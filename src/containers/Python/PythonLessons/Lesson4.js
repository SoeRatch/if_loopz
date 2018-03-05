import React, { Component } from 'react';
import  '../../Style/Content.css';

class Lesson4 extends Component {
	render() {
		
		return(
				<div>
					<h1>Lists</h1>
					<p>Like strings , lists can be indexed and sliced:</p>
					<pre>
						  <code>
						       <p>
						       	>>> sample = [1, 4, 9, 16, 25]
								<br/>>>> sample[0] 
								<br/>1
								<br/>>>> sample[-1]
								<br/>25
								<br/>>>> sample[-3:] 
								<br/>[9, 16, 25]
								<br/>>>> sample[:] 
								<br/>[1, 4, 9, 16, 25]
								</p>
						  </code>
					</pre>
					<p> Lists also support concatenation</p>
					<pre>
						  <code>
						       <p>
						       	>>> sample + [36, 49, 64, 81, 100]
								<br/>[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
							   </p>
						  </code>
					</pre>
					<p>Lists are mutable and hence its contents can be changed.</p>
					<pre>
						  <code>
						       <p>
						       	>>> squares = [1, 4, 8]
								<br/>>>> squares[2]=9
								<br/>>>> squares
								<br/>[1,4,9]
								</p>
						  </code>
					</pre>
					<h3> The append( ) method </h3>
					<pre>
						  <code>
						       <p>
						       	>>> squares.append(16)
								<br/>>>> squares.append(5**2)
								<br/>>>> squares
								<br/>[1,4,9,16,25]
								</p>
						  </code>
					</pre>
					<p>Assignment to slices is also possible, and this can even change the size of the list or clear it entirely:.</p>
					<pre>
						  <code>
						       <p>
							       	>>> letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
									<br/><br/>>>> letters
									<br/>['a', 'b', 'c', 'd', 'e', 'f', 'g']
									<br/><br/>>>> letters[2:5] = ['C', 'D', 'E']
									<br/>>>> letters
									<br/>['a', 'b', 'C', 'D', 'E', 'f', 'g']
									<br/><br/>>>> letters[2:5] = []
									<br/>>>> letters
									<br/>['a', 'b', 'f', 'g']
									<br/><br/>>>> letters[:] = []
									<br/>>>> letters
									<br/>[]
								</p>
						  </code>
					</pre>

					<p>The built-in function len() also applies to lists:.</p>
					<pre>
						  <code>
						       <p>
							       	>>> letters = ['a', 'b', 'c', 'd']
									<br/>>>> len(letters)
									<br/>4
								</p>
						  </code>
					</pre>

					<p>It is possible to nest lists.</p>
					<pre>
						  <code>
						       <p>
							       	>>> a = ['a', 'b', 'c']
									<br/>>>> n = [1, 2, 3]
									<br/><br/>>>> x = [a, n]
									<br/>>>> x
									<br/>[['a', 'b', 'c'], [1, 2, 3]]
									<br/><br/>>>> x[0]
									<br/>['a', 'b', 'c']
									<br/><br/>>>> x[0][1]
   								    <br/>'b'
								</p>
						  </code>
					</pre>

					<h2> Methods of all list objects:</h2>
					<br/>
					<h3>list.append(x)</h3>
					<br/><p>Add an item to the end of the list. Equivalent to a[len(a):] = [x].</p>
					<br/><br/>

					<h3>list.extend(iterable)</h3>
					<br/><p>Extend the list by appending all the items from the iterable. Equivalent to a[len(a):] = iterable.</p>
					<br/><br/>

					<h3>list.insert(i, x)</h3>
					<br/><p>Insert an item at a given position. The first argument is the index of the element before which to insert, so a.insert(0, x) inserts at the front of the list, and a.insert(len(a), x) is equivalent to a.append(x).</p>
					<br/><br/>

					<h3>list.remove(x)</h3>
					<br/><p>Remove the first item from the list whose value is x. It is an error if there is no such item.</p>
					<br/><br/>

					<h3>list.pop([i])</h3>
					<br/><p>Remove the item at the given position in the list, and return it. If no index is specified, a.pop() removes and returns the last item in the list.</p>
					<br/><br/>

					<h3>list.clear()</h3>
					<br/><p>Remove all items from the list. Equivalent to del a[:]</p>
					<br/><br/>

					<h3>list.index(x[, start[, end]])</h3>
					<br/><p>Return zero-based index in the list of the first item whose value is x. Raises a ValueError if there is no such item.
					<br/>The optional arguments start and end are interpreted as in the slice notation and are used to limit the search to a particular subsequence of the list. The returned index is computed relative to the beginning of the full sequence rather than the start argument.
					</p>
					<pre>
						  <code>
						       <p>
							       >>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
									<br/><br/>>>> fruits.index('banana')
									<br/>3
									<br/><br/>>>> fruits.index('banana', 4)        # Find next banana starting a position 4
									<br/>6
				
								</p>
						  </code>
					</pre>
					<br/><br/>

					<h3>list.count(x)</h3>
					<br/><p>Return the number of times x appears in the list.</p>
					<br/><br/>

					<h3>list.sort(key=None, reverse=False)</h3>
					<br/><p>Sort the items of the list in place</p>
					<pre>
						  <code>
						       <p>
							       >>> fruits.sort()
									<br/><br/>>>> fruits
									<br/>['apple', 'apple', 'banana', 'banana', 'grape', 'kiwi', 'orange', 'pear']
				
								</p>
						  </code>
					</pre>
					<br/><br/>

					<h3>list.reverse()</h3>
					<br/><p>Reverse the elements of the list in place.</p>
					<br/><br/>

					<h3>list.copy()</h3>
					<br/><p>Return a shallow copy of the list. Equivalent to a[:].</p>
					<br/><br/>

				</div>
			);
	}

}

export default Lesson4;