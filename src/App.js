import React from 'react';
import { BrowserRouter as Router, Switch , Route ,NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Helpline from './helpline';
import Analytics from './analytics';
import College from './college';
import Home from './home';
import Hospital from './hospital';
import home from './Assets/home.png';
import homeactive from './Assets/home-active.png';
import analytics from './Assets/analytics.png';
import analyticsA from './Assets/bx-line-chart.png';
// import state from './Assets/state.png';
// import hospitals from './Assets/hospital.png';
import phone from './Assets/phone.png';
import phoneA from './Assets/bx-phone.png';
// import helplines from './Assets/helpline.png';
import building from './Assets/building.png';
import buildingA from './Assets/bx-building-house.png';
import college from './Assets/college.png';
import logo from './Assets/logo.png';
import col from './Assets/hos.png';
// import helpline from './helpline';
// import hospital from './hospital';

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {}
  }
  async componentDidMount() {
    // let response;

          // try {
          //     response = await fetch("https://ifconfig.co/json" );
          //     let responseJSON = await response.json()
          //     this.setState({
          //         state: responseJSON.region_name,
          //     })
          //
          // } catch (e) {
          // }
    this.setState({state: 'Delhi'});
    console.log(this.state.state)
  }
  render(){
  return (
    <Router>
    <div className="App">
      <div className="primary-nav">
	    <nav role="navigation" className="menu">
       <Link to="/" exact className="logo">
         <img src={logo} alt="logo" className="slog"/>
       </Link>
      {/*<ul className="gg">
        <li className="tab">a</li>
        <li className="tab">a</li>
        <li className="tab">a</li>
        <li className="tab1">a</li>
        <li className="tab1">a</li>
      </ul> */}
		  {/* <a href={"dscvit.com"} className="logotype">LOGO<span>TYPE</span></a> */}
		  <div className="overflow-container">
			<ul className="menu-dropdown">

        <NavLink exact to="/" className= "gg" activeClassName="active">
				  <li><a href={"/#"}>Home</a><span className="icon"><img src={home} className="log" alt="home"/><img src={homeactive} className="log-active" alt="home"/></span></li>
        </NavLink>
      
        <NavLink exact to="/analytics" className= "gg" activeClassName="active">
				  <li><a href={"/#"}>Analytics</a><span className="icon"><img src={analytics} className="log" alt="home"/><img src={analyticsA} className="log-active" alt="home"/></span></li>
        </NavLink>

        <NavLink to="/helpline" className= "gg" activeClassName="active">
				  <li><a href={"/#"}>State Helpline</a><span className="icon"><img src={phone} className="log" alt="home"/><img src={phoneA} className="log-active" alt="home"/></span></li>
        </NavLink>

        <NavLink to="/hospitals" className= "gg" activeClassName="active">
				  <li><a href={"/#"}>Hospitals</a><span className="icon"><img src={building} className="log" alt="home"/><img src={buildingA} className="log-active" alt="home"/></span></li>
        </NavLink>

        <NavLink to="/colleges" className= "gg" activeClassName="active">
				  <li><a href={"/#"}>Medical Colleges</a><span className="icon"><img src={college} className="log" alt="home"/><img src={col} className="log-active" alt="home"/></span></li>
        </NavLink>

				{/* <li className="menu-hasdropdown">
        <NavLink exact to="/hospitals" className= "menu__list-item menu__link" activeClassName="menu__list-item menu__link active">
					<a href={"dscvit.com"}>Hospital</a><span className="icon"><i className="fa fa-gear"></i></span>
          <label title="toggle menu" htmlFor="settings">
            <span className="downarrow"><i className="fa fa-caret-down">T</i></span>
          </label>
          </NavLink>
					
					<input type="checkbox" className="sub-menu-checkbox" id="settings" />
					<ul className="sub-menu-dropdown">
          <NavLink exact to="/hospitals" className= "menu__list-item menu__link" activeClassName="menu__list-item menu__link active">
						<li><a href={"dscvit.com"}>Hospitals</a><span className="icon"><i className="fa fa-gear">H</i></span></li>
          </NavLink>
          <NavLink exact to="/colleges" className= "menu__list-item menu__link" activeClassName="menu__list-item menu__link active">
						<li><a href={"dscvit.com"}>Medical Colleges</a><span className="icon"><i className="fa fa-gear">C</i></span></li>
          </NavLink>
					</ul>
				</li> */}
			</ul>
		</div>
	</nav>
</div>
    </div>
    <Switch>
      <Route path="/" exact component={Home}  />
      <Route path="/analytics" component={Analytics} />
      <Route path="/helpline" component={Helpline}/>
      <Route path="/hospitals" component={Hospital}/>
      <Route path="/colleges" component={College}/>
    </Switch>
    </Router>
  );
}
};
export default App;
