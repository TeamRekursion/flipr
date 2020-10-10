import React from 'react';
import back from './Assets/back.png';
import map from './Assets/map.png';

class helpline extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <>
            <div className="cont">
                <img src={back} alt="back" className="bac"/>
                <div className="gm">
                    <div>
                        nj
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