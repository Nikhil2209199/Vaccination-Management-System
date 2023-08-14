import { useEffect, useState } from 'react';
import { Link, useHistory,useLocation } from "react-router-dom";

function PutQuantity() {
    const { state } = useLocation();
    const { qtyvccid, qty ,id } = state;
  const [quantity, setQuantity] = useState(qty);
   const history = useHistory(); 

//   useEffect(() => {
//     fetch(`http://localhost:9090/quantity/${props.quantityId}`)
//       .then(response => response.json())
//       .then(data => setQuantity(data.quantity))
//       .catch(error => console.error(error));
//   }, [props.qtyvccid]);

  const handleInputChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const saveinfo = () => {
        const reqOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                qty: quantity
            })
        }
        fetch(`http://localhost:9090/quantity/${qtyvccid}`, reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log("Booking Update: " + obj);
                if (obj) {
                    alert("Status Updated");
                }
            });
            history.push(`/DetailCenter/${id}`);
        }




console.log(qtyvccid,qty);

  return (
    <div>
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" value={quantity} onChange={handleInputChange}  />
      <p>The current quantity of vaccine is {quantity} doses.</p>
      <button className="btn btn-success" onClick={saveinfo} >Submit</button> 
    </div>
  );
}

export default PutQuantity;
