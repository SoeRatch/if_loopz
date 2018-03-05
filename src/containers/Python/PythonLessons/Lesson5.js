import React, { Component } from 'react';
import  '../../Style/Content.css';

class Lesson5 extends Component {
	render() {
		
		return(	<div>
					<h1>Control Flow</h1>
					<h3>if Statements</h3>
					<pre>
						  <code>
						       <p>
						       	>>> x = int(input("Please enter an integer: "))
						       <br/>Please enter an integer: -42
						       <br/>
						       <br/>>>> if x > 0:
						       <br/>        print("It's a positive number")
						       <br/>    elif x == 0:
						       <br/>        print('The value is Zero')
							   <br/>    elif x == 1:
							   <br/>        print('The value is Single')
							   <br/>    else:
							   <br/>        print("It's a negative number")
							   <br/><br/>It's a negative number
								</p>
						  </code>
					</pre>
					<h3>for Statements</h3>
					<p>Python’s for statement iterates over the items of any sequence (a list or a string), in the order that they appear in the sequence 
					   rather than always iterating over an arithmetic progression of numbers like in C or Pascal</p>
					<pre>
						  <code>
						       <p>
						       	>>> words = ['cat', 'window', 'defenestrate']
						       <br/>
						       <br/>>>> for w in words:
						       <br/>        print(w, len(w))
						       <br/><br/>cat 3
								<br/>window 6
								<br/>defenestrate 12
								</p>
						  </code>
					</pre>
					<h3>The range() Function</h3>
					<p>This function is mostly used to iterate over a sequence of numbers </p>
					<pre>
						  <code>
						       <p>
						       >>> for i in range(5):
								<br/>        print(i)
								<br/><br/><br/><br/>object returned by range() behaves as if it is a list, but in fact it isn’t.
								<br/>It is an object which returns the successive items of the desired 
								sequence when you iterate over it, but it doesn’t really make the list, thus saving space.
								<br/><br/>>>> print(range(10))
								<br/>range(0, 10)
								<br/><br/><br/>

								<br/>>>> list(range(5))
								<br/>[0, 1, 2, 3, 4]
							   </p>
						  </code>
					</pre>
					<p> It is possible to let the range start at another number,
					 or to specify a different increment (even negative; sometimes this is called the ‘step’)</p>
					<pre>
						  <code>
						        <p>range(5, 10)
						         <br/>5 through 9

									<br/>range(0, 10, 3)
									<br/>   0, 3, 6, 9

									<br/>range(-10, -100, -30)
									<br/>  -10, -40, -70
							   </p>
						  </code>
					</pre>
					<p>To iterate over the indices of a sequence, you can combine range() and len() as follows:</p>
					<pre>
						  <code>
						       <p>
						       >>> a = ['Mary', 'had', 'a', 'little', 'lamb']
						       <br/>>>> for i in range(len(a)):
								<br/>        for x in range(2, n):
								<br/><br/>0 Mary
								<br/>1 had
								<br/>2 a
								<br/>3 little
								<br/>4 lamb
							   </p>
						  </code>
					</pre><br/><br/>

					<h3> break and continue Statements, and else Clauses on Loops</h3>
					<p>The break statementbreaks out of the innermost enclosing for or while loop.
					<br/><br/>Loop statements may have an else clause; it is executed when the loop terminates 
					through exhaustion of the list (with for) or when the condition becomes false (with while),
					 but not when the loop is terminated by a break statement. 
					This is exemplified by the following loop, which searches for prime numbers:
					<br/></p>
					<pre>
						  <code>
						       <p>
						       >>> for n in range(2, 10):
								<br/>    for x in range(2, n):
								<br/>         if n % x == 0:
								<br/>              print(n, 'equals', x, '*', n//x)
								<br/>              break
								<br/>    else:
							    <br/>	     # loop fell through without finding a factor
							    <br/>        print(n, 'is a prime number')
								<br/>
								<br/>

								<br/>2 is a prime number
								<br/>3 is a prime number
								<br/>4 equals 2 * 2
								<br/>5 is a prime number
								<br/>6 equals 2 * 3
								<br/>7 is a prime number
								<br/>8 equals 2 * 4
								<br/>9 equals 3 * 3
								
							   </p>
						  
						  </code>
					</pre>
					<br/><p>When used with a loop, the else clause has more in common with the else clause of a try statement than it does that of if statements: a try statement’s else clause runs when no exception occurs, and a loop’s else clause runs when no break occurs.</p>
					<br/><br/><br/><p>The continue statement, also borrowed from C, continues with the next iteration of the loop:</p>
					<pre>
						  <code>
						       <p>
						       >>> for num in range(2, 10):
								<br/>    if num % 2 == 0:
								<br/>         print("Found an even number", num)
								<br/>         continue
								<br/>    print("Found a number", num)
										<br/><br/>Found an even number 2
										<br/>Found a number 3
										<br/>Found an even number 4
										<br/>Found a number 5
										<br/>Found an even number 6
										<br/>Found a number 7
										<br/>Found an even number 8
										<br/>Found a number 9
								
							   </p>
						  
						  </code>
					</pre>
				</div>


			);
	}

}

export default Lesson5;