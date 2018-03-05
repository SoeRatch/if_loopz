import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Lesson1 from './PythonLessons/Lesson1';
import Lesson2 from './PythonLessons/Lesson2';
import Lesson3 from './PythonLessons/Lesson3';
import Lesson4 from './PythonLessons/Lesson4';
import Lesson5 from './PythonLessons/Lesson5';
import Lesson6 from './PythonLessons/Lesson6';
import Lesson7 from './PythonLessons/Lesson7';
import Lesson8 from './PythonLessons/Lesson8';
import Lesson9 from './PythonLessons/Lesson9';
import Lesson10 from './PythonLessons/Lesson10';
import Lesson11 from './PythonLessons/Lesson11';
import Lesson12 from './PythonLessons/Lesson12';
import Lesson13 from './PythonLessons/Lesson13';


class PythonLesson extends Component {
		

	render() {
		
		return(
				<div>
					<Switch>
						
						
						<Route  path="/python/1" component={Lesson1}/>
						<Route  path="/python/2" component={Lesson2}/>
						<Route  path="/python/3" component={Lesson3}/>
						<Route  path="/python/4" component={Lesson4}/>
						<Route  path="/python/5" component={Lesson5}/>
						<Route  path="/python/6" component={Lesson6}/>
						<Route  path="/python/7" component={Lesson7}/>
						<Route  path="/python/8" component={Lesson8}/>
						<Route  path="/python/9" component={Lesson9}/>
						<Route  path="/python/10" component={Lesson10}/>
						<Route  path="/python/11" component={Lesson11}/>
						<Route  path="/python/12" component={Lesson12}/>
						<Route  path="/python/13" component={Lesson13}/>
						
						
				    </Switch>
				</div>
			);
	}

}

export default PythonLesson;
