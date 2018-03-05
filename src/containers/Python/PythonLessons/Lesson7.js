import React, { Component } from 'react';

class Lesson7 extends Component {
	render() {
		
		return(
				<div>
					<h1>Stacks</h1>
					<p>The list methods make it very easy to use a list as a stack,
					 where the last element added is the first element retrieved (“last-in, first-out”). 
					 <br/><br/>To add an item to the top of the stack, use append().
					 <br/><br/> To retrieve an item from the top of the stack, use pop() without an explicit index.
					 </p>
					<pre>
						  <code>
						       <p>
						       	>>> stack = [3, 4, 5]
								<br/>>>> stack.append(6)
								<br/>>>> stack.append(7) 
								<br/>>>>stack
								<br/>[3, 4, 5, 6, 7]
								<br/><br/>>>>stack.pop()
								<br/>7 
								<br/>>>>stack
								<br/>[3, 4, 5, 6]
								<br/><br/>>>>stack.pop()
								<br/>6 
								<br/>>>>stack.pop()
								<br/>5 
								<br/>>>>stack
								<br/>[3, 4]
								</p>
						  </code>
					</pre>
					
				
				</div>
			);
	}

}

export default Lesson7;