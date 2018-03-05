import React, { Component } from 'react';
import JavaAPI from './Javaapi'
import { NavLink } from 'react-router-dom';
import { LessonItem } from '../Bodypage/Bodypage.style';

class Java extends Component {

	render() {
		
		return(
				<div>
						{
							JavaAPI.all().map(l=>(
								<div>
									<NavLink to={`/java/${l.number}`} style={{textDecoration: 'none' }}> <LessonItem> {l.number})  {l.name} </LessonItem>  </NavLink>
								</div>
								)
							)
						}

				</div>
			);
	}

}

export default Java;
