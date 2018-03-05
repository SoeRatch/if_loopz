import React, { Component } from 'react';
import  '../../Style/Content.css';

class Lesson2 extends Component {
	render() {
		
		return(
				<div>
					<h1>Numbers</h1>
					<p>Division ( / ) always returns a float and (%) returns remainder</p>
					<pre>
						  <code>
						       <p>
						       	>>> 8 / 5
								<br/>1.6
								<br/>
								<br/>>>> 8 % 5
								<br/>3
								</p>
						  </code>
					</pre>
					<p> ( // ) operator is also used for division but the result is always an integer value neglecting the fraction. </p>
					<pre>
						  <code>
						       <p>
						       	>>>8 // 5
								<br/>1
								<br/>
								<br/>>>> 17 / 3
								<br/>5.666666666666667
								<br/>
								<br/>>>> 17 // 3  
								<br/>5
								</p>
						  </code>
					</pre>
					<p>( ** ) operator is used to calculate power.</p>
					<pre>
						  <code>
						       <p>
						       	>>> 5** 3
								<br/>125
								</p>
						  </code>
					</pre>
					<p>( = ) operator is used to assign variables.</p>
					<pre>
						  <code>
						       <p>
							       	>>> zip = 3
									<br/>>>> zap = 9
									<br/>>>> zip*zap
									<br/>27
								</p>
						  </code>
					</pre>
				</div>
			);
	}
}

export default Lesson2;