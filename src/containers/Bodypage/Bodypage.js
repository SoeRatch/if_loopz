import React , { Component } from 'react';
//import { VerticalLine} from './Bodypage.style';
import { Switch, Route } from 'react-router-dom';
import Python from '../Python/Python';
import PythonLesson from '../Python/PythonLesson';
import Java from '../Java/Java';
import JavaLesson from '../Java/JavaLesson';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import './Body.css';

class Bodypage extends Component {

	render(){
		return(
				<div className="body">
				how
						<Switch>
						<Route exact path="/" component={HomePage}/>
						<Route exact path="/about" component={AboutPage}/>
						</Switch>
						<div className="leftbar">
							<div className="leftbarpos">
									<Switch>
										<Route  path="/python" component={Python}/>
										<Route  path="/java" component={Java}/>
								    </Switch>
							</div>
					  	</div>
					  	
						<div className="maincontent">
							<Switch>
								<Route  path="/python/:number" component={PythonLesson}/>
								<Route  path="/java/:number" component={JavaLesson}/>
						    </Switch>
						</div>					
				</div>
			);
	}

}

export default Bodypage;