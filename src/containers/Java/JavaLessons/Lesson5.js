import React, { Component } from 'react';

class Lesson5 extends Component {
	render() {
		let cl='{';
		let cr='}';

		return(
				<div>
					<h1>Loops</h1>
					<p><br/><h3><u>While loop</u></h3>
								<br/>In while loop, condition is evaluated first and if it returns true then the statements inside while loop execute. When condition returns false, the control comes out of loop and jumps to the next statement after while loop.
								</p>
					<pre>
						  <code>
						       <p>while(condition)
								<br/>{cl}
								<br/>     statement(s);
								<br/>{cr}
								</p>
						  </code>
					</pre>

					<p>Example</p>
					<pre>
						  <code>
						       <p>class WhileLoopExample {cl}
								<br/>    public static void main(String args[]){cl}
								<br/>        int i=10;
								<br/>        while(i>1){cl}
								<br/>            System.out.println(i);
								<br/>            i--;
								<br/>        {cr}
								<br/>    {cr}
								<br/>{cr}
								<br/>
								<br/><br/>OUTPUT
								<br/>10
								<br/>9
								<br/>8
								<br/>7
								<br/>6
								<br/>5
								<br/>4
								<br/>3
								<br/>2
								
								</p>
						  </code>
					</pre>

					<p><br/><h3><u>do-while loop</u></h3>
								<br/>do-while loop is similar to while loop, however there is a difference between them: In while loop, condition is evaluated before the execution of loop’s body but in do-while loop condition is evaluated after the execution of loop’s body.
								</p>
					<pre>
						  <code>
						       <p>do
								<br/>{cl}
								<br/>     statement(s);
								<br/>{cr} while(condition);
								</p>
						  </code>
					</pre>

					<p>First, the statements inside loop execute and then the condition gets evaluated, if the condition returns true then the control gets transferred to the “do” else it jumps to the next statement after do-while.</p>
					<pre>
						  <code>
						       <p>class DoWhileLoopExample {cl}
								<br/>    public static void main(String args[]){cl}
								<br/>        int i=10;
								<br/>        do{cl}
								<br/>            System.out.println(i);
								<br/>            i--;
								<br/>        {cr}while(i>1);
								<br/>    {cr}
								<br/>{cr}
								<br/>
								<br/><br/>OUTPUT
								<br/>10
								<br/>9
								<br/>8
								<br/>7
								<br/>6
								<br/>5
								<br/>4
								<br/>3
								<br/>2
								
								</p>
						  </code>
					</pre>

					<p><br/><h3><u>For loop</u></h3>
								<br/>For Loops are used to execute a set of statements repeatedly until a particular condition is satisfied.
								</p>
					<pre>
						  <code>
						       <p>for(initialization; condition ; increment/decrement)
								<br/>{cl}
								<br/>    statement(s);
								<br/>{cr}
								</p>
						  </code>
					</pre>

					<ul>
						<li><b>First step:</b> In for loop, initialization happens first and only one time, which means that the initialization part of for loop only executes once.</li><br/><br/>
						<li><b>Second step:</b> Condition in for loop is evaluated on each iteration, if the condition is true then the statements inside for loop body gets executed. Once the condition returns false, the statements in for loop does not execute and the control gets transferred to the next statement in the program after for loop.</li><br/><br/>
						<li><b>Third step:</b> After every execution of for loop’s body, the increment/decrement part of for loop executes that updates the loop counter.</li><br/><br/>
						<li><b>Fourth step:</b> After third step, the control jumps to second step and condition is re-evaluated.</li><br/><br/>
					</ul>
				

				<p>Example</p>
					<pre>
						  <code>
						       <p>class ForLoopExample {cl}
								<br/>    public static void main(String args[]){cl}
								<br/>        for(int i=10; i>1; i--){cl}
								<br/>             System.out.println("The value of i is: "+i);
								<br/>        {cr}
								<br/>    {cr}
								<br/>{cr}
								<br/><br/>
								<br/>OUTPUT
								<br/>The value of i is:10
								<br/>The value of i is:9
								<br/>The value of i is:8
								<br/>The value of i is:7
								<br/>The value of i is:6
								<br/>The value of i is:5
								<br/>The value of i is:4
								<br/>The value of i is:3
								<br/>The value of i is:2
								</p>
						  </code>
					</pre>


					<p><br/><h3><u>For-each loop</u></h3>
								<br/>For-each is another array traversing technique like for loop, while loop or do-while loop
					</p>

					<ul>
						<li>It starts with the keyword for like a normal for-loop.</li><br/>
						<li>Instead of declaring and initializing a loop counter variable, you declare a variable that is the same type as the base type of the array, followed by a colon, which is then followed by the array name.</li>
						<li>In the loop body, you can use the loop variable you created rather than using an indexed array element.</li>
						<li>It’s commonly used to iterate over an array or a Collections class (eg, ArrayList)</li>
					</ul>

					<pre>
						  <code>
						       <p>for (type var : array) 
								<br/>{cl}
								<br/>     statements using var;
								<br/>{cr}
								
								</p>
						  </code>
					</pre>
					
					<p>Example</p>
					<pre>
						  <code>
						       <p>class ForEachLoop {cl}
								<br/>    public static void main(String args[]){cl}
								<br/>        int arr[]={cl}2,11,45,9{cr};
								<br/>        for (int num : arr) {cl}
								<br/>            System.out.println(num);
								<br/>        {cr}
								<br/>    {cr}
								<br/>{cr}
								<br/><br/>
								<br/>OUTPUT
								<br/>2
								<br/>11
								<br/>45
								<br/>9
								</p>
						  </code>
					</pre>
				
				</div>

			);
	}

}

export default Lesson5;