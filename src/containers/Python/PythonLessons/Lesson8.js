import React, { Component } from 'react';

class Lesson8 extends Component {
	render() {
		
		return(
				<div>
					<h1>Queues</h1>
					<p>It is also possible to use a list as a queue, 
					where the first element added is the first element retrieved (“first-in, first-out”)
					 <br/>however, lists are not efficient for this purpose. 
					 <br/><br/>While appends and pops from the end of list are fast, doing inserts or pops from the beginning of a list is slow
					 <br/><br/> To implement a queue, use <b>collections.deque</b> which was designed to have fast appends and pops from both ends. For example:
					 </p>
					<pre>
						  <code>
						       <p>
						       	>>> from collections import deque
								<br/>>>> queue = deque(["Eric", "John", "Michael"])
								<br/>>>> queue.append("Terry")  
								<br/>>>> queue.append("Graham")
								<br/>>>> queue
								<br/>["Eric", "John", "Michael", 'Terry', 'Graham']
								<br/><br/>>>>queue.popleft() 
								<br/>'Eric' 
								<br/>>>>queue.popleft() 
								<br/>'John'
								<br/>>>> queue
								<br/>["Michael", 'Terry', 'Graham']
								</p>
						  </code>
					</pre>
					
				</div>
			);
	}

}

export default Lesson8;