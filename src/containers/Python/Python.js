import React, { Component } from 'react';
import PythonAPI from './Pythonapi'
import { NavLink } from 'react-router-dom';
import { LessonItem } from '../Bodypage/Bodypage.style';

class Python extends Component {
	render() {
		
		return(
				<div>
						{
							PythonAPI.all().map(l=>(
								<div>
									<NavLink to={`/python/${l.number}`} style={{textDecoration: 'none' }}> 
										<LessonItem> {l.number})  {l.name} </LessonItem>  
									</NavLink>
								</div>
								)
							)
						}

				</div>
			);
	}

}

export default Python;
