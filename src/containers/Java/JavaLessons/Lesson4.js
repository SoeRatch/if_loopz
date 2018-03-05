/* eslint-disable */
import React, { Component } from 'react';

class Lesson4 extends Component {
	render() {
		let cl='{';
		let cr='}';
		let lt='<';
		return(
				<div>
					<h1>Decision Making</h1>
					<p>Decision making structures have one or more conditions to be evaluated or tested by the program,
					 along with a statement or statements that are to be executed if the condition is determined to be true,
					  and optionally, other statements to be executed if the condition is determined to be false.
								<br/>
								<br/><h3><u>if statement</u></h3>
								<br/>An if statement consists of a boolean expression followed by one or more statements.
								</p>
					<pre>
						  <code>
						       <p>public class Test {cl}
								<br/>    public static void main(String args[]) {cl}
								<br/>        int x = 10;
								<br/>        if( x {lt} 20 ) {cl}
								<br/>            System.out.print("This is if statement");
								<br/>        {cr}
								<br/>    {cr}
								<br/>{cr}
								<br/><br/><br/><br/>OUTPUT
								<br/>This is if statement.
								
								</p>
						  </code>
					</pre>

					<p><br/><h3><u>if-else statement</u></h3>
								<br/>An if statement can be followed by an optional else statement, which executes when the Boolean expression is false.
								</p>
					<pre>
						  <code>
						       <p>if(Boolean_expression) {cl}
						       	<br/>    // Executes when the Boolean expression is true
						       	<br/>{cr}else {cl}
						       	<br/>    // Executes when the Boolean expression is false
						       	<br/>{cr}
						       	<br/>
						       	<br/>
						       	<br/>
						       	<br/>public class Test {cl}
								<br/>    public static void main(String args[]) {cl}
								<br/>        int x = 30;
								<br/>        if( x {lt} 20 ) {cl}
								<br/>            System.out.print("This is if statement");
								<br/>        {cr} else{cl}
								<br/>            System.out.print("This is else statement");
								<br/>        {cr}
								<br/>    {cr}
								<br/>{cr}
								<br/><br/>
								<br/><br/>OUTPUT
								<br/>This is else statement.
								
								</p>
						  </code>
					</pre>

					<p><br/><h3><u>nested if statement</u></h3>
								<br/>nested if-else statements  means you can use one if or else if statement inside another if or else if statement.
								</p>
					<pre>
						  <code>
						       <p>if(Boolean_expression 1) {cl}
						       	<br/>    // Executes when the Boolean expression 1 is true
						       	<br/>    if(Boolean_expression 2) {cl}
						       	<br/>        // Executes when the Boolean expression 2 is true
						       	<br/>    {cr}
						       	<br/>{cr}
						       	<br/>
						       	<br/>
						       	<br/>
						       	<br/>public class Test {cl}
								<br/>    public static void main(String args[]) {cl}
								<br/>        int x = 30;
								<br/>        int y = 10;
								<br/>        if( x == 30 ) {cl}
								<br/>            if( y == 10 ) {cl}
								<br/>            System.out.print("X = 30 and Y = 10");
								<br/>            {cr}
								<br/>        {cr}
								<br/>    {cr}
								<br/>{cr}
								<br/><br/>
								<br/><br/>OUTPUT
								<br/>X = 30 and Y = 10
								
								<br/>
								</p>
						  </code>
					</pre>

					<p><br/><h3><u>Switch statement</u></h3>
								<br/>A switch statement allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each case.
								</p>
					<pre>
						  <code>
						       <p>switch(expression) {cl}
						       	<br/>    case value :
						       	<br/>        // Statements
						       	<br/>        break; // optional
						   <br/><br/>    case value :
						       	<br/>        // Statements
						       	<br/>        break; // optional
					            <br/><br/>    // You can have any number of case statements.
					            <br/>    default :  // Optional
						       	<br/>        // Statement					       							       	
						       	<br/>    {cr}						       	
							</p>
						  </code>
					</pre>
				

				<p><b>Rules to apply switch statement</b>
						<ul>
							<li>The allowed variable in a switch statement are strings,enums, integers and convertible integers(byte,short,char) .</li><br/><br/>
							<li>Any number of case statements are allowed within a switch. Each case is followed by the value to be compared to and a colon</li><br/><br/>
							<li>The value for a case must be the same data type as the variable in the switch and it must be a constant or a literal.</li><br/><br/>
							<li>When the variable being switched on is equal to a case, the statements following that case will execute until a break statement is reached.</li><br/><br/>
							<li>When a break statement is reached, the switch terminates, and the flow of control jumps to the next line following the switch statement.</li><br/><br/>
							<li>Not every case needs to contain a break. If no break appears, the flow of control will fall through to subsequent cases until a break is reached.</li><br/><br/>
							<li>A switch statement can have an optional default case, which must appear at the end of the switch. The default case can be used for performing a task when none of the cases is true. No break is needed in the default case.</li><br/><br/>
							
						</ul>
								</p>
					<pre>
						  <code>
						       <p>public class Test {cl}
								<br/>    public static void main(String args[]) {cl}
								<br/>        // char grade = args[0].charAt(0);
								<br/>        char grade = 'C';
								<br/>        switch(grade) {cl}
								<br/>            case 'A' :
								<br/>                System.out.println("Excellent!");
								<br/>                break;
								<br/>            case 'B' :
								<br/>            case 'C' :
								<br/>                System.out.println("Well done!");
								<br/>                break;
								<br/>            case 'D' :
								<br/>                System.out.println("You passed");
								<br/>            case 'F' :
								<br/>                System.out.println("Better try again");
								<br/>                break;
								<br/>            default :
								<br/>                System.out.print("Invalid grade");
								<br/>        {cr}
								<br/>        System.out.println("Your grade is " + grade);
								<br/>    {cr}
								<br/>{cr}
								<br/><br/>
								<br/><br/>OUTPUT
								<br/>//Compile and run the above program using various command line arguments. 
								<br/>Well done
								
								<br/>Your grade is C
								
								</p>
						  </code>
					</pre>
				

				<p><br/><h3><u>Conditional operator</u></h3>
								<br/>Conditional operator can be used to replace if...else statements. It has the following general form −
								</p>
					<pre>
						  <code>
						       <p>Exp1 ? Exp2 : Exp3;
								</p>
						  </code>
					</pre>
					Where Exp1, Exp2, and Exp3 are expressions. 
					<br/><br/>To determine the value of the whole expression, initially exp1 is evaluated.
					<ul>
						<li>If the value of exp1 is true, then the value of Exp2 will be the value of the whole expression.</li>
						<li>If the value of exp1 is false, then Exp3 is evaluated and its value becomes the value of the entire expression.</li>
					</ul>
				</div>

			);
	}

}

export default Lesson4;