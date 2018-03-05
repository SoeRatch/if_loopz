import React, { Component } from 'react';

class Lesson6 extends Component {
	render() {
		let lt='<';
		return(
				<div>
					<h1>Functions</h1>
					<br/><br/><h3> Defining Functions</h3>
					<br/><p>Consider the below function to print fibonacci series</p>
					<pre>
						  <code>
						       <p>
						       	>>> def fib(n):
						       <br/>    a, b = 0, 1
						       <br/>    while a {lt} n:
						       <br/>        print(a, end=' ')
						       <br/>        a, b = b, a+b
							   <br/>    print()
							   <br/><br/>>>>fib(2000)
							   <br/>0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
								</p>
						  </code>
					</pre>
					<p>
					The keyword def introduces a function definition. 
					It must be followed by the 
					function name and the parenthesized list of formal parameters.
					<br/>The statements that form the body of the function
					 start at the next line, and must be indented.
					 <br/><br/>The execution of a function introduces a new symbol table used for the local variables of the function.
					  <br/><br/>More precisely, all variable assignments in a function store the value in the local symbol table;
					   whereas variable references first look in the local symbol table,
					    then in the local symbol tables of enclosing functions, 
					    then in the global symbol table, 
					    and finally in the table of built-in names. 
					   <br/><br/> Thus, global variables cannot be directly assigned a value within a function (unless named in a global statement),
					     although they may be referenced.
					<br/><br/>The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called; 
					thus, arguments are passed using call by value (where the value is always an object reference, not the value of the object). 
					 When a function calls another function, a new local symbol table is created for that call.

					<br/><br/>A function definition introduces the function name in the current symbol table. 
					<br/>The value of the function name has a type that is recognized by the interpreter as a user-defined function.
					 This value can be assigned to another name which can then also be used as a function. This serves as a general renaming mechanism:
					  </p>
					 <pre>
						  <code>
						       <p>
						       >>> fib
						       <br/>{lt}function fib at 10042ed0>
						       <br/><br/>>>> f = fib
						       <br/>>>> f(100)
						       <br/>0 1 1 2 3 5 8 13 21 34 55 89
						       </p>
						  </code>
					</pre>
					<p>The function above doesn't return a value .
					  In fact, even functions without a return statement do return a value
					  This value is called None (it’s a built-in name)</p>
				     <br/><br/><h3> Function with return </h3>
					<br/><p>This function returns a list of the numbers of the fibonacci series</p>
					<pre>
						  <code>
						       <p>
						       	>>> def fib(n):
						       	<br/>    result=[]
						       <br/>    a, b = 0, 1
						       <br/>    while a {lt} n:
						       <br/>        result.append(a)
						       <br/>        a, b = b, a+b
							   <br/>    return result
							   <br/><br/>f100 = fib(100)
							   <br/>>>> f100 
							   <br/>[0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597]
								</p>
						  </code>
					</pre>

					<br/><br/><h3> Default Argument Values </h3>
					<pre>
						  <code>
						       <p>
						       	>>> def ask_ok(prompt, retries=4, reminder='Please try again!'):
						       	<br/>     while True:
						       <br/>        ok = input(prompt)
						       <br/>        if ok in ('y', 'ye', 'yes'):          #in tests whether or not a sequence contains a certain value.
						       <br/>            return True
						       <br/>        if ok in ('n', 'no', 'nop', 'nope'):
						       <br/>            return False
						       <br/>        retries = retries - 1
							   <br/>        if retries {lt} 0:
							   <br/>            raise ValueError('invalid user response')
							   <br/>        print(reminder)
							   </p>
						  </code>
					</pre>
					<p>This function can be called in several ways:</p>
					<ul>
						<li>giving only the mandatory argument: ask_ok('Do you really want to quit?')</li>
						<li>giving one of the optional arguments: ask_ok('OK to overwrite the file?', 2)</li>
						<li>or even giving all arguments: ask_ok('OK to overwrite the file?', 2, 'Come on, only yes or no!')</li>
					</ul>
					<br/><p>The default values are evaluated at the point of function definition in the defining scope, so that</p>
					<pre>
						  <code>
						       <p>i = 5
						       	<br/>
						       <br/>def f(arg=i):
						       <br/>    print(arg)
						       <br/>
						       <br/>i = 6
						       <br/>f()
						       
							   </p>
						  </code>
					</pre>
					<p>will print 5.</p>
					<br/><br/><p>The default value is evaluated only once. 
					<br/>This makes a difference when the default is a mutable object 
					such as a list, dictionary, or instances of most classes.</p>
                    <pre>
						  <code>
						       <p>def f(a, L=[]):
						       	<br/>    L.append(a)
						       <br/>    return L
						       <br/>print(f(1))
						       <br/>print(f(2))
						       <br/>print(f(3))
							   </p>
						  </code>
					</pre>
					<br/><br/>
					<p>This will print</p>
					<pre>
						  <code>
						       <p>[1]
						       	<br/>[1, 2]
						       <br/>[1, 2, 3]						       
							   </p>
						  </code>
					</pre>
					<p>If you don’t want the default to be shared between subsequent calls</p>
					<pre>
						  <code>
						       <p>def f(a, L=None):
						       	<br/>    if L is None:
						       <br/>        L = []
						       <br/>     L.append(a)
						       <br/>    return L						       
							   </p>
						  </code>
					</pre>
					<h3>Arbitrary Argument Lists</h3>
					<p>A function can also be called with an arbitrary number of arguments</p>
					<pre>
						  <code>
						       <p>>>> def concat(*args, sep="/"):
						       	<br/>    return sep.join(args)
						       <br/>
						       <br/>>>> concat("earth", "mars", "venus")
						       <br/>'earth/mars/venus'	
						       <br/>>>> concat("earth", "mars", "venus", sep=".")
						       <br/>'earth.mars.venus'						       
							   </p>
						  </code>
					</pre>

					<h3>Lambda Expressions</h3>
					<p>Small anonymous functions can be created with the lambda keyword. 
					<br/>This function returns the sum of its two arguments: lambda a, b: a+b.
					<br/> Lambda functions can be used wherever function objects are required.
					<br/>They are syntactically restricted to a single expression
					<br/>Like nested function definitions, lambda functions can reference variables from the containing scope:
					</p>
					<pre>
						  <code>
						       <p>>>>def make_incrementor(n):
						       	<br/>    return lambda x: x + n
						       <br/>
						       <br/>>>> f = make_incrementor(42)
						       <br/>>>> f(0)	
						       <br/>42
						       <br/>>>> f(1)
						       <br/>43						       
							   </p>
						  </code>
					</pre>
				</div>
			);
	}

}

export default Lesson6;