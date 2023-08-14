import React from "react";
//import { useEffect, useState } from 'react';
import { Link, useHistory,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function BookVaccine(){
    const [book, setBooking] = useState({}); 
       const { state } = useLocation();
       const [date, setDate] = useState("");
       const [time, setTime] = useState("");
    const { qid, cid } = state;
console.log(qid);
console.log(cid);

const handleAdminClick= async (e) => {
    e.preventDefault();
    // Call the API to get the list of users
    console.log("button working ")
    const uid = sessionStorage.getItem("userId");
    console.log("uid"+uid);
    const response = await fetch(`http://localhost:9090/booking/${uid}/${cid}/${qid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           date: date,
            slot: time
        })
      });
      const data = await response.json();
      console.log(data);
      setBooking(data);
    // axios.post(`http://localhost:9090/booking/${uid}/${cid}/${qid}`)
    //   .then(response => setBooking(response.data.booking))
    //   .catch(error => console.log(error));
  };

const handlechangedate=(event)=>{
    console.log("idhar aya")
    setDate(event.target.value);
    console.log(date);
}
const handle=(e)=>{
    console.log("idhar bhi aya ")
    setTime(e.target.value)

    console.log(time)
}


    return (<div> Welcome to Book Vaccine page

<table className="table table-bordered marginset" style={{border:"3px",borderBlockStyle:"groove"}} >
            <tr>
                <td style={{fontFamily:"fantasy", textAlign:"center"}}>Select Time Slot</td> 
                    <td>
                        <select  name="time" value={time} id="time" onChange={handle}>
                            <option  value="Select vaccine">Select Vaccine</option>
                            <option  value="9.30AM to 10.30AM">9.30AM to 10.30AM</option>
                            <option  value="10.30AM to 11.30AM">10.30AM to 11.30AM</option>
                            <option   value="11.30AM to 12.30PM">11.30AM to 12.30PM</option>
                            <option  value="2.00PM to 3.00PM">2.00PM to 3.00PM</option>
                            <option   value="3.30PM to 4.30PM">3.30PM to 4.30PM</option>
                        </select>
                    </td>
            </tr>
            <tr>
                <td style={{fontFamily:"fantasy", textAlign:"center"}}>Select Date</td>
                <td><input type="date" value={date} onChange={handlechangedate} ></input></td>
            </tr>
            <tr>
            <td colSpan={3} align="center"><button className="btn btn-warning" onClick={handleAdminClick}  >Book Your Slot</button></td>
            {/* onClick={()=>handleAdminClick()}  */}
        </tr>
        </table>

        {book.id && (

<table className="table table-bordered marginset" style={{border:"3px",borderBlockStyle:"groove"}} >
          
          <tbody><tr><td colSpan={3} align={"center"} ><h1 style={{fontFamily:"-moz-initial",backgroundColor:"salmon"}}>Book Vaccine</h1></td></tr>
          <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>Name</td>
              <td>{book.user.firstname} {book&&book.user.middlename} {book&&book.user.lastname}</td>
          </tr>
          <tr>
            <td style={{fontFamily:"fantasy", textAlign:"center"}}>Aadhaar No</td>
            <td> {book.user.adhar}</td>
            </tr>
          <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>Vaccine status</td>
              <td>{book.vaccinationStatus}</td>
          </tr>
          <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>Vaccine Name</td> 
              <td>{book.vaccine.vaccineName}</td>
          </tr>
          
          
            <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>Center Name</td> 
              <td>{book.center.name}</td>
          </tr>
          <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>Address</td>
              <td>{book.center.area}</td>
          </tr>
          <tr>
            <td style={{fontFamily:"fantasy", textAlign:"center"}}>Pincode</td>
            <td> {book.center.caddress.cpincode}</td>
            </tr>
         
            <tr>
            <td style={{fontFamily:"fantasy", textAlign:"center"}}>Time</td>
            <td> {book.utimeSlot}</td>
            
            </tr>
            <tr>
            <td style={{fontFamily:"fantasy", textAlign:"center"}}>Date</td>
            <td> {book.udoseDate.userdosedate}</td>
            </tr>
        
          </tbody>
          </table>
        )}

    </div>)
}
export default BookVaccine;