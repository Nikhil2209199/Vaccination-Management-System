import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from 'reactstrap';
import { toast } from 'react-toastify';

const Center=()=>{

    const [data, setData] = useState([]);
    const[booking,setBooking]=useState([]);

    useEffect(() => {
      axios.get('http://localhost:9090/centers')
        .then(response => {
            toast.success("Successfully fetch")
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
          toast.error("error fetch")
        });
    }, []);

    const showbooking=(itemid)=>{
      axios.get('http://localhost:9090/Booking/'+itemid)
      .then(response=>{
        toast.success("fuck")
        setBooking(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
        toast.error("error fetch")
      });
    }
    


    return(
        <div>
             <table>
        {data.map(item => (
      <tr>
       <td><h2>{item.name},{item.area},{item.qtyVcc.qty}</h2></td>
       <td>
        <button onClick={()=>{showbooking(item.id)}}>button</button>
       </td>
      </tr>
    ))}
  </table>
  {booking.map(item => (

<table>
    <tr>
      <td>{item.user.firstname}</td>
      <td>{item.user.lastname}</td>
    </tr>
</table>

))}
        </div>
    )
}
export default  Center
// onClick={(item.id)=>{
//   showbooking(item.id)
// }