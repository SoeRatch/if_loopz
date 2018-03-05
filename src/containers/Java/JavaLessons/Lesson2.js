/* eslint-disable */
import React, { Component } from 'react';

class Lesson2 extends Component {
		

	render() {
		let lc='{';
		let rc='}';
		return(
				<div>
					
					<h1>Basic Fundamentals</h1>
					<h3><u>Identifier</u>:</h3>
					<p>
								<br/> Identifiers are the names of variables, methods, classes, packages and interfaces. Unlike literals they are not the things themselves, just ways of referring to them.
								
					</p>
					<pre>
						  <code>
						       <p>public class Test
								<br/>{lc}
								<br/>	public static void main(String[] args)
								<br/>   {lc}
								<br/>        int a = 20;
								<br/>   {rc}
								<br/>{rc}
								</p>
						  </code>
					</pre>
					<p>In the above java code, we have 5 identifiers namely :
					</p>
					<ul>
						<li><b>Test: </b> class name.</li>
						<li><b>main: </b>method name.</li>
						<li><b>String: </b>predefined class name.</li>
						<li><b>args: </b>variable name.</li>
						<li><b>a: </b>variable name.</li>
					</ul>
					<br/>
					<br/>
					<h4>Rules for defining Java Identifiers</h4>
					<ul>
						<li>The only allowed characters for identifiers are all alphanumeric characters <b>([A-Z],[a-z],[0-9])</b> , <b> ‘$‘</b>(dollar sign) and <b> ‘_‘ </b> .</li>
						<br/><li>Identifiers should not start with <b>digits([0-9])</b></li>
						<br/><li>Java identifiers are <b>case-sensitive.</b></li>
						<br/><li>There is no limit on the length of the identifier but it is advisable to use an optimum length of 4 – 15 letters only.</li>
						<br/><li><b>Reserved Words </b>can’t be used as an identifier. For example “int while = 20;” is an invalid statement as while is a reserved word. There are <b>53</b> reserved words in Java.</li>
					</ul>
					
					<pre>
						  <code>
						       <p>
						       <b>Valid Identifiers</b>
								<br/>_myvariable
								<br/>$myvariable
								<br/>sum_of_array
								<br/>
								<br/>
								<b>Invalid Identifiers</b>
								<br/>123geeks
								<br/>My Variable
								<br/>sum_of_array
								<br/>variable-2   //hyphen is not an alphanumeric character
								<br/>sum_&_difference   //ampersand is not an alphanumeric character
								</p>
						  </code>
					</pre>
					<br/><br/>
					<h3><u>Variables</u>:</h3>
					<p>
								<br/>Variable is name of reserved area allocated in memory.
								<br/>There are three types of variables in java:
								<ol>
									<li>local</li>
									<li>instance</li>
									<li>static</li>
								</ol>
								
					</p>
					<br/>
					<ol>
									<li><b>Local Variable</b><br/>A variable which is declared inside the method is called local variable</li>
									<br/><li><b>Instance Variable</b><br/>A variable which is declared inside the class but outside the method, is called instance variable . It is not declared as static.</li>
									<br/><li><b>Static Variable</b><br/>A variable that is declared as static is called static variable. It cannot be local.</li>
					</ol>
					<pre>
						  <code>
						       <p>
								<br/>class A{lc}
								<br/>    int data=50;         //instance variable  
								<br/>    static int m=100;    //static variable  
								<br/>    void method(){lc}
								<br/>        int n=90;        //local variable
								<br/>    {rc} 
								<br/>{rc}
								</p>
						  </code>
					</pre>

					<br/><h3><u>Data Types</u>:</h3>
					<p>
								<br/>There are two types of data types namely:
								<ul>
									<li>Primitive data types</li>
									<li>Non-Primitive data types</li>
								</ul>

								<br/><b>Primitive data types</b>
								<br/>There are 8 primitive data types.
								<ol>
									<li><b>boolean</b> (1bit):           Default value   false</li><br/>
									<li><b>Char</b> (2bit):              Default value   '\u0000'</li><br/>
									<li><b>byte</b> (1bit):           Default value   0</li><br/>
									<li><b>short</b> (2bit):          Default value   0</li><br/>
									<li><b>int</b> (4bit):          Default value   0</li><br/>
									<li><b>long</b> (8bit):          Default value   0L</li><br/>
									<li><b>float</b> (4bit):           Default value   0.0f</li><br/>
									<li><b>double</b> (8bit):           Default value   0.0d</li><br/>
									
								</ol>
					</p>
					<pre>
						  <code>
						       <p>class Simple{lc}
								<br/>    public static void main(String[] args){lc}
								<br/>        int a=10;
								<br/>        float f=a;
								<br/>        System.out.println(a);
								<br/>        System.out.println(f);
								<br/>    {rc}
								<br/>{rc}
								</p>
						  </code>
					</pre>
					<p>Output</p>
					<pre>
						  <code>
						       <p>10
								<br/>10.0
								</p>
						  </code>
					</pre>
				
					<br/><p><b>Typecasting example</b></p>
					<pre>
						  <code>
						       <p>class Simple{lc}
								<br/>    public static void main(String[] args){lc}
								<br/>        float f=10.5f;
								<br/>        //int a=f;//Compile time error
								<br/>        int a=(int)f;
								<br/>        System.out.println(f);
								<br/>        System.out.println(a);
								<br/>    {rc}
								<br/>{rc}
								</p>
						  </code>
					</pre>

					<p>Output</p>
					<pre>
						  <code>
						       <p>10.5
								<br/>10
								</p>
						  </code>
					</pre>
								<br/>
					<p><b>Overflow example</b></p>
					<pre>
						  <code>
						       <p>class Simple{lc}
								<br/>    public static void main(String[] args){lc}
								<br/>        //Overflow
								<br/>        int a=130;
								<br/>        byte b=(byte)a;
								<br/>        System.out.println(a);
								<br/>        System.out.println(b);
								<br/>    {rc}
								<br/>{rc}
								</p>
						  </code>
					</pre>
					<p>Output</p>
					<pre>
						  <code>
						       <p>130
								<br/>-126
								</p>
						  </code>
					</pre><br/>

					<p><b>Adding Lower Type</b></p>
					<pre>
						  <code>
						       <p>class Simple{lc}
								<br/>    public static void main(String[] args){lc}
								<br/>        byte a=10;
								<br/>        byte b=10;
								<br/>        //byte c=a+b;//Compile Time Error: because a+b=20 will be int
								<br/>        byte c=(byte)(a+b);
								<br/>        System.out.println(c);
								<br/>    {rc}
								<br/>{rc}
								</p>
						  </code>
					</pre>
					<p>Output</p>
					<pre>
						  <code>
						       <p>20
								</p>
						  </code>
					</pre>
					<h3><u>Final variables in Java</u></h3>
					<p>
								<br/>In Java, when final keyword is used with a variable of primitive data types (int, float, .. etc), value of the variable cannot be changed.
								<br/>
								<br/>
								<br/>For example following program gives error because i is final.
								
					</p>
					<pre>
						  <code>
						       <p>public class Test {lc}
								<br/>    public static void main(String[] args) {lc}
								<br/>        final int i = 10;
								<br/>        i = 30; // Error because i is final.
								<br/>    {rc}
								<br/>{rc}
								</p>
						  </code>
					</pre>
					<p>When final is used with non-primitive variables,
					the members of the referred object can be changed. final for non-primitive variables just mean that they cannot be changed to refer to any other object
					</p>
					<pre>
						  <code>
						       <p>class Test1 {lc}
								<br/>    public static void main(String args[]) {lc}
								<br/>        final Test1 t1 = new Test1();
								<br/>        t1.i = 30;  
								<br/>    {rc}
								<br/>{rc}
								</p>
						  </code>
					</pre>
					<br/>
					<h3><u>Literals </u></h3>
					<p>Any constant value which can be assigned to the variable is called as literal/constant.
					</p>
					<pre>
						  <code>
						       <p>// Here 100 is a constant/literal.
								<br/>int x = 100;
								<br/><br/>
								//Decimal literals (Base 10)
								<br/>int x = 101;
								<br/><br/>
								//Octal literals(Base 8) should be prefix with 0.
								<br/>int x = 0146;
								<br/><br/>
								//Hexa-decimal literals (Base 16) should be prefix with 0X or 0x.
								<br/>int x = 0X123Face;
								<br/><br/>
								//Binary literals should be prefix with 0b.
								<br/>int x = 0b1111;
								</p>
						  </code>
					</pre>
					
				</div>

			);
	}

}

export default Lesson2;