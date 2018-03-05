import React, { Component } from 'react';



class Lesson12 extends Component {
		

	render() {
		let lt="<";
		return(
				<div>
					<h1>Modules</h1>
					<p>If you quit from the Python interpreter and enter it again, the definitions you have made are lost.
					<br/> Therefore, if you want to write a somewhat longer program, you are better off using a text editor
					 to prepare the input for the interpreter and running it with that file as input instead. 
					 This is known as creating a script. 
					<br/><br/>Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter.
					Such a file is called a module.
					<br/><br/>Definitions from a module can be imported into other modules or into the main module
					<br/><br/>A module is a file containing Python definitions and statements. 
					The file name is the module name with the suffix .py appended.
					<br/><br/>Within a module, the module’s name (as a string) is available as the value of the global variable <b>__name__</b>.
					<br/><br/>For instance, use your favorite text editor to create a file called <b>fibo.py </b>
					in the current directory with the following contents:
					</p>
					<pre>
						  <code>
						       <p>
						       	def fib(n):      # write Fibonacci series up to n
								<br/>    a, b = 0, 1
								<br/>    while b {lt} n:
								<br/>        print(b, end=' ')
								<br/>        a, b = b, a+b
								<br/>    print()
						   <br/><br/>def fib2(n):     # return Fibonacci series up to n
								<br/>    result = []
								<br/>    a, b = 0, 1
								<br/>    while b {lt} n:
								<br/>        result.append(b)
								<br/>        a, b = b, a+b
								<br/>    return result
								</p>
						  </code>
					</pre>
					<p>Now enter the Python interpreter and import this module with the following command: </p>
					 <pre>
						  <code>
						       <p>
						       	>>> import fibo
								</p>
						  </code>
					</pre>

					<p>This does not enter the names of the functions defined in <b>fibo</b> directly in the current symbol table
					<br/>It only enters the module name <b>fibo</b> there. Using the module name you can access the functions:
					</p>
					<pre>
						  <code>
						       <p>
						       	>>> fibo.fib(1000)
								<br/>1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
								<br/><br/>>>> fibo.fib2(100)
								<br/>[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
								<br/><br/>>>> fibo.__name__
								<br/>'fibo'
								</p>
						  </code>
					</pre>
					<br/><br/>
					<p>There is a variant of the import statement that imports names
					from a module directly into the importing module’s symbol table. For example:
					</p>
					<pre>
						  <code>
						       <p>
						       	>>> from fibo import fib, fib2
								<br/>>>> fib(500)
								<br/>1 1 2 3 5 8 13 21 34 55 89 144 233 377
								</p>
						  </code>
					</pre>
					<br/><br/><p>To import all names that a module defines:
					</p>
					<pre>
						  <code>
						       <p>
						       	>>> from fibo import *
						       	<br/>>>> fib(500)
						       	<br/>1 1 2 3 5 8 13 21 34 55 89 144 233 377
								</p>
						  </code>
					</pre>
					<h2>Executing modules as scripts</h2>
					<p>When you run a Python module with</p>
					<pre>
						  <code>
						       <p>
						       python fibo.py {lt}arguments>
						       </p>
						  </code>
					</pre>
					<p>the code in the module will be executed, 
					just as if you imported it, but with the <b>__name__</b> set to <b>"__main__"</b>.</p>
					<pre>
						  <code>
						       <p>
						       if __name__ == "__main__":
						       	<br/>    import sys
						       <br/>    fib(int(sys.argv[1]))
						       </p>
						  </code>
					</pre>
					<p>You can make the file usable as a script as well as an importable module, because the code that parses the command line only runs if the module is executed as the <b>“main”</b> file.
					</p>
					<pre>
						  <code>
						       <p>
						       $ python fibo.py 50
						       	<br/>1 1 2 3 5 8 13 21 34
						       </p>
						  </code>
					</pre>

					<h2>The Module Search Path</h2>
					<p>When you run a Python module with</p>
					<pre>
						  <code>
						       <p>
						       python fibo.py {lt}arguments>
						       </p>
						  </code>
					</pre>
					<p>When a module named <b>spam</b> is imported, the interpreter first searches for a built-in module with that name.
					<br/><br/>If not found, it then searches for a file named <b>spam.py</b>
					in a list of directories given by the variable <b>sys.path</b>
					<br/><br/><b> sys.path </b>is initialized from these locations:
					<ul>
						<li>The directory containing the input script</li>
						<li>PYTHONPATH (a list of directory names, with the same syntax as the shell variable PATH).</li>
						<li>PYTHONPATH (a list of directory names, with the same syntax as the shell variable PATH).</li>
					</ul>
					After initialization, Python programs can modify sys.path. The directory containing the script being run is placed at the beginning of the search path, ahead of the standard library path. This means that scripts in that directory will be loaded instead of modules of the same name in the library directory. This is an error unless the replacement is intended. See section Standard Modules for more information.
					</p>
					<pre>
						  <code>
						       <p>
						       if __name__ == "__main__":
						       	<br/>    import sys
						       <br/>    fib(int(sys.argv[1]))
						       </p>
						  </code>
					</pre>
					<p>You can make the file usable as a script as well as an importable module, because the code that parses the command line only runs if the module is executed as the <b>“main”</b> file.
					</p>
					<pre>
						  <code>
						       <p>
						       $ python fibo.py 50
						       	<br/>1 1 2 3 5 8 13 21 34
						       </p>
						  </code>
					</pre>
				</div>
			);
	}

}



export default Lesson12;