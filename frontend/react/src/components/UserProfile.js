import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch ,Link, Route,Routes,useNavigate, BrowserRouter as Router } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

function UserProfile(){
    const [prof,setProfile]=useState({});
    const [book,setBook]=useState();
    const history=useHistory() 

    const uid = sessionStorage.getItem("userId");
        console.log("uid"+uid);
    const viewprofile= async (e) => {
        e.preventDefault();
        // Call the API to get the list of users
        console.log("button dab gya lode ")
        const uid = sessionStorage.getItem("userId");
        console.log("uid"+uid);
        const response = await fetch(`http://localhost:9090/user/${uid}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          console.log(data);
          setProfile(data);
          setBook(prof);
      };
// const viewbooking=()=>{
//   setBook(prof.booking);
//   console.log(book);
// }
     
    // const viewbooking=  () => {
    //     // e.preventDefault();
    //     // // Call the API to get the list of users
    //     // console.log("button dab gya lode ")
    //     // const uid = sessionStorage.getItem("userId");
    //     // console.log("uid"+uid);
    //     // const response = await fetch(`http://localhost:9090/user/${uid}`, {
    //     //     method: 'GET',
    //     //     headers: {
    //     //       'Content-Type': 'application/json'
    //     //     }
    //     //   });
    //     //   const data = await response.json();
    //     //   console.log(data);
    //     //   setBook(data);
    //     console.log(book);
          
    //   };

      const gotobookVaccine=  () => {
        history.push({
            pathname:"/SearchNearbyCenter",
          });
      };


    return (<div>Welcome To User Profile Page
        <div className="text-center" style={{marginTop:"25px"}}><button className="btn btn-warning" onClick={viewprofile}>View profile</button></div>
         {/* <div className="text-center" style={{marginTop:"25px"}}><button className="btn btn-warning" onClick={viewbooking}>show vaccine booking</button></div> */}
        <div className="text-center" style={{marginTop:"25px"}}><button className="btn btn-warning" onClick={gotobookVaccine}>Book Vaccine</button></div> 
        <div>
        {prof.id && (

<table className="table table-bordered marginset" style={{border:"3px",borderBlockStyle:"groove"}} >
          
          <tbody><tr><td colSpan={3} align={"center"} ><h1 style={{fontFamily:"-moz-initial",backgroundColor:"salmon"}}>Profile</h1></td></tr>
          <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>Name</td>
              <td>{prof.firstname} {prof.middlename} {prof.lastname}</td>
          </tr>
          <tr>
            <td style={{fontFamily:"fantasy", textAlign:"center"}}>Adhaar No</td>
            <td> {prof.adhar}</td>
            </tr>
          <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>DOB</td>
              <td>{prof.dob}</td>
          </tr>
          <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>Mob No.</td> 
              <td>{prof.mobileno}</td>
          </tr>
          
          
            <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>Email ID</td> 
              <td>{prof.email}</td>
          </tr>
          <tr>
              <td style={{fontFamily:"fantasy", textAlign:"center"}}>Password</td>
              <td>{prof.password}</td>
          </tr>
          
        
          </tbody>
          </table>
        )}
        </div>
 
{/* <div className="table-responsive marginset">
          <table className="table table-bordered marginset">
          <Thead style={{ backgroundColor: "#539196" }}>
              <Tr>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Name</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Center Name</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Adderss </h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Pincode</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Dose Date</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Time</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Dose Count</h1>
                  </div>
                </Th>
              </Tr>
            </Thead>
            // <tbody>
              
                
                  {/* <tr key={bk.id}>
                    <td>{bk.firstname} {bk.middlename} {bk.lastname}</td> */}
                    
                    {/*{book.map((bok)=>(
                                           <tr>   
                                               <td >{bok.center.name}</td>
                                                <td >{bok.center.carea}</td>
                                                <td>{bok.center.caddress.cpincode}</td>  
                                                <td >{bok.udoseDate.userdosedate}</td>
                                                <td >{bok.utimeSlot}</td>
                                                <td>{bok.udoseCount}</td>
                                        </tr>  
                                            ))}
                                
                
            
            </tbody>
          </table>
          </div>  */}
   
   
   
    </div>)
}
export default UserProfile;
