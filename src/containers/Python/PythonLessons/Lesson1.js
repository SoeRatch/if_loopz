import React, { Component } from 'react';
import  '../../Style/Content.css';

class Lesson1 extends Component {
	render() {
		
		return(

				<div>
					<h1>Intro</h1>
					<p> One of the most popular rumors about python is that python is easy . 
					<br/><br/>Along with providing a simple and effective approach to object-oriented programming , its easy syntax and dynamic typing is making it more and more popular .
                     <br/><br/>Therefore python with its interpreted 
                     nature is now being considered by many as an ideal
                      language for scripting and rapid application development in many areas 
                      on most platforms. 

                      <br/><br/><br/>To start with  python, download the python interpreter on your machine which are easily available 
                      at <a href=" https://www.python.org/"> https://www.python.org/</a>.
					<br/><br/>The interpreter acts as a simple calculator: you can type an expression at it and it will write the value.</p>
					<pre>
						  <code>
						       <p>>>> 2 + 2
								<br/>4
								<br/>>>> 50 - 5*6
								<br/>20
								<br/>>>> (50 - 5*6) / 4
								<br/>5.0
								<br/>>>> 8 / 5  # division always returns a floating point number
								<br/>1.6
								</p>
						  </code>
					</pre>
				</div>
				);
	}

}

export default Lesson1;