import React, { Component } from 'react';

class Lesson8 extends Component {
	render() {
		let cl='{';
		let cr='}';
		let lt='<';
		return(
				<div>
					<h1>Multidimensional Arrays</h1>
					<p>It is also possible to create an array of arrays known as multidimensional array.
								<br/>
								<br/>For example,
								
								</p>
					<pre>
						  <code>
						       <p>
								int[][] a = new int[3][4];
								</p>
						  </code>
					</pre>

					<p>Here, a is a two-dimensional (2d) array. The array can hold maximum of 12 elements of type int.
								<br/>
								<br/>
								<br/>Similarly, you can declare a three-dimensional (3d) array. For example,
								
								</p>
					<pre>
						  <code>
						       <p>String[][][] personalInfo = new String[3][4][2];
								
								</p>
						  </code>
					</pre>
				

				<p>Here, personalInfo is a 3d array that can hold maximum of 24 (3*4*2) elements of type String.
								<br/>
								<br/>In Java, components of a multidimensional array are also arrays.


								<br/>
								<br/>Unlike C/C++,  In Java, rows can vary in length.
								<br/>
								<br/>
								<br/><h3>Initialization</h3>
								<p>Here's an example to initialize a 2d array in Java.</p>
								</p>
					<pre>
						  <code>
						       <p>int[][] a = {cl}
								<br/>        {cl}1, 2, 3{cr},
								<br/>        {cl}4, 5, 6, 9{cr},
								<br/>        {cl}7{cr},
								<br/>{cr};
								
								</p>
						  </code>
					</pre>
				

				<p>As mentioned, each component of array a is an array in itself, and length of each rows is also different.


								<br/>
								<br/>Let's write a program to prove it.
								
								</p>
					<pre>
						  <code>
						       <p>class MultidimensionalArray {cl}
								<br/>    public static void main(String[] args) {cl}
								<br/>
								<br/>        int[][] a = {cl}
								<br/>                {cl}1, 2, 3{cr},
								<br/>                {cl}4, 5, 6, 9{cr},
								<br/>                {cl}7{cr},
								<br/>        {cr};
								<br/>         System.out.println("Length of row 1: " + a[0].length);
								<br/>         System.out.println("Length of row 2: " + a[1].length);
								<br/>         System.out.println("Length of row 3: " + a[2].length);
							    <br/>    {cr}
							    <br/>{cr}
								</p>
						  </code>
					</pre>
				<br/>
				<p>When you run the program, the output will be:</p>
				<pre>
						  <code>
						       <p>Length of row 1: 3
								<br/>Length of row 2: 4
								<br/>Length of row 3: 1
								
								</p>
						  </code>
					</pre>	

					<p><b>Example:Print all elements of 2d array Using Loop</b></p>
					<pre>
						  <code>
						       <p>class MultidimensionalArray {cl}
								<br/>    public static void main(String[] args) {cl}
								<br/>
								<br/>        int[][] a = {cl}
								<br/>                {cl}1, -2, 3{cr},
								<br/>                {cl}-4, -5, 6, 9{cr},
								<br/>                {cl}7{cr},
								<br/>        {cr};
								<br/>         for (int i = 0; i {lt} a.length; ++i) {cl}
								<br/>             for (int j = 0; j {lt} a[i].length; ++j) {cl}
								<br/>                  System.out.println(a[i][j]);
							    <br/>             {cr}
							    <br/>         {cr}
							    <br/>    {cr}
							    <br/>{cr}
								</p>
						  </code>
					</pre>
				<br/>
				<p>When you run the program, the output will be:</p>
				<pre>
						  <code>
						       <p>1
								<br/>-2
								<br/>3
								<br/>-4
								<br/>-5
								<br/>6
								<br/>9
								<br/>7
								</p>
						  </code>
					</pre>				
				</div>

			);
	}

}

export default Lesson8;