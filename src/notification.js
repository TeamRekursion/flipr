import React from 'react';
import './helpline.css';
import phone from './Assets/phone.png';
import bg from './Assets/bg.png';
// import wave from './Assets/wave.png'
// import { GetHealthData } from  './utils/helpline'
// import {getState} from "./utils/StateUsingIP";

class Notification extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            State: 'Delhi',
            // filterStr : null
        }
    }

    async componentDidMount() {
        // this.state.State = await getState();
        // let data = await GetHealthData()
        // let StateData = (data.filter(e => {
        //     if (e.loc === this.state.State) {
        //         return true
        //     }
        //     return false
        // }))[0]
        // console.log(this.state)
        // this.setState({
        //     helpline: data,
        //     StateData
        // })

    }

    // filterCallBack = (element) => {
    //     const { filterStr } = this.state;
    //     const {loc} = element;
    //     let regX = new RegExp(filterStr, "i")
    //     if (filterStr)
    //         return (regX.test(loc));
    //     else
    //         return true
        
    // }


    render(){
        
        // var filterStr;
        return(
            <>
            <div className="container">
                <h1 className="not">Notifications</h1>
                {/* <div className="box">
                    <form>
                        <input type="text" placeholder="Search.." name="search" className="searchbox" value={ filterStr } onChange={ e => this.setState({ filterStr: e.target.value }) } />
                       
                    </form>
                </div> */}
                {(this.state.StateData) ? (<div className="large-card">
                    <img src={bg} alt="wave" className="wave"/>
                    <h3 className="text-head">{this.state.StateData.loc}</h3>
                    <br/>
                    <br/>
                    <h3 className="text-help">Helpline number</h3>
                    <span className="num">
                        <img src={phone} alt="phone" className="ph"/>
                    </span>
                    <span className="number">{this.state.StateData.number}</span>
                </div> ): null}
                <div className="table">
                        <table>
                            <th className="left2">S no</th>
                            {/* <th>Title</th> */}
                            <th className="right2">Title</th>
                            { (this.state.helpline) ? this.state.helpline.map(
                                (e, index) => {
                                    if (this.filterCallBack(e)) {
                                        return (
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{e["loc"]}</td>
                                                <td>{e["number"]}</td>
                                            </tr>
                                        )
                                    }
                                    return(
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
export default Notification;