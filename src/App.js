import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './App.css';	

class App extends Component {
render() {
	return (
	<Router>
		<div>
			<ul className>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About Us</Link>
			</li>
			<li>
				<Link to="/contact">Contact Us</Link>
			</li>
			</ul>
			<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/about' component={About}></Route>
			<Route exact path='/contact' component={Contact}></Route>
			</Switch>
		</div>
	</Router>
);
}
}
 export default App;
