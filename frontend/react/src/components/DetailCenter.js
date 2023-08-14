import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PutQuantity from "./PutQuantity";
import { useHistory } from "react-router-dom";

function DetailCenter(){

    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedUserDetails, setSelectedUserDetails] = useState(null);
    const [active, setActive] = useState(false);
    const {id} = useParams()
    const history=useHistory()    // const fetchCenter = async () => {

    //   const {data} = 

    // }

    useEffect(() => {
        // Call the API to get the list of users
        axios.get(`http://localhost:9090/center/${id}`)
          .then(response => setSelectedUserDetails(response.data))
          .catch(error => console.log(error));
      }, []);


      const handleUserClick = async (qtyvccid,qty) => {
          console.log(qtyvccid,qty)
          history.push({
            pathname:`/PutQuantity`,
          state:{qtyvccid,qty,id}});
         
      }
      
const handleAdminClick =async()=>{
  history.push({
    pathname:"/AddVaccine",
  state:{id}});
}

const showUsers =async()=>{
  history.push({
    pathname:"/ShowUsersinthisCenter",
  state:{id}});
}



    return (
    <div>
<h1>Welcome Detail page of Center</h1>
      
      {selectedUserDetails && (
        
          <table className="table table-bordered marginset" style={{border:"3px",borderBlockStyle:"groove"}} >
          
          <tbody><tr><td colSpan={3} align={"center"} ><h1 style={{fontFamily:"-moz-initial",backgroundColor:"salmon"}}>Center Details</h1></td></tr>
          <tr>
              <td>Id</td> 
              <td>{selectedUserDetails.id}</td>
          </tr>
          <tr>
              <td >Name:</td>
              <td>{selectedUserDetails.name}</td>
          </tr>
          <tr>
              <td>Age:</td> 
              <td>{selectedUserDetails.password}</td>
          </tr>
          <tr>
              <td>Area:</td>
              <td>{selectedUserDetails.area}</td>
          </tr>
          <tr>
            <td>Pincode:</td>
            <td> {selectedUserDetails.caddress.cpincode}</td>
            </tr>
          <tr><td>State:</td> <td>{selectedUserDetails.caddress.cstate}</td></tr>
          <tr><td>District:</td><td> {selectedUserDetails.caddress.cdistrict}</td></tr>
          <tr><td>Area:</td><td> {selectedUserDetails.caddress.carea}</td></tr>
           {selectedUserDetails.qtyVcc.map((qtyvcc) => (
        <tr key={qtyvcc.id}>
           <td><h6>Vaccine Name :</h6> <h6 style={{fontStyle:"italic"}}>{qtyvcc.qtyVaccine.vaccineName}</h6></td>
           <td>{qtyvcc.qty}</td>
           <td><button className="btn btn-primary" onClick={()=>handleUserClick(qtyvcc.id,qtyvcc.qty)}>Edit Quantity</button> </td>
        </tr>
       )
      )}
        <tr>
            <td colSpan={3} align="center"><button className="btn btn-warning" style={{color: active ? "primary" : "warning" }}
 onClick={()=>handleAdminClick()} >Add New Vaccine</button></td>
        </tr>
        <tr>
            <td colSpan={2} align="center"><h5>show users who takes vaccine in {selectedUserDetails.name}</h5></td>
            <td colSpan={1} align="center"><button className="btn btn-success" onClick={()=>showUsers()} >Show Users</button></td>
        </tr>
          </tbody>
          </table>
        
      )}

    </div>);
}
export default DetailCenter;
