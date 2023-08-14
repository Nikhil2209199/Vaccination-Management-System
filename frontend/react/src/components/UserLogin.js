import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";



function UserLogin() {
  const [user, setUser] = useState({});
  const [message, setmessage] = useState("");
  const [userId,setUserId] = useState(0)
    const history=useHistory() 

  const [credential, setCredential] = useState({
    credentialEmail: "",
    credentialPassword: "",
  });

 
  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setmessage("Session Timeout");
      }, 2000);
    }
  }, [message]);
 
  const signIn = async (e) => {
    e.preventDefault();
    try {
     
      const response = await fetch('http://localhost:9090/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password
                
            
        })
      });
      const data = await response.json();
      console.log(data);
      // sessionStorage.setItem("userId",data)
      if(data.message!="No value present")
      checksignIn(data);
      
    } catch (error) {
      console.error(error);
      message="please enter valid credentials"
    }
   
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };


  const checksignIn = (data) => {
    console.log(data.email);
    if (Object.keys(data).length === 0) {
      // clearBoxes();
      setmessage("Email / password is wrong!");
    }
    if (Object.keys(data).length != null) {
      console.log("Not Empty");
      sessionStorage.setItem("isloggedin", "true");
     
      sessionStorage.setItem("userId",data.id);
      sessionStorage.setItem("useRole",data.role);
      console.log(data.id);
      
      console.log("ye userId he" , userId )

      history.push({
        pathname:"/UserProfile",
    });
    //   history.push("/SearchNearbyCenter");
      const sessionid = sessionStorage.getItem("userId");
    //   console.log( sessionid);
    }
  };

  const register = () => {
    
    history.push("/UserRegistration");
  };
  return (
    <div>
      <ToastContainer/>
    <div>
      <center>
        <br></br>
        <br></br>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td className="td">Email</td>
              <td className="td">
                <input
                  type="email"
                  name="email"
                  required
                  value={user.email}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="td">Password</td>
              <td className="td">
                <input
                  type="password"
                  name="password"
                  required
                  value={user.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td">
                <button className="btn btn-primary" onClick={signIn}>
                  Log in
                </button>
              </td>
              <td className="td">
                <button className="btn btn-danger" onClick={register}>
                  Register
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <h6 style={{ color: "orangered" }}>{message}</h6>
      </center>
    </div>
    </div>
  );
}

export default UserLogin;
