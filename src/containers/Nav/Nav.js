/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { NavigationContainer } from './NavigationBar.style';
var assign = require('object-assign');
var menu = require('./style/menu');
var menuItem = require('./style/menu-item');
var ball = require('./style/ball');
var GooeySvg = require('./GooeySvg');


class Nav extends Component {
	constructor(props) {
				super(props);
			    this.state = {
			      isOpen: false
			    }
			    this.onToggle = this.onToggle.bind(this);
			  }

	
		style(){
			return menu;
		}
		styleProps(inde) {
					    return {
					      index: inde,
					      orientation: "right"
					    };
					  }

		smallstyle(ind) {
			    var smallstyle = assign({}, menuItem.std(this.styleProps(ind)));

			    if (this.state.isOpen) 
			    	smallstyle = assign(smallstyle, menuItem.revealed(this.styleProps(ind)));

			    return smallstyle;
			  }

		onToggle() {
				    var isOpen = !this.state.isOpen;
				    this.setState({ isOpen: isOpen });
				  }
	
		bigstyle() {
			    var style = assign({},  {
			    	
				      background: '#ff8008',
				      // eslint-disable-next-line 
				      background: '-webkit-linear-gradient(to bottom, #ff8008,  #ffc837)', 
				      // eslint-disable-next-line
				      background: 'linear-gradient(to bottom, #ff8008, #ffc837)', 
					  borderRadius: '100%',
					  width: '75px',
					  height: '75px',
					  display: 'block',
					  color: 'white',
					  textAlign: 'center',
					  lineHeight: '75px',
					  transform: 'translate3d(0,0,0)',
					  transition: 'transform ease-out',
					  transitionDuration: '200ms',
			      zIndex: 2,
			      transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			      // eslint-disable-next-line
			      transitionDuration: '400ms',
			      // eslint-disable-next-line
			      transform: 'scale(1.1,1.1) translate3d(0,0,0)',
			      cursor: 'pointer',
			      
			    });

			  

			    if (this.state.isOpen) {
			      style = assign({}, style, {
			        transitionTimingFunction: 'linear',
			        transitionDuration: '200ms',
			        transform: 'scale(0.8,0.8) translate3d(0,0,0)',
			        transform: `translate3d(${ 2 }px, ${ 2 }px, 0) rotate(-180deg)`
			      });
			    }

			    return style;
			  }

		componentWillMount() {
		    if (document.querySelector("#gooey-nav-svgs")) return;
		    var domNode = GooeySvg({ id: "gooey-nav-svgs" });
		    document.body.appendChild(domNode);
		  }

		generateHamburgerCss(isOpen, i){
				var hamburgerSpacing = 8;
			    var width = 25;
			    var height = 3;
			    var rotateFactor = isOpen ? 45 : 0;
			    var rotate = -rotateFactor * i + rotateFactor;
			    var scale = isOpen && i === 1 ? 0 : 1;
			    var mySpace = isOpen ? 0 : (i*hamburgerSpacing - hamburgerSpacing);

			    return {
			      width: width + 'px',
			      height: height + 'px',
			      background: 'white',
			      display: 'block',
			      position: 'absolute',
			      top: '50%',
			      left: '50%',
			      marginLeft: -width/2 + 'px',
			      marginTop: -height/2 + 'px',
			      transition: 'transform 1000ms',
			      transform: `translate3d(0,${mySpace}px,0) scale(${scale}) rotate(${rotate}deg)`
    		};

		}

	render() {
		return(
			<NavigationContainer>
				<nav style={ this.style() }>
					<NavLink to="/python" style={this.smallstyle(1)} >Python</NavLink>
					<NavLink to="/java" style={this.smallstyle(2)} >Java</NavLink>
					<NavLink to="/" style={this.smallstyle(3)} >Home</NavLink>
					
					
					<a onClick={ this.onToggle } style={ this.bigstyle() }>
						{ [0,1,2].map(i =>
						 { 
						 	return (
						 		<span key={ i } style={this.generateHamburgerCss(this.state.isOpen,i) }>
						 		</span>
						 		) 
						 })
						}
					</a>
				</nav>
				
			</NavigationContainer>
			);
	}

}

export default Nav;