import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory,useLocation } from "react-router-dom";



function AddVaccine(){
    const history=useHistory()
    const [vaccines, setVaccines] = useState([]);
    const { state } = useLocation();
    const { id } = state;
    const [quantity,setquantity]=useState();
    const [vid,setvid]=useState(0);
    useEffect(() => {
        // Call the API to get the list of users
        axios.get(`http://localhost:9090/vaccines`)
          .then(response => setVaccines(response.data))
          .catch(error => console.log(error));
      }, []);

      const handlechange=(event)=>{

            var newqty=parseInt(event.target.value)
            setquantity(newqty);

      }
     

      const saveinfo = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                qty: quantity
            }) 
        }
        console.log("idhar aya "+id+""+vid);
        fetch(`http://localhost:9090/quantity/${id}/${vid}`, reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log("Booking Update: " + obj);
                if (obj) {
                    alert("Status Updated");
                }
            }
            
            );
            history.push(`/DetailCenter/${id}`)
        }

            const handlevidchange=(event)=>{
                setvid(event.target.value)
            }


    return (
    
    
    <div>
        
        <h1>Welcome To Add Vaccine Page</h1>
        <table className="table table-bordered marginset">
        <tbody>
            <tr>
                <td><h4>Select Vaccine</h4></td>
                <td>
              <select  placeholder="select something" id="myselect"  value={vid} onChange={handlevidchange}>
              <option value="0">Select Vaccine</option>
              {vaccines.map((vaccine)=>{return(<option key={vaccine.id} value={vaccine.id}>{vaccine.vaccineName}</option>)})};
              </select>
              </td>
              <td><h4>Enter Quantity</h4></td>
              <td>
              <input type="number" id="quantity" placeholder="eg:-800" value={quantity} onChange={handlechange} />
              </td>
              </tr>
              <tr><td align="center" colSpan={4}><button className="btn btn-warning" onClick={saveinfo}>Add Vaccine</button></td></tr>
            </tbody>
            
        </table>
    </div>)
}
export default AddVaccine;