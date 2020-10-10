import React from 'react';
// import './helpline.css';
import './hospital.css'
// import phone from './Assets/bx-phone.png'
// import wave from './Assets/wave.png'

import {getBeds} from './utils/hospitals'
import {getState} from "./utils/StateUsingIP";
import h1 from './Assets/h1.png';
import h2 from './Assets/h2.png';
import h3 from './Assets/h3.png';
import bed from './Assets/bed.png';
class hospital extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            State: 'Delhi'
        }
    }

    async componentDidMount() {
        this.state.State = await getState();
        let {regional, summary} = await getBeds()
        let StateData = (regional.filter(e => {
            if (e.state === this.state.State) {
                return true
            }
            return false
        }))[0]

        this.setState({summary, regional, StateData})
    }
    filterCallBack = (e) => {
        return true
    }

    render(){
        return(
            <>
            <div className="container">
                {(this.state.StateData) ? (<>
                    <h1 className="head">{this.state.StateData["state"]}</h1>
                    <h4>Hospital Statistics</h4>
                    <div className="cards">
                        <div>
                            <div className="small-card">
                                <div>
                                    <img src={h1} alt="h1" className="foff"/>
                                </div>
                                <div className="wh">
                                    <div style={{color: "white", fontWeight: "600", marginTop: "10px"}}>Rural
                                        Hospitals
                                    </div>
                                    <div style={{color: "#5A80FF", fontSize: "25px", fontWeight: "600"}}>{this.state.StateData["ruralHospitals"]}</div>
                                </div>
                            </div>
                            <div className="small-card">
                                <div>
                                    <img src={bed} alt="h1" className="foff2"/>
                                </div>
                                <div className="wh">
                                    <div style={{color: "white", fontWeight: "600", marginTop: "10px"}}>Rural Beds</div>
                                    <div style={{color: "#5A80FF", fontSize: "25px", fontWeight: "600"}}>{this.state.StateData["ruralBeds"]}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="small-card">
                                <div>
                                <img src={h2} alt="h1" className="foff1"/>
                                </div>
                                <div className="wh">
                                    <div style={{color: "white", fontWeight: "600", marginTop: "10px"}}>Urban
                                        Hospitals
                                    </div>
                                    <div style={{color: "#5A80FF", fontSize: "25px", fontWeight: "600"}}>{this.state.StateData["urbanHospitals"]}</div>
                                </div>
                            </div>
                            <div className="small-card">
                                <div>
                                <img src={bed} alt="h1" className="foff2"/>
                                </div>
                                <div className="wh">
                                    <div style={{color: "white", fontWeight: "600", marginTop: "10px"}}>Urban Beds</div>
                                    <div style={{color: "#5A80FF", fontSize: "25px", fontWeight: "600"}}>{this.state.StateData["urbanBeds"]}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="small-card">
                                <div>
                                <img src={h3} alt="h1" className="foff"/>
                                </div>
                                <div className="wh">
                                    <div style={{color: "white", fontWeight: "600", marginTop: "10px"}}>Total
                                        Hospitals
                                    </div>
                                    <div style={{color: "#5A80FF", fontSize: "25px", fontWeight: "600"}}>{this.state.StateData["totalHospitals"]}</div>
                                </div>
                            </div>
                            <div className="small-card">
                                <div>
                                <img src={bed} alt="h1" className="foff2"/>
                                </div>
                                <div className="wh">
                                    <div style={{color: "white", fontWeight: "600", marginTop: "10px"}}>Total Beds</div>
                                    <div style={{color: "#5A80FF", fontSize: "25px", fontWeight: "600"}}>{this.state.StateData["totalBeds"]}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="small-carder">
                                <div style={{
                                    color: "#5A80FF",
                                    fontSize: "25px",
                                    fontWeight: "600",
                                    marginLeft: "50px",
                                    paddingTop: "15px"
                                }}>India
                                </div>
                                <table className="stab">
                                    {/* <tr>
                                        <td> Rural Hospitals</td>
                                        <td> {this.state.summary["ruralHospitals"]}</td>
                                    </tr>
                                    <tr>
                                        <td> Rural Beds</td>
                                        <td> {this.state.summary["ruralBeds"]}</td>
                                    </tr>
                                    <tr>
                                        <td> Urban Hospitals</td>
                                        <td> {this.state.summary["urbanHospitals"]}</td>
                                    </tr>
                                    <tr>
                                        <td> Urban Beds</td>
                                        <td> {this.state.summary["urbanBeds"]}</td>
                                    </tr> */}
                                    <tr>
                                        <td> Total Hospitals</td>
                                        <td> {this.state.summary["totalHospitals"]}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Beds</td>
                                        <td>{this.state.summary["totalBeds"]}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </>): null}
                <div className="table">
                        <table>
                        <th className="left2">State</th>
                            <th className="mid2">Rural Hospitals</th>
                            <th className="mid2">Rural Beds</th>
                            <th className="mid2">Urban Hospitals</th>
                            <th className="mid2">Urban Beds</th>
                            <th className="mid2">Total Hospitals</th>
                            <th className="right2">Total Beds</th>


                                { (this.state.regional) ? (this.state.regional.map(
                                    (e) => {
                                        return (<tr>
                                            <td>{e["state"]}</td>
                                            <td>{e["ruralHospitals"]}</td>
                                            <td>{e["ruralBeds"]}</td>
                                            <td>{e["urbanHospitals"]}</td>
                                            <td>{e["urbanBeds"]}</td>
                                            <td>{e["totalHospitals"]}</td>
                                            <td>{e["totalBeds"]}</td>
                                        </tr>)
                                    }
                                )) : null}

                        </table>

                    </div>
            </div>
            </>
        )
    }
}
export default hospital;