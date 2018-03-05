import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Lesson1 from './JavaLessons/Lesson1';
import Lesson2 from './JavaLessons/Lesson2';
import Lesson3 from './JavaLessons/Lesson3';
import Lesson4 from './JavaLessons/Lesson4';
import Lesson5 from './JavaLessons/Lesson5';
import Lesson6 from './JavaLessons/Lesson6';
import Lesson7 from './JavaLessons/Lesson7';
import Lesson8 from './JavaLessons/Lesson8';
import Lesson9 from './JavaLessons/Lesson9';
import Lesson10 from './JavaLessons/Lesson10';
import Lesson11 from './JavaLessons/Lesson11';
import Lesson12 from './JavaLessons/Lesson12';

class JavaLesson extends Component {
		

	render() {
		
		return(
				<div>
					
					<Switch>						
						<Route  path="/java/1" component={Lesson1}/>
						<Route  path="/java/2" component={Lesson2}/>
						<Route  path="/java/3" component={Lesson3}/>
						<Route  path="/java/4" component={Lesson4}/>
						<Route  path="/java/5" component={Lesson5}/>
						<Route  path="/java/6" component={Lesson6}/>
						<Route  path="/java/7" component={Lesson7}/>
						<Route  path="/java/8" component={Lesson8}/>
						<Route  path="/java/9" component={Lesson9}/>
						<Route  path="/java/10" component={Lesson10}/>
						<Route  path="/java/11" component={Lesson11}/>
						<Route  path="/java/12" component={Lesson12}/>
										
				    </Switch>
				</div>
			);
	}

}

export default JavaLesson;
