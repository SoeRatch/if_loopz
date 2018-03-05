
import React, { Component } from 'react';



class Lesson12 extends Component {
		

	render() {
		let cl='{';
		let cr='}';

		return(
				<div>
					<h1>Interface</h1>
					<p>An interface is a reference type in Java. It is similar to class. It is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface.
								<br/>
								<br/>Along with abstract methods, an interface may also contain constants, default methods, static methods, and nested types. Method bodies exist only for default methods and static methods.
								<br/>
								<br/>Writing an interface is similar to writing a class. But a class describes the attributes and behaviors of an object. And an interface contains behaviors that a class implements.


								<br/>
								<br/>Unless the class that implements the interface is abstract, all the methods of the interface need to be defined in the class.
								<br/>
								<br/>An interface cannot be instantiated and also it does not contain any constructors. All of the methods in an interface are abstract.
								<br/><br/>An interface is not extended by a class; it is implemented by a class.Also an interface can extend multiple interfaces.An Interface is implicitly abstract. Usage of abstract keyword is not required while declaring an interface.
								<br/><b>Example:</b>
					</p>
					<pre>
						  <code>
						       <p>interface Animal {cl}
								<br/>     public void eat();
								<br/>     public void travel();
								<br/>{cr}
								<br/>
								<br/>public class MammalInt implements Animal {cl}
								<br/>     public void eat() {cl}
								<br/>         System.out.println("Mammal eats");
								<br/>     {cr}
								<br/>
								<br/>     public void travel() {cl}
								<br/>         System.out.println("Mammal travels");
								<br/>     {cr}
								<br/>
								<br/>     public int noOfLegs() {cl}
								<br/>         return 0;
								<br/>     {cr}
								<br/>
								<br/>     public static void main(String args[]){cl}
								<br/>         MammalInt m = new MammalInt();
								<br/>         m.eat();
								<br/>         m.travel();
								<br/>     {cr}
								<br/>{cr}
								<br/>
								<br/>
								<br/>OUTPUT
								<br/>Mammal eats
								<br/>Mammal travels
								</p>
						  </code>
					</pre>

				
				</div>

			);
	}

}



export default Lesson12;