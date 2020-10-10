import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import states from './statesList'
import html2canvas from "html2canvas";
import jspdf from "jspdf";
//eslint-disable-next-line
const addDays = (date, days) => {
    date = new Date(date);
    date.setDate(date.getDate() + days);
    return date;
}



const Analytics = () => {

    const [data, setData] = useState({})
    const [startDate, setStartingDate] = useState('2020-02-28')
    const [endDate, setEndingDate] = useState('2020-03-28')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [state, setState] = useState('')


    useEffect(() => {
        fetchData()
    }, []);
    function CreateDataSet(_data, lab, color, bgcolor) {
        return {
            label: lab,
            type: "line",
            borderColor: color,
            backgroundColor: bgcolor,
            data: _data,
        }
    }

    function getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            dateArray.push(new Date(currentDate));
            currentDate = addDays(currentDate, 1);
        }
        return dateArray;
    }

    async function GetDataSet(status, color, bgcolor) {
        let check_sd = startDate?(true):(false)
        let check_ed = endDate?(true):(false)
        let check_gender = gender?(true):(false)
        let check_state = state?(true):(false)
        let check_age = age?(true):(false)

        let startAge = 0;
        let endAge = 0;
        if (age === 7) {
            endAge = 1000;
            startAge = 70;
        } else {
            startAge = age * 10;
            endAge = startAge + 9;
        }
        let payload = {
            "status": status
        }
        if (check_sd) {
            payload = {
                ...payload,
                startDate,
            }
        } else {
            setStartingDate(addDays(new Date(), -180))
        }
        if (check_ed) {
            payload = {
                ...payload,
                endDate,
            }
        } else {
            setEndingDate(new Date())
        }

        if (check_gender) {
            payload = {
                ...payload,
                gender
            }
        }
        if (check_age) {
            payload = {
                ...payload,
                startAge,
                endAge
            }
        }
        if (check_state) {
            payload = {
                ...payload,
                state
            }
        }

        let dates = []
        let dateS = (getDates(new Date(startDate), new Date(endDate)))
        dateS.forEach(
            Element => {
                let l = (Element.getMonth() <= 9) ? '0' + Element.getMonth() : Element.getMonth();
                let d = (Element.getDate() <= 9) ? '0' + Element.getDate() : Element.getDate();
                dates.push(d + "-" + l + "-" + Element.getFullYear())
            }
        )
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let options = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(payload),
            redirect: 'follow'
        };

        console.log(payload)
        let response = await fetch("https://apiflipprvithack.herokuapp.com/api/patients/fetch", options)
        let jsonObj = await response.json()
        let patients = jsonObj["patients"]
        let dates_received = {};
        patients.forEach(e => {
            let date = new Date(e["_id"]);
            let l = (date.getMonth() <= 9) ? '0' + date.getMonth() : date.getMonth();
            let d = (date.getDate() <= 9) ? '0' + date.getDate() : date.getDate();
            let key = (d + "-" + l + "-" + date.getFullYear())
            dates_received[key] = e["count"]
        })

        let CreatedData = dates.map(
            e => {
                if (dates_received[e] == null) {
                    return 0;
                } else {
                    return dates_received[e];
                }
            }
        )

        return {
            labels: dates,
            dataset: CreateDataSet(CreatedData, status, color, bgcolor)
        }

    }


    const getStateOptions = () => {
        return states.map(el=>{
            return(
                <option key={el.code} value={el.name}> {el.name}</option>
            )
        })
    }

    async function fetchData(){
        let deceased = await GetDataSet("Hospitalized", 'rgb(69, 3, 252)', 'rgba(69, 3, 252, 0.8)');
        let Recovered = await GetDataSet("Deceased", 'rgb(252, 40, 3)', 'rgba(252, 40, 3, 0.8)')
        let Hospitalized = await GetDataSet("Recovered", 'rgb(0, 112, 0)', 'rgba(0, 112, 0, 0.8)')
        console.log(deceased, Recovered, Hospitalized)
        let newData = {
            datasets: [],
            labels: []
        }
        newData.datasets.push(deceased["dataset"], Recovered["dataset"], Hospitalized["dataset"])
        newData.labels.push(...deceased.labels)
        setData(newData)
    }


    let div2PDF = e => {
    const but = e.target;
    but.style.display = "none";
    let input = window.document.getElementsByClassName("ana")[0];

    html2canvas(input).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jspdf("l", "pt");
      pdf.addImage(
        img,
        "png",
        50,
        50,
        700,
        436.912751679
      );
      pdf.save("chart.pdf");
      but.style.display = "block";
    });
    }

    return(
        <>
            <div className="hea">
                Analytics
            </div>
            <div className="grim">
                <div className="ana">
                    <Line
                        data={data}
                        options={{
                            title:{
                                display:false,
                            },
                            legend:{
                                display:true
                            },
                        }}
                    />



                </div>
                <div className="fil">
                    <input type="date" placeholder="Start Date" className="searchbox1" value={startDate} onChange={e=>setStartingDate(e.target.value)}/><br/>
                    <input type="date" placeholder="End Date" className="searchbox1" value={endDate} onChange={e=>setEndingDate(e.target.value)}/><br/>
                    <select className="searchbox1" onChange={e=>setGender(e.target.value)}>
                        <option value="">Filter gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select className="searchbox1" onChange={e=>setAge(e.target.value)}>
                        <option value="">Filter age groups</option>
                        <option value={0}>0 to 9</option>
                        <option value={1}>10 to 19</option>
                        <option value={2}>20 to 29</option>
                        <option value={3}>30 to 39</option>
                        <option value={4}>40 to 49</option>
                        <option value={5}>50 to 59</option>
                        <option value={6}>60 to 69</option>
                        <option value={7}>70+</option>
                    </select>

                    <select placeholder="State" className="searchbox1" onChange={e=>setState(e.target.value)}>
                        <option value="">State</option>
                        {getStateOptions()}
                    </select>

                    <br/>
                    <br/>
                    <button onClick={fetchData} className="pur1">Update graph</button><br/>
                    <button className="pur2" onClick={div2PDF}>Download PDF</button>
                    <button className="pur2">Send Email</button>
                </div>
            </div>
        </>
    )
}

export default Analytics