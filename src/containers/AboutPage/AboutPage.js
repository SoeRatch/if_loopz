/* eslint-disable */
import React , { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {

	render(){
		return(
				<div className="aboutbody">




				<header className="header">
						<div>
							<p className="header-intro">Hi, I'm</p>
							<h1 className="header-name">SURAJ SHARMA</h1>
						</div>
				</header>

				<section className="aboutt">
					<h2>Introduction</h2>
					<p>I'm a newly graduate and a tech enthusiast who lives in Bangalore .
					 I'm also a self taught full-stack developer and a programmer who is actively looking for a job .
					 I really want to learn how to implement AI techniques in the browsers and hence upgrade my already existing web-project with 
					  a better product in the future.</p>
					
					<p>Happiness is always going to be the most important thing to me.And the most happy thing about happiness is that happiness is easy.
					 A lot of people might say “Well, if it’s easy, then it probably isn’t worth anything.
					 ” Wrong – life should be easy.
					 If it’s not easy, then you might be doing it wrong.</p>
				</section>


				<section className="questions">
					<h2>More about me</h2>
					<h3>Where am I originally from?</h3>
					<p>I'm originally from a small town called Dudhnoi in Assam,India . where we are surrounded by greeneries and festivals are around almost every three months .
					I grew up in a small town but moved over to  Bangalore a few years ago.</p>
					<h3>What are your long terms goals?</h3>
					<p>I'd like to bring out the BEST HUMAN BEING I could ever be through hard work and perseverance.</p>
					<h3>What is my Dream Job?</h3>
					<p>Part of the reason I'm learning to code is because I want to be able to put my own ideas into practice. My dream 'job' would be to build my own product and be responsbible for the entire experience from design through to implementation. </p>

					<h3>What music have you been listening to?</h3>
					<p>I only just recently discovered an awesome website called <a href="http://hypem.com" target="_blank">Hype Machine</a> which watches popular music blogs and discovers new artists and lets you stream all the music completely free. I've been really implressed with their breadth and can just hit play and forget about it.</p>
				</section>

				<footer className="footer">
					<p>You can find out a bit more about me in these places</p>
					<ul className="social">
						<li><a href="https://suraj.surge.sh" target="=_blank">Portfolio</a></li>
						<li><a href="https://github.com/SoeRatch" target="_blank">Github</a></li>
						<li><a href="https://www.facebook.com/surajkoho" target="_blank">Facebook</a></li>
					</ul>
				</footer>



				</div>
			);
	}

}

export default AboutPage;