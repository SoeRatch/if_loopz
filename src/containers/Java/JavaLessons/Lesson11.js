/* eslint-disable */
import React, { Component } from 'react';

class Lesson11 extends Component {
		

	render() {
		let cl='{';
		let cr='}';

		return(
				<div>
					<h1>Classes and Objects</h1>
					<p><h3>Class</h3>
					<br/>A class (short for classification) is simply a representation of some entity or thing which is composed of state and behavior.It is a blueprint or prototype from which objects are creaed..
								<br/>
								<br/>The state of a class is the data associated with it, while the behaviors of a class are the actions that the class can perform. For example, we can classify a simple vehicle by saying that it has a manufacturer name, model name, and production year associated with it. Likewise, we can say that our simple car can accelerate and decelerate.
								<br/>
								<br/>Therefore, we can define state and behavior using the following rule:
								<br/>      <b>"The state of a class is what the class has, while the behavior of a class is what the class can do"</b>
								<br/>
								<br/> It represents the set of properties or methods that are common to all objects of one type. In general, class declarations can include these components:
								<ol>
									<li><b>Modifiers</b> : A class can be public or has default access .</li><br/>
									<li><b>Class name</b> : The name should begin with a initial letter (capitalized by convention).</li><br/>
									<li><b>Superclass(if any)</b> : The name of the class’s parent (superclass), if any, preceded by the keyword extends. A class can only extend one parent.</li><br/>
									<li><b>Interfaces(if any)</b> : A comma-separated list of interfaces implemented by the class, if any, preceded by the keyword implements. A class can implement more than one interface.</li><br/>
									<li><b>Body</b> : The class body surrounded by braces, {cl}{cr}.</li>
								</ol>
								<br/>
								<br/>Constructors are used for initializing new objects. Fields are variables that provides the state of the class and its objects, and methods are used to implement the behavior of the class and its objects.
								<br/>
								<br/><h3>Object</h3>
								<br/>Onject represents the real life entities.A typical Java program creates many objects, which interact by invoking methods.
								<br/>An object consists of :
								<ol>
									<li><b>State</b> :  It is represented by attributes of an object. It also reflects the properties of an object.</li><br/>
									<li><b>Behavior</b> : It is represented by methods of an object.</li><br/>
									<li><b>Identity</b> : It gives a unique name to an object and enables one object to interact with other objects.</li><br/>
								</ol>
								<br/>
								<br/><b>Declaring Objects or instantiating a class</b>
								<br/>When an object of a class is created, the class is said to be instantiated. All the instances share the attributes and the behavior of the class. But the values of those attributes, i.e. the state are unique for each object. A single class may have any number of instances.
			
								</p>
					<pre>
						  <code>
						       <p>
								<br/>Cat mimi;
								</p>
						  </code>
					</pre>
				

				<p>Here , <b>Cat</b> is the class name and <b>mimi</b> is the object.Here mimi is a variable whose type is not primitive instead type(Cat) is of reference type. 
								<br/>Hence we say this a reference variable . So for reference variable, type must be strictly a concrete class name. In general,we can’t create objects of an abstract class or an interface.
								<br/>
								<br/>But, simply declaring a reference variable(object) does not create an object .
								<br/>The object mimi's value is null for now.
								<br/>
								<br/>
								<br/><b>Initializing an object</b>
								<br/>
								</p>The <b>new</b> operator instantiates a class by allocating memory for a new object and returning a reference to that memory.
					<pre>
						  <code>
						       <p>public class Dog
								<br/>{cl}
								<br/>    String name;
								<br/>    String breed;
								<br/>    int age;
								<br/>    String color;
								<br/>
								<br/>    // Constructor
								<br/>    public Dog(String name, String breed,int age, String color)
								<br/>    {cl}
								<br/>        this.name = name;
								<br/>        this.breed = breed;
								<br/>        this.age = age;
								<br/>        this.color = color;
								<br/>    {cr}
								<br/>
								<br/>    // method 1
								<br/>    public String getName()
								<br/>    {cl}
								<br/>        return name;
								<br/>    {cr}
								<br/>
								<br/>    // method 2
								<br/>    public String getBreed()
								<br/>    {cl}
								<br/>        return breed;
								<br/>    {cr}
								<br/>
								<br/>    // method 3
								<br/>    public String getAge()
								<br/>    {cl}
								<br/>        return age;
								<br/>    {cr}
								<br/>
								<br/>    // method 4
								<br/>    public String getColor()
								<br/>    {cl}
								<br/>        return color;
								<br/>    {cr}
								<br/>
								<br/>    @Override
								<br/>    public String toString()
								<br/>    {cl}
								<br/>        this.name = name;
								<br/>        this.breed = breed;
								<br/>        this.age = age;
								<br/>        this.color = color;
								<br/>    {cr}
								<br/>    public Dog(String name, String breed,int age, String color)
								<br/>    {cl}
								<br/>        return("Hi my name is "+ this.getName()+
									               ".\nMy breed,age and color are " +
									               this.getBreed()+"," + this.getAge()+
									               ","+ this.getColor());
								<br/>    {cr}
								<br/>
								<br/>   public static void main(String[] args)
								<br/>    {cl}
								<br/>        Dog tuffy = new Dog("tuffy","papillon", 5, "white");
								<br/>        System.out.println(tuffy.toString());
								<br/>        
								<br/>    {cr}
								<br/>    
								<br/>
								<br/> Output:   
								<br/> Hi my name is tuffy.
								<br/> My breed,age and color are papillon,5,white
							</p>
						  </code>
					</pre>
				

			
				
				</div>

			);
	}

}



export default Lesson11;