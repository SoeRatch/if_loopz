import React, { Component } from 'react';
import  '../../Style/Content.css';


class Lesson3 extends Component {
		

	render() {
		
		return(
				<div>
					<h1>Strings</h1>
					<p>Strings can be enclosed in single quotes ('...') or double quotes ("...").</p>
					<pre>
						  <code>
						       <p>
						      		>>> 'A for Apple'  
									<br/>'A for Apple'
									<br/><br/>>>> 'shouldn\'t'    // ( \ ) is used to escape the single quote...
									<br/>"shouldn't"
									<br/><br/>>>> "doesn't"       // another option to escape single quote is to use double quotes 
									<br/>"doesn't"
									<br/>>>> '"Yes," he said.'
									<br/>'"Yes," he said.'
									<br/><br/>>>> "\"Yes,\" he said."
									<br/>'"Yes," he said.'
									<br/><br/>>>> '"Isn\'t," she said.'
									<br/>'"Isn\'t," she said.'
								</p>
						  </code>
					</pre>
					<p>The print() function produces a more readable output, by omitting the enclosing quotes and by printing escaped and special characters:</p>
					<pre>
						  <code>
						       <p>
						       		>>> '"Isn\'t," she said.'
									<br/>'"Isn\'t," she said.'
									<br/><br/>>>> print('"Isn\'t," she said.')
									<br/>"Isn't," she said.
									<br/><br/>>>> s = 'First line.\nSecond line.'          //( \n ) means newline
									<br/><br/>>>> s                                       // without print(), \n is included in the output
									<br/>'First line.\nSecond line.'
									<br/><br/>>>> print(s)                                 // with print(), \n produces a new line
									<br/>First line.
									<br/>Second line.
								</p>
						  </code>
					</pre>
					<p>String literals can span multiple lines and it is specified with triple quotes - ( """ ) or ( ''' ) </p>
					<pre>
						  <code>
						       <p>
								<br/>>>> print("""Usage: something [OPTIONS]
								<br/>	     -h                       
								<br/>	     -H hostname               
								<br/>	""")
								<br/><br/>
								<br/>Usage: something [OPTIONS]
				     			<br/>		  -h                        
				     			<br/>		  -H hostname 
								</p>
						  </code>
					</pre>
					<br/><br/><br/>
					<p>Strings can be concatenated with the + operator, and repeated with *
					<br/><br/>Two or more string literals next to each other are automatically concatenated.</p>
					<pre>
						  <code>
						       <p>
								>>> 3 * 'bla' + 'blooo..'
								<br/>'blablablablooo..'
								<br/><br/>>>> 'Py' 'thon'
								<br/>'Python'
								</p>
						  </code>
					</pre>
					<p>Strings can be indexed, with the first character having index 0.</p>
					<pre>
						  <code>
						       <p>>>> word = 'Python'
								<br/>>>> word[0] 
								<br/>'P'
								<br/>>>> word[5]
								<br/>'n'
								</p>
						  </code>
					</pre>
					<p>Indices may also be negative numbers, to start counting from the right.</p>
					<pre>
						  <code>
						       <p>
						       	>>> word[-1]  
									<br/>'n'
									<br/>>>> word[-2] 
									<br/>'o'
									<br/>>>> word[-6]
									<br/>'P'
								</p>
						  </code>
					</pre>
					<br/><h3>Slicing</h3>
					<pre>
						  <code>
						       <p>
						       	>>> word = 'Python'  
									<br/>>>> word[0:2]
									<br/>'Py'
									<br/><br/>>>> word[2:5] 
									<br/>'tho'
									<br/><br/>>>> word[:2]
									<br/>'Py'
									<br/><br/>>>> word[2:] 
									<br/>'thon'
									<br/>>>>word[-2:]
									<br/>'on'
								</p>
						  </code>
					</pre>
					<p>Python strings cannot be changed — they are immutable.</p>
					<pre>
						  <code>
						       <p>
							       	>>>word[0] = 'J'
									<br/>TypeError: 'str' object does not support item assignment
									<br/><br/>If you need a different string, you should create a new one
									<br/>>>>'J' + word[1:]
									<br/>'Jython'
									<br/>>>> word[:2] + 'py'
									<br/>'Pypy'

									<br/><br/>The built-in function len() returns the length of a string:
									<br/>>>> s = 'supercalifragilisticexpialidocious'
									<br/>>>> len(s)
									<br/>34
								</p>
						  </code>
					</pre>
					
				
				</div>
			);
	}

}



export default Lesson3;