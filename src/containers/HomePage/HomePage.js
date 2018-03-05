import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {

	render(){
		return(
				<div className="home">


						<h1 className="eh1">if_loopz</h1>
						<h2 className="eh2">if_loopz</h2>
						<p className="learn">learn to code</p>


						<div className="wire"></div>
							<div className="birdwrapper">
								<div className="bird1">
									    <div className="head1"></div>
									    <div className="beak1"></div>
									    <div className="body1"></div>
									    <div className="wing-left1"></div>
									    <div className="wing-right1"></div>
							    </div>
							    <div className="bird2">
									    <div className="head2"></div>
									    <div className="beak2"></div>
									    <div className="body2"></div>
									    <div className="wing-left2"></div>
									    <div className="wing-right2"></div>
							    </div>


							    <div className="about">
							    	<NavLink to={`/about`} style={{textDecoration: 'none' }}> 
										About the developer
									</NavLink>
									    
							    </div>
							</div>
				</div>
			);
	}

}

export default HomePage;