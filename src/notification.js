import React from 'react';
import './helpline.css';
import phone from './Assets/phone.png';
import bg from './Assets/bg.png';
// import wave from './Assets/wave.png'
// import { GetHealthData } from  './utils/helpline'
// import {getState} from "./utils/StateUsingIP";
import {GetNotifications} from './utils/notification'
class Notification extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}

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
        let notifications = await GetNotifications()
        this.setState({
            notifications,
        })
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
                
                <div className="table">
                        <table>
                            <th className="left2">Sl. No</th>
                            <th className="right2">Title</th>
                            { (this.state.notifications) ? (this.state.notifications.map(
                                (e, index) => {
                                        const {title, link} =  e;
                                        return (
                                            <tr>
                                                <td>{index+1}</td>
                                        <td><a href={link}>{title}</a></td>
                                            </tr>
                                        )
                                    return(
                                        null
                                    )
                                }
                            ) ): null}
                        </table>

                    </div>
            </div>
            </>
        )
    }
}
export default Notification;