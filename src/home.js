import React from 'react';
import back from './Assets/back.png';
import map from './Assets/map.png';
import logo from './Assets/logo.png';
import {Link} from 'react-router-dom';
import bell from './Assets/bell.png';

class helpline extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        // const requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };
    //     console.log("nj")
    //     fetch("https://ifconfig.co/json", requestOptions)
    // .then(response => response.json())
    // .then(result =>
    //     this.setState({state: result.region_name})
    //     )
    // .catch(error => console.log('error', error));
    }
    render(){
        return(
            <>
            <div className="cont">
                <img src={back} alt="back" className="bac"/>
                <div className="gm">
                    <div className="no">
                    <img src={logo} alt="logo"/>
                    <span>
                    <Link to="/notification">
                        
                        <button className="fuc1"> <span>
                        <img src={bell} alt="logo" className="bell"/>
                        </span> Notifications!</button>
                    </Link>
                    </span>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="suc">A all in one portal to stay<br/> updated about the <br/>pandemic</h1>
                    <br/>
                    <br/>
                    <Link to="/analytics">
                    <button className="fuc">Explore more!</button>
                    </Link>
                    </div>
                    <div style={{color:"white"}}>
                        <img src={map} alt="map" className="ma"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default helpline;