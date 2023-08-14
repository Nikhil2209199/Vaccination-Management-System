import { toast, ToastContainer } from "react-toastify";
import React, { useState } from 'react';
import { useHistory} from "react-router-dom";
//import UserLogin from "./UserLogin";
function UserRegistration() {
  const history = useHistory();
  const [user, setUser] = useState({
    
    
    firstname: '',
    middlename: '',
    lastname: '',
    dob: '',
    adhar: '',
    mobileno: '',
    password: '',
    email: '',
    age: ''
    });
  const [uaddress,setUaddress]=useState({  upincode:'',
                                            ustate: '',
                                            udistrict: '',
                                            uarea: ''})

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await fetch('http://localhost:9090/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: user.firstname,
            middlename: user.middlename,
            lastname: user.lastname,
            dob: user.dob,
            adhar: user.adhar,
            mobileno: user.mobileno,
            password: user.password,
            email: user.email,
            age: user.age,
            uaddress:{
                            upincode:uaddress.upincode,
                            ustate: uaddress.ustate,
                            udistrict: uaddress.udistrict,
                            uarea: uaddress.uarea
                
            }
        })
      });
      const data = await response.json();
      console.log(data);
      history.push("/UserLogin")
    } catch (error) {
      console.error(error);
    }
   
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleaddresschange=(e)=>{
    setUaddress({
        ...uaddress,
        [e.target.name]:e.target.value
    });
  }

  const showToastMessage = () => {
   
   
 // history.push("/UserLogin");
  toast.success('Successfully Register !');
  alert("Successfully Register !");
};
const gotologinpage = () => {
   
   
   history.push("/UserLogin");
   toast.success('welcome to login !');
   
 };

  return (<div>
    
    <form onSubmit={handleSubmit}>
        <center>
      <table className='table table-bordered content' >

    <thead >
        <tr>
        <td align="center" colSpan={2}><h3>Register User</h3></td>   
        
        </tr>
        
    </thead>
    
        <tbody>
        
            <tr>
              
                <td> First Name:</td>
                <td><input type="text" name="firstname"  onChange={handleChange} value={user.firstname} /></td>
                </tr>
                <tr>
                <td> Middle Name:</td>
                <td><input type="text" name="middlename" onChange={handleChange} value={user.middlename} /></td>
                </tr>
                <tr>
                <td> Last Name:</td>
                <td><input type="text" name="lastname" onChange={handleChange} value={user.lastname} /></td>
                </tr>
                <tr>
                <td> DOB :</td>
                <td><input type="date" name="dob" onChange={handleChange} placeholder="YYYY-MM-DD" value={user.dob} /></td>
                </tr>
                <tr>
                <td> Aadhaar No: </td>
                <td><input type="number" name="adhar" onChange={handleChange} value={user.adhar} /></td>
                </tr>
                <tr>
                <td>Mobile No:</td>
                <td><input type="number" name="mobileno" onChange={handleChange} value={user.mobileno} /></td>
                </tr>
                <tr>
                <td>Password:</td>
                <td><input type="password" name="password"   /></td>
                </tr>
                <tr>
                <td> Confirm Password:</td>
                <td><input type="password" name="password" onChange={handleChange} value={user.password} /></td>
                </tr>
                <tr>
                <td> Email:</td>
                <td><input type="email" name="email" onChange={handleChange} value={user.email} /></td>
                </tr>
                <tr>
                <td> Age:</td>
                <td><input type="number" min="10" max="60" name="age" onChange={handleChange} value={user.age} /></td>
                </tr>
        <tr>
            <td>Pincode:</td>
            <td><input type="number" name="upincode" onChange={handleaddresschange} value={uaddress.upincode} /></td>
            </tr>
        
        <tr>
            <td>State:</td>
            <td><input type="text" name="ustate" onChange={handleaddresschange} value={uaddress.ustate} /></td>
            </tr>
        
        <tr>
            <td>District:</td>
            <td><input type="text" name="udistrict" onChange={handleaddresschange} value={uaddress.udistrict} /></td>
            </tr>
        
        <tr>
            <td>Area:</td>
            <td><input type="text" name="uarea" onChange={handleaddresschange} value={uaddress.uarea} /></td>
            </tr>
        
        <tr style={{textAlign:"center"}}><td colSpan={2} ><button type="submit" className="btn btn-success" onClick={showToastMessage}>Register</button>
        <button style={{marginLeft:"10px"}} className="btn btn-primary" onClick={gotologinpage}>Login</button></td></tr>
      
      </tbody>
      </table>
      </center>
    </form>
    </div>
  );
}
export default UserRegistration;
