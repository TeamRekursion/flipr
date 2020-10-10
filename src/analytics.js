import React from 'react';

class helpline extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <>
            <div className="hea">
                Analytics
            </div>
            <div className="grim">
                <div className="ana">
                    nj
                </div>
                <div className="fil">
                <input type="date" id="birthday" name="birthday" className="searchbox1"/><br/>
                <input type="date" id="birthday" name="birthday" className="searchbox1"/><br/>
                <select name="cars" id="cars" className="searchbox1">
                        <option value="volvo">Filter gender</option>
                        <option value="saab">Male</option>
                        <option value="opel">Female</option>        
                </select>
                <select name="cars" id="cars" className="searchbox1">
                        <option value="volvo">Filter age groups</option>
                        <option value="volvo">0 to 9</option>
                        <option value="saab">10 to 19</option>
                        <option value="opel">20 to 29</option>        
                        <option value="opel">30 to 39</option>        
                        <option value="opel">40 to 49</option>        
                        <option value="opel">50 to 59</option>        
                        <option value="opel">60 to 69</option>        
                        <option value="opel">70+</option>        
                </select>
                <br/>
                <br/>
                <button className="pur1">Update graph</button><br/>
                <button className="pur2">Download PDF</button>
                <button className="pur2">Send Email</button>
                </div>
            </div>
            </>
        )
    }
}
export default helpline;