/* eslint-disable */
import React, { Component } from 'react';

class Lesson6 extends Component {
	render() {
		let cl='{';
		let cr='}';
		let lt='<';
		return(
				<div>
					<h1>Methods</h1>
					<p>A Java method is a collection of statements that are grouped together to perform an operation.
								<br/>
								<br/>
								<h3>Creating Method</h3>
								<br/>Syntax:
					</p>
					<pre>
						  <code>
						       <p>public static int methodName(int a, int b) {cl}
								<br/>     // body
								<br/>{cr}
								
								</p>
						  </code>
					</pre>

					<p>Here,
					<ul>
						<li><b>public static </b>- modifier</li>
						<li><b>int </b>- return type</li>
						<li><b>methodName </b>- name of the method</li>
						<li><b>a,b </b>-  formal parameters</li>
						<li><b>int a, int b </b>- list of parameters </li>
					</ul>
					<br/>Method definition consists of a method header and a method body. The same is shown in the following syntax −
						<br/><b>Syntax</b>
					</p>
						<pre>
						  <code>
						       <p>modifier returnType nameOfMethod (Parameter List)  {cl}
								<br/>      // method body
								<br/>{cr}
								
								</p>
						  </code>
					</pre>
								<p>The syntax shown above includes −
								<br/>
								<ul>
									<li><b>modifier </b>- It defines the access type of the method and it is optional to use.</li><br/>
									<li><b>returnType </b>- Method may return a value.</li><br/>
									<li><b>nameOfMethod </b>- This is the method name. The method signature consists of the method name and the parameter list.</li><br/>
									<li><b>Parameter List </b>- The list of parameters, it is the type, order, and number of parameters of a method. These are optional, method may contain zero parameters.</li><br/>
									<li><b>method body </b>- The method body defines what the method does with the statements. </li><br/>
								</ul>
								
								<br/><b>Example-</b>
								</p>
					<pre>
						  <code>
						       <p>public static int minFunction(int n1, int n2) {cl}
								<br/>    int min;
								<br/>    if (n1 > n2)
								<br/>        min = n2;
								<br/>    else
								<br/>        min = n1;
								<br/>    return min;
								<br/>{cr}
								</p>
						  </code>
					</pre>
				

				<p><h3>Method Calling </h3>
					<br/>There are two ways in which a method is called i.e., method returns a value or returning nothing
					<br/>
					<br/>The process of method calling is simple. When a program invokes a method, the program control gets transferred to the called method.
					<br/>This called method then returns control to the caller in two conditions, when −
					<ul>
						<li>the return statement is executed.</li>
						<li>it reaches the method ending closing brace.</li>
					</ul>
					<br/>The methods returning void is considered as call to a statement. Lets consider an example −
								</p>
					<pre>
						  <code>
						       <p>System.out.println("This is an example");
								
								</p>
						  </code>
					</pre>

				<p>The method returning value can be understood by the following example −
					
								</p>
					<pre>
						  <code>
						       <p>int result = sum(6, 9);
								
								</p>
						  </code>
					</pre>

					<p>Following is the example to demonstrate how to define a method and how to call it −
					</p>
					<pre>
						  <code>
						       <p>public class ExampleMinNumber {cl}
						       <br/>    public static void main(String[] args) {cl}
						       <br/>        int a = 11;
						       <br/>        int b = 6;
						       <br/>        int c = minFunction(a, b);
						       <br/>        System.out.println("Minimum Value = " + c);
						       <br/>    {cr}
						       <br/>
						       <br/>    /** returns the minimum of two numbers */
						       <br/>     public static int minFunction(int n1, int n2) {cl}
						       <br/>        int min;
						       <br/>        if (n1 > n2)
						       <br/>           min = n2;
						       <br/>        else
						       <br/>           min = n1;
						       <br/>
						       <br/>        return min;
						       <br/>     {cr}
						       <br/>{cr}
								<br/><br/><br/>OUTPUT
								<br/>Minimum value = 6
								</p>
						  </code>
					</pre>

				<p><h3>The void Keyword</h3>
				<br/>The void keyword allows us to create methods which do not return a value. 
				</p>
					<pre>
						  <code>
						       <p>public class ExampleVoid {cl}
						       <br/>    public static void main(String[] args) {cl}
						       <br/>        methodRankPoints(255.7);
						       <br/>    {cr}
						       <br/>
						       <br/>     public static void methodRankPoints(double points) {cl}
						       <br/>        if (points >= 202.5) {cl}
						       <br/>            System.out.println("Rank:A1");
						       <br/>        {cr}else if (points >= 122.4) {cl}
						       <br/>            System.out.println("Rank:A2");
						       <br/>         {cr}else {cl}
						       <br/>             System.out.println("Rank:A3");
						       <br/>        {cr}
						       <br/>     {cr}
						       <br/>{cr}
								<br/><br/><br/>OUTPUT
								<br/>Rank:A1
								</p>
						  </code>
					</pre>

				<p><h3>Passing Parameters by Value</h3>
				<br/>Passing Parameters by Value means calling a method with a parameter. Through this, the argument value is passed to the parameter.
				<br/><b>Example</b>
				</p>
					<pre>
						  <code>
						       <p>public class swappingExample {cl}
						       <br/>    public static void main(String[] args) {cl}
						       <br/>        int a = 30;
						       <br/>        int b = 45;
						       <br/>        System.out.println("Before swapping, a = " + a + " and b = " + b);
						  <br/><br/>        // Invoke the swap method
						       <br/>        swapFunction(a, b);
						       <br/>        System.out.println("\n**Now, Before and After swapping values will be same here**:");
						       <br/>        System.out.println("After swapping, a = " + a + " and b is " + b);
						       <br/>    {cr}
						       <br/>
						       <br/>     public static void swapFunction(int a, int b) {cl}
						       <br/>         System.out.println("Before swapping(Inside), a = " + a + " b = " + b);
						  <br/><br/>             // Swap n1 with n2
						       <br/>        int c = a;
						       <br/>         a = b;
						       <br/>         b = c;
						       <br/>         System.out.println("After swapping(Inside), a = " + a + " b = " + b);
						       <br/>     {cr}
						       <br/>{cr}
								<br/><br/><br/>OUTPUT
								<br/>Before swapping, a = 30 and b = 45
								<br/>Before swapping(Inside), a = 30 b = 45
								<br/>After swapping(Inside), a = 45 b = 30
								<br/>
								<br/>
								<br/>**Now, Before and After swapping values will be same here**:
								<br/>After swapping, a = 30 and b is 45
								</p>
						  </code>
					</pre>
				<p><h3>Method Overloading</h3>
				<br/>When a class has two or more methods by the same name but different parameters, it is known as method overloading.
				<br/><b>Example</b>
				</p>
					<pre>
						  <code>
						       <p>public class ExampleOverloading {cl}
						       <br/>    public static void main(String[] args) {cl}
						       <br/>        int a = 11;
						       <br/>        int b = 6;
						       <br/>        double c = 7.3;
						       <br/>        double d = 9.4;
						       <br/>        int result1 = minFunction(a, b);
						       <br/>        
						       <br/>         // same function name with different parameters
						       <br/>        double result2 = minFunction(c, d);
						       <br/>        swapFunction(a, b);
						       <br/>        System.out.println("Minimum Value = " + result1);
						       <br/>        System.out.println("Minimum Value = " + result2);
						       <br/>    {cr}
						       <br/>
						       <br/>     // for integer
						       <br/>     public static int minFunction(int n1, int n2) {cl}
						       <br/>         int min;
						       <br/>         if (n1 > n2)
						       <br/>             min = n2;
						       <br/>         else
						       <br/>             min = n1;
						       <br/>         return min; 
						       <br/>     {cr}
						       <br/>
						       <br/>     // for double
						       <br/>     public static double minFunction(double n1, double n2)  {cl}
						       <br/>         double min;
						       <br/>         if (n1 > n2)
						       <br/>             min = n2;
						       <br/>         else
						       <br/>             min = n1;
						       <br/>         return min; 
						       <br/>     {cr}
						       <br/>{cr}
								<br/><br/><br/>OUTPUT
								<br/>Minimum Value = 6
								<br/>Minimum Value = 7.3

								</p>
						  </code>
					</pre>
				<p><h3>Variable Arguments</h3>
				<br/>We can also pass a variable number of arguments of the same type to a method. The parameter in the method is declared as follows −
				</p>
					<pre>
						  <code>
						       <p>typeName... parameterName
						       
								</p>
						  </code>
					</pre>
					<p>In the method declaration, you specify the type followed by an ellipsis (...). Only one variable-length parameter may be specified in a method, and this parameter must be the last parameter. Any regular parameters must precede it.
					<br/><b>Example</b></p>
					<pre>
						  <code>
						       <p>public class VarargsDemo  {cl}
						       <br/>    public static void main(String[] args) {cl}
						       <br/>        // Call method with variable args  
						       <br/>        printMax(34, 3, 3, 2, 56.5);
						       <br/>        printMax(new double[]{1, 2, 3});
						 		<br/>    {cr}
						       <br/>
						       <br/>     public static void printMax( double... numbers) {cl}
						       <br/>         if (numbers.length == 0) {cl}
						       <br/>             System.out.println("No argument passed");
						       <br/>             return;
						       <br/>         {cr}
						  <br/><br/>         double result = numbers[0];
						  <br/><br/>         for (int i = 1; i {lt}  numbers.length; i++)
						       <br/>             if (numbers[i] >  result)
						       <br/>                 result = numbers[i];
						       <br/>         System.out.println("The max value is " + result);
						       <br/>     {cr}
						       <br/>{cr}
								<br/><br/><br/>OUTPUT
								<br/>The max value is 56.5
								<br/>The max value is 3.0
								</p>
						  </code>
					</pre>

				<p><h3>The finalize( ) Method</h3>
				<br/>It is possible to define a method that will be called just before an object's final destruction by the garbage collector. This method is called finalize( ), and it can be used to ensure that an object terminates cleanly.
				<br/><br/>For example, you might use finalize( ) to make sure that an open file owned by that object is closed.
				<br/><br/>To add a finalizer to a class, you simply define the finalize( ) method. The Java runtime calls that method whenever it is about to recycle an object of that class.
				<br/><br/>Inside the finalize( ) method, you will specify those actions that must be performed before an object is destroyed.
				<br/><br/>The finalize( ) method has this general form −
				</p>
					<pre>
						  <code>
						       <p>protected void finalize( ) {cl}
								<br/>    // finalization code here
								<br/>{cr}
								
								</p>
						  </code>
					</pre>
				<p>Here, the keyword protected is a specifier that prevents access to finalize( ) by code defined outside its class.
				<br/>This means that you cannot know when or even if finalize( ) will be executed. For example, if your program ends before garbage collection occurs, finalize( ) will not execute.
				</p>				
				</div>

			);
	}

}

export default Lesson6;