import React from 'react';
import './college.css';
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
                <div className="box1">
                    <form>
                    <label for="cars" style={{color:"white"}}>Select state:</label>
                    <select name="cars" id="cars" className="searchbox1">
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="A and N Islands">A & N Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    </select>
                    <label for="cars" style={{color:"white",marginLeft:"30px"}}>Select ownership:</label>
                    <select name="cars" id="cars" className="searchbox1">
                        <option value="volvo">Government</option>
                        <option value="saab">Private</option>
                        <option value="opel">Both</option>
                        
                    </select>
                        {/* <input type="text" placeholder="Filter by type" name="search" className="searchbox1"></input> */}
                        {/* <button className="but">search</button> */}
                    </form>
                </div>
                <div className="grid">
                <div className="large-card1">
                <img src={wave} alt="wave" className="wave1"/>
                    <h3 className="text-head">Tamil Nadu</h3>
                    <h3 className="text-help">College Name</h3>
                    <br/>
                    <br/>
                    <span className="num">
                        Type:
                    </span>
                    <span className="number">Government</span>
                </div>
                <div>
                    <div className="right-card">
                        <span className="im">
                            img.
                        </span>
                        <span>
                            Admission.
                        </span>
                    </div>
                    <div className="right-card">
                        nj
                    </div>
                </div>
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