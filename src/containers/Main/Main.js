import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Taitle from '../Taitle/Taitle';
import './Main.css';
import Bodypage from '../Bodypage/Bodypage'

class Main extends Component {
	render() {
		return(
			<div className="background">
				<div className="siz">
					<div className="pos">
							<div className="flexRowContainer">
							 	<div>
			        				<Nav />
			      				</div>
								<Taitle />
							</div>
					</div>
				</div>
				<Bodypage/>	

			</div>
			);
	}

}

export default Main;