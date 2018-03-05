import React, { Component } from 'react';

class Lesson10 extends Component {
		

	render() {
		let cl="{";
		let cr="}";
		return(
				<div>
					<h1>Sets</h1>
					<p>A set is an unordered collection with no duplicate elements.
					<br/>Set objects also support mathematical operations like 
					union, intersection, difference, and symmetric difference.
					<br/><br/>Curly braces or the set() function can be used to create sets.
					<br/><b>Note:</b>to create an empty set you have to use set(), not {}. The latter creates an empty dictionary.
					</p>
					<pre>
						  <code>
						       <p>
						       	>>> basket = {cl}'apple', 'orange', 'apple', 'pear', 'orange', 'banana'{cr}
								<br/>>>> print(basket)
								<br/>{cl}'orange', 'banana', 'pear', 'apple'{cr}
								<br/>>>> 'orange' in basket
								<br/>True
								<br/>>>> 'crabgrass' in basket
								<br/>False
								<br/><br/> a = set('abracadabra')
								<br/>>>> b = set('alacazam')
								<br/>>>> a
								<br/>{cl}'a', 'r', 'b', 'c', 'd'{cr}
								<br/><br/>>>> a - b
								<br/>{cl}'r', 'd', 'b'{cr}
								<br/><br/>>>> a | b
								<br/>{cl}'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'{cr}
								<br/><br/>>>> a & b
								<br/>{cl}'a', 'c'{cr}
								<br/><br/>>>>  a ^ b
								<br/>{cl}'r', 'd', 'b', 'm', 'z', 'l'{cr}
								</p>
						  </code>
					</pre>
					
				
				</div>
			);
	}

}

export default Lesson10;