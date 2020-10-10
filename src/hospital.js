import React from 'react';
// import './helpline.css';
import './hospital.css'
import phone from './Assets/bx-phone.png'
import wave from './Assets/wave.png'

class hospital extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <>
            <div className="container">
                <h1 className="head">Tamil Nadu</h1>
                <h4>Hospital Statistics</h4>
                <div className="cards">
                    <div>
                        <div className="small-card">
                            <div>img</div>
                            <div className="wh">
                                <div style={{color:"white", fontWeight:"600",marginTop:"10px"}}>Rural Hospitals</div>
                                <div style={{color:"#5A80FF",fontSize:"25px", fontWeight:"600"}}>456</div>
                            </div>
                        </div>
                        <div className="small-card">
                        <div>img</div>
                            <div className="wh">
                                <div style={{color:"white", fontWeight:"600",marginTop:"10px"}}>Rural Beds</div>
                                <div style={{color:"#5A80FF",fontSize:"25px", fontWeight:"600"}}>456</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="small-card">
                        <div>img</div>
                            <div className="wh">
                                <div style={{color:"white", fontWeight:"600",marginTop:"10px"}}>Urban Hospitals</div>
                                <div style={{color:"#5A80FF",fontSize:"25px", fontWeight:"600"}}>4567</div>
                            </div>
                        </div>
                        <div className="small-card">
                        <div>img</div>
                            <div className="wh">
                                <div style={{color:"white", fontWeight:"600",marginTop:"10px"}}>Urban Beds</div>
                                <div style={{color:"#5A80FF",fontSize:"25px", fontWeight:"600"}}>3456</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="small-card">
                        <div>img</div>
                            <div className="wh">
                                <div style={{color:"white", fontWeight:"600",marginTop:"10px"}}>Total Hospitals</div>
                                <div style={{color:"#5A80FF",fontSize:"25px", fontWeight:"600"}}>1000</div>
                            </div>
                        </div>
                        <div className="small-card">
                        <div>img</div>
                            <div className="wh">
                                <div style={{color:"white", fontWeight:"600",marginTop:"10px"}}>Total Beds</div>
                                <div style={{color:"#5A80FF",fontSize:"25px", fontWeight:"600"}}>10181</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="small-carder">
                        <div style={{color:"#5A80FF",fontSize:"25px", fontWeight:"600", marginLeft:"50px"}}>India</div>
                        <table className="stab">
                            <tr>
                               <td> Total Hospitals</td>
                               <td> 1000</td>
                            </tr>
                            <tr>
                               <td> Total Beds</td>
                               <td> 20000</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                </div>
                <div className="table">
                        <table>
                        <th className="left2">State</th>
                            <th className="mid2">Rural Hospitals</th>
                            <th className="mid2">Rural Beds</th>
                            <th className="mid2">Urban Hospitals</th>
                            <th className="mid2">Urban Beds</th>
                            <th className="right2">Total Beds</th>
                            <tr>
                                <td>1</td>
                                <td>Punjab</td>
                                <td>8360407815</td>
                                <td>8360407815</td>
                                <td>8360407815</td>
                                <td>8360407815</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Haryana</td>
                                <td>Haryana</td>
                                <td>Haryana</td>
                                <td>Haryana</td>
                                <td>9855363731</td>
                            </tr>
                        </table>

                    </div>
            </div>
            </>
        )
    }
}
export default hospital;