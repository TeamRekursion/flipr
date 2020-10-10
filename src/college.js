import React from 'react';
import './college.css';
// import phone from './Assets/bx-phone.png'
// import wave from './Assets/wave.png'
import { getHospital } from './utils/hospitals'
import { getState } from './utils/StateUsingIP'
class college extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            State: 'Delhi',
            selectValue: "All",
            selectValue1: "All",
        }
    }

    async componentDidMount() {
        this.state.State = await getState();
        let data = await getHospital()
        let StateData = (data.filter(e => {
            if (e.state === this.state.State) {
                return true
            }
            return false
        }))[0]

        this.setState({
            collegeData: data,
            StateData
        })
    }
    filterCallBack = (e) => {
        if (this.state.selectValue === "All" && this.state.selectValue1 === "All") {
            return true
        }
        else if (this.state.selectValue == "All" && this.state.selectValue1 !=="All") {
            return (e.state === this.state.selectValue1)    
        }
        else if (this.state.selectValue != "All" && this.state.selectValue1 == "All") {
            if (e.ownership != null)
            return (e.ownership.replace(".","") == this.state.selectValue)
            else
            return false    
        }
        else {
            return (e.ownership == this.state.selectValue && e.state == this.state.selectValue1)
        }
    }
    // handleSelect=(e)=>{
    //     console.log(e);
    //   }
    handleChange = (e) => {
        // this.setState({selectValue:e.target.value});
        this.setState({ selectValue1: e.target.value });
        console.log(e.target.value);
    }
    handleChange1 = (e) => {
        // this.setState({selectValue:e.target.value});
        this.setState({ selectValue: e.target.value });
        console.log(e.target.value);
    }

    render() {
        console.log(this.state)
        return (
            <>
                <div className="container">
                    <div className="box1">
                        <form>
                            <label for="cars" style={{ color: "white" }}>Select state:</label>
                            <select name="cars" id="cars" className="searchbox1" value={this.state.selectValue1} onChange={this.handleChange}>
                                <option value="All">All</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="A & N Islands">A & N Islands</option>
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
                            <label for="cars" style={{ color: "white", marginLeft: "30px" }}>Select ownership:</label>
                            <select name="type" className="searchbox1" value={this.state.selectValue} onChange={this.handleChange1} >
                                <option value="All">All</option>
                                <option value="Society">Society</option>
                                <option value="Govt">Govt</option>
                                <option value="Trust">Trust</option>
                                <option value="University">University</option>
                            </select>
                            {/* <input type="text" placeholder="Filter by type" name="search" className="searchbox1"></input> */}
                            {/* <button className="but">search</button> */}
                        </form>
                    </div>
                    {(this.state.StateData) ? (<div className="grid">
                        <div className="large-card1">
                            {/* <img src={wave} alt="wave" className="wave1"/> */}
                            <h3 className="text-head">{this.state.StateData["state"]}</h3>
                            <h3 className="text-help">{this.state.StateData["name"]}</h3>
                            <br />
                            <br />
                            <span className="num">
                                Type:
                    </span>
                            <span className="number">{this.state.StateData["ownership"]}</span>
                        </div>
                        <div>
                            <div className="right-card">
                                <span className="im">
                                    img.
                        </span>
                                <span style={{ color: "white" }}>
                                    Admission capacity:
                        </span>
                                <br />
                                <span style={{ color: "#E78F36", fontWeight: "700", fontSize: "20px", marginLeft: "50px" }}>
                                    {this.state.StateData["admissionCapacity"]}
                                </span>
                            </div>
                            <div className="right-card">
                                <span className="im">
                                    img.
                        </span>
                                <span style={{ color: "white" }}>
                                    Hospital Beds:
                        </span>
                                <br />
                                <span style={{ color: "#E78F36", fontWeight: "700", fontSize: "20px", marginLeft: "50px" }}>
                                    {this.state.StateData["hospitalBeds"]}
                                </span>
                            </div>
                        </div>
                    </div>
                    ) : null}
                    <div className="table">
                        <table>
                            <th className="left1">State</th>
                            <th className="mid">Name</th>
                            <th className="mid">City</th>
                            <th className="mid">Ownership</th>
                            <th className="mid">Capacity</th>
                            <th className="right1">Beds</th>

                            {(this.state.collegeData) ? (this.state.collegeData).map(
                                (e, index) => {
                                    if (this.filterCallBack(e)) {
                                        return (
                                            <tr>
                                                <td>{e.state}</td>
                                                <td>{e.name}</td>
                                                <td>{e.city}</td>
                                                <td>{e.ownership}</td>
                                                <td>{e.admissionCapacity}</td>
                                                <td>{e.hospitalBeds}</td>
                                            </tr>
                                        )
                                    }
                                    return (
                                        null
                                    )
                                }
                            ) : null}

                        </table>

                    </div>
                </div>
            </>
        )
    }
}
export default college;