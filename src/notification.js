import React from 'react';
import './helpline.css';
// import phone from './Assets/phone.png';
// import bg from './Assets/bg.png';
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
        let notifications = await GetNotifications()
        this.setState({
            notifications,
        })
    }


    render(){
        
        return(
            <>
            <div className="container">
                <h1 className="not">Notifications</h1>
                
                <div className="table">
                        <table>
                            <th className="left2">Sl. No</th>
                            <th className="right2">Title</th>
                            { (this.state.notifications) ? (this.state.notifications.map(
                                (e, index) => {
                                        const {title, link} =  e;
                                        return (
                                            <tr>
                                                <td className="cha1">{index+1}</td>
                                                <td><a href={link} className="cha">{title}</a></td>
                                            </tr>
                                        )
                                    // return(
                                    //     null
                                    // )
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