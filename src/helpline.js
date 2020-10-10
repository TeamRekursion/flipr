import React from 'react';
import './helpline.css';
import phone from './Assets/bx-phone.png'
import wave from './Assets/wave.png'

class helpline extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <>
            <div className="container">
                <div className="box">
                    <form>
                        <input type="text" placeholder="Search.." name="search" className="searchbox"/>
                        {/* <button className="but">search</button> */}
                    </form>
                </div>
                <div className="large-card">
                <img src={wave} alt="wave" className="wave"/>
                    <h3 className="text-head">Tamil Nadu</h3>
                    <br/>
                    <br/>
                    <h3 className="text-help">Helpline number</h3>
                    <span className="num">
                        <img src={phone} alt="phone" className="ph"/>
                    </span>
                    <span className="number">8360407845</span>
                    
                </div>
                <div className="table">
                        <table>
                            <th className="left">S no</th>
                            <th>State</th>
                            <th className="right">Number</th>
                            <tr>
                                <td>1</td>
                                <td>Punjab</td>
                                <td>8360407815</td>
                            </tr>
                            <tr>
                                <td>2</td>
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
export default helpline;