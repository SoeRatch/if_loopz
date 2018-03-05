/* eslint-disable */
import React, { Component } from 'react';

class Lesson7 extends Component {
	render() {
		let cl='{';
		let cr='}';

		return(
				<div>
					<h1>Arrays</h1>
					<p>An array is a group of like-typed variables that are referred to by a common name.
						<ul>
							<li>In Java all arrays are dynamically allocated</li>
							<li>Since arrays are objects in Java, we can find their length using member length. </li>
							<li>A Java array variable can also be declared like other variables with [ ] after the data type.</li>
							<li>The variables in the array are ordered and each have an index beginning from 0.</li>
							<li>Java array can  also be used as a static field, a local variable or a method parameter.</li>
							<li>The size of an array must be specified by an int value and not long or short.</li>
							<li>The direct superclass of an array type is Object.</li>
							<li>Every array type implements the interfaces Cloneable and java.io.Serializable.</li>
							
						</ul>
						<br/><br/><h3><u>One-dimensional Arrays</u></h3>
						<br/>Syntax:
					</p>
					<pre>
						  <code>
						       <p>type var-name[];
								<br/>OR
								<br/>type[] var-name;
								</p>
						  </code>
					</pre>

					<p>Example: 
								</p>
					<pre>
						  <code>
						       <p>// both are valid declarations
								<br/>int intArray[]; 
								<br/>or int[] intArray; 
								<br/>
								<br/>byte byteArray[];
								<br/>short shortsArray[];
								<br/>boolean booleanArray[];
								<br/>long longArray[];
								<br/>float floatArray[];
								<br/>double doubleArray[];
								<br/>char charArray[];
								<br/>
								<br/>// an array of references to objects of  the class MyClass (a class created by user)
								<br/>MyClass myClassArray[];
								<br/>
								<br/>Object[]  ao;         // array of Object
								<br/>Collection[] ca;      // array of Collection of unknown type
								</p>
						  </code>
					</pre>
				

				<p>Although the above first declaration establishes the fact that intArray is an array variable, <b>no array actually exists.</b>
								<br/>It simply tells to the compiler that this(intArray) variable will hold an array of the integer type.
								<br/> To link intArray with an actual, physical array of integers, you must allocate one using new and assign it to intArray.
								<br/>
								<br/>Instantiating an Array in Java when an array is declared, only a reference of array is created. To actually create or give memory to array, you create an array like this
								<br/>When an array is declared, only a reference of array is created. To actually create or give memory to array, you create an array with a <b>new</b> keyword .
								
								</p>
					<pre>
						  <code>
						       <p>var-name = new type [size];
								</p>
						  </code>
					</pre>

					<p>Example: 
								</p>
					<pre>
						  <code>
						       <p>int intArray[];                    //declaring array
								<br/>intArray = new int[20];         // allocating memory to array
								<br/>
								<br/>OR
								<br/>int[] intArray = new int[20];    // combining both statements in one
								</p>
						  </code>
					</pre>

				<p><b>Note:</b>  The elements in the array allocated by new will automatically be initialized to zero (for numeric types), false (for boolean), or null (for reference types).Refer Default array values in Java 
								<br/>
								<br/>
								<br/><h3>Array Literal</h3>
								<br/>In a situation, where the size of the array and variables of array are already known, array literals can be used.
								
								</p>
					<pre>
						  <code>
						       <p>int[] intArray = new int[]{cl} 1,2,3,4,5,6,7,8,9,10 {cr}; 
								
								</p>
						  </code>
					</pre>
				
				
				</div>

			);
	}

}

export default Lesson7;