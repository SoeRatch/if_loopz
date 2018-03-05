import React, { Component } from 'react';



class Lesson11 extends Component {
		

	render() {
		let cl="{";
		let cr="}";
		return(
				<div>
					<h1>Dictionaries</h1>
					<p>
						Unlike sequences, which are indexed by a range of numbers,
					 dictionaries are indexed by keys, which can be any immutable type.
					
					<br/> Strings and numbers can always be keys.
					 <br/>Tuples can be used as keys if they contain only strings, numbers, or tuples.
					<br/>If a tuple contains any mutable object either directly or indirectly, it cannot be used as a key.
					 <br/>You can’t use lists as keys, since lists can be modified.
					<br/><br/>Curly braces or the set() function can be used to create sets.
					<br/>It is best to think of a dictionary as an unordered set of key: value pairs, with the requirement that the keys are unique
					<br/> A pair of braces creates an empty dictionary: {cl}{cr}. 
					<br/><br/> The main operations on a dictionary are storing a value with some key
					 and extracting the value given the key.
					 <br/>It is also possible to delete a key:value pair with del
					 <br/>If you store using a key that is already in use, the old value associated with that key is forgotten.
					 
					</p>
					<pre>
						  <code>
						       <p>
						       	>>> tel = {cl}'jack': 4098, 'sape': 4139{cr}
								<br/>>>> tel['guido'] = 4127
								<br/>>>> tel
								<br/>{cl}'sape': 4139, 'guido': 4127, 'jack': 4098{cr}
								<br/><br/>>>> tel['jack']
								<br/>4098
								<br/><br/>>>> del tel['sape']
								<br/>>>> tel['irv'] = 4127
								<br/>>>> tel
								<br/>{cl}'guido': 4127, 'irv': 4127, 'jack': 4098{cr}
								<br/><br/>>>> list(tel.keys())
								<br/>['irv', 'guido', 'jack']
								<br/><br/>>>> sorted(tel.keys())
								<br/>['guido', 'irv', 'jack']
								<br/><br/>>>> 'guido' in tel
								<br/>True
								<br/><br/>>>> 'jack' not in tel
								<br/>False
								</p>
						  </code>
					</pre>
					<p>The dict() constructor builds dictionaries directly from sequences of key-value pairs</p>
					<pre>
						  <code>
						       <p>
						       	>>> dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])
								<br/>{cl}'sape': 4139, 'jack': 4098, 'guido': 4127{cr}
								
								</p>
						  </code>
					</pre>
				</div>
			);
	}

}



export default Lesson11;