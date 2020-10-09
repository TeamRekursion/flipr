import React from 'react';
import { BrowserRouter as Router, Switch , Route  } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Helpline from './helpline';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="primary-nav">
	    <nav role="navigation" className="menu">
		  <a href={"dscvit.com"} className="logotype">LOGO<span>TYPE</span></a>
		  <div className="overflow-container">
			<ul className="menu-dropdown">
				<li><a href={"dscvit.com"}>Dashboard</a><span className="icon"><i className="fa fa-dashboard">D</i></span></li>
				<li className="menu-hasdropdown">
					<a href={"dscvit.com"}>Settings</a><span className="icon"><i className="fa fa-gear">S</i></span>
					<label title="toggle menu" htmlFor="settings">
        <span className="downarrow"><i className="fa fa-caret-down">T</i></span>
      </label>
					<input type="checkbox" className="sub-menu-checkbox" id="settings" />
					<ul className="sub-menu-dropdown">
						<li><a href={"dscvit.com"}>Profile</a></li>
						<li><a href={"dscvit.com"}>Security</a></li>
						<li><a href={"dscvit.com"}>Account</a></li>
					</ul>
				</li>
				<li><a href={"dscvit.com"}>Favourites</a><span className="icon"><i className="fa fa-heart">F</i></span></li>
				<li><a href={"dscvit.com"}>Messages</a><span className="icon"><i className="fa fa-envelope">M</i></span></li>
			</ul>
		</div>
	</nav>
</div>
    </div>
    <Switch>
      <Route path="/" exact component={Helpline}/>
      <Route path="/analytics" component={Helpline}/>
      <Route path="/helpline" component={Helpline}/>
      <Route path="/hospitals" component={Helpline}/>
      <Route path="/colleges" component={Helpline}/>
    </Switch>
    </Router>
  );
}

export default App;
