import React, { Component } from 'react';
import  '../../Style/Content.css';

class Lesson1 extends Component {
	render() {
		
		return(
				<div>
					<h1>Introduction</h1>
					<p>
								<br/>Java is an object-oriented programming language with its runtime environment. It is a combination of features of C and C++ with some essential additional concepts. Java is well suited for both standalone and web application development and is designed to provide solutions to most of the problems faced by users of the internet era.
								<br/>
								<br/>Java programs are platform independent which means they can be run on any operating system with any processor as long as the Java interpreter is available on that system.
								<br/>
								<br/>Java code that runs on one platform does not need to be recompiled to run on another platform. It is called <b>write once, run anywhere</b>
								<br/>
								<br/>Java Virtual Machine (JVM) executes Java code.
								<br/>But even though Java programs are platform independent JVM is not because it has been written in platform-specific languages such as C/C++/ASM, etc. 
								JVM is not written in Java and hence cannot be platform independent, and Java interpreter is a part of JVM.

								<br/><br/>
					</p>
					<h2>Features of Java</h2>
					<ul>
						<li><b>Object-Oriented:</b> Java supports the features of object-oriented programming. Its object model is simple and easy to expand.</li>
						<br/><li><b>Platform independent:</b>  Java application programs written in one Operating system are able to run on any Operating system.</li>
						<br/><li><b>Simple:</b>  Java has included many features of C / C ++, which makes it easy to understand.</li>
						<br/><li><b>Secure:</b>  Java provides a wide range of protection from viruses and malicious programs.  It ensures that there will be no damage and no security will be broken.</li>
						<br/><li><b>Portable:</b>  Java provides us the concept of portability. Running the same program with Java on different platforms is possible.</li>
						<br/><li><b>Robust:</b>  During the development of the program, it helps us to find possible mistakes as soon as possible.</li>
						<br/><li><b>Multi-threaded:</b>  The multithreading programming feature in Java allows you to write a program that performs several different tasks simultaneously.</li>
						<br/><li><b>Distributed:</b>  Java is designed for distributed Internet environments as it manages the TCP/IP protocol.</li>
						
					</ul>
					
				
				</div>
			);
	}

}

export default Lesson1;