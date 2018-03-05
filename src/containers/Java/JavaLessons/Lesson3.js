/* eslint-disable */
import React, { Component } from 'react';



class Lesson3 extends Component {
		

	render() {
		
		return(
				<div>
					<h1>Character data type</h1>
					<p>
								<br/>Java provides wrapper class <b>Character</b> for primitive data type char.
								<br/>
								<br/>Character object can be created with the Character constructor .
								
								</p>
					<pre>
						  <code>
						       <p>Character ch = new Character('a');
								
								</p>
						  </code>
					</pre>

					<p>
								<br/>The Java compiler will also create a Character object for you under some circumstances.
								<br/>For example, if you pass a primitive char into a method that expects an object, the compiler automatically converts the char to a Character for you.
								<br/>This feature is called autoboxing
								<br/>
								<br/> If the conversion goes the other way, then it is called unboxing.
								
								</p>
					<pre>
						  <code>
						       <p>
									<br/>// Here following primitive char 'a' is boxed into the Character object ch
									<br/>Character ch = 'a';
									<br/>
									<br/>
									<br/>//Here primitive 'x' is boxed for method test,return is unboxed to char 'c'.
									<br/>char c = test('x');
								</p>
						  </code>
					</pre>
				

								<p>
								<br/>
								<br/>The Character class offers a number of useful class (i.e., static) methods for manipulating characters.
								
								<ol>
									<li><b>isLetter()</b> Determines whether the specified char value is a letter.</li><br/>
									<li><b>isDigit()</b> Determines whether the specified char value is a digit.</li><br/>
									<li><b>isWhitespace()</b> Determines whether the specified char value is white space.</li><br/>
									<li><b>isUpperCase()</b> Determines whether the specified char value is uppercase.</li><br/>
									<li><b>isLowerCase()</b> Determines whether the specified char value is lowercase.</li><br/>
									<li><b>toUpperCase()</b> Returns the uppercase form of the specified char value.</li><br/>
									<li><b>toLowerCase()</b> Returns the lowercase form of the specified char value.</li><br/>
									<li><b>toString()</b> Returns a String object representing the specified character value that is, a one-character string.</li><br/>
								</ol>								
								</p>
					
				
				
				</div>

			);
	}

}



export default Lesson3;