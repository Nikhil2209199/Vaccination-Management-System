import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import ShowCenterDetails from "./ShowCenterDetails";
import { useHistory } from "react-router-dom";

function ShowAllCenter(){
    const [centers, setemps] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedUserDetails, setSelectedUserDetails] = useState(null);

    const history = useHistory(); 
    
    
    useEffect(() => {
      var helper = new XMLHttpRequest();
      helper.onreadystatechange = () => {
        if (helper.readyState === 4 && helper.status === 200) {
          var result = JSON.parse(helper.responseText);
          setemps(result);
          console.log(result)
        }
      };
      //helper.open("GET", "http://localhost:7080/emps");
      helper.open("GET", "http://localhost:9090/centers");
      helper.send();
    }, []);


    useEffect(() => {
      // Call the API to get the list of users
      axios.get('https://example.com/api/users')
        .then(response => setUsers(response.data))
        .catch(error => console.log(error));
    }, []);
    
    const handleUserClick = async (centerId) => {
      // setSelectedUserId(centerId);
      // Call the API to get the details of the selected user
      const  { data } = await axios.get(`http://localhost:9090/center/${centerId}`);
        // .then(response => setSelectedUserDetails(response.data))
        // .catch(error => console.log(error));
        history.push(`/DetailCenter/${centerId}`)
        console.log(data);
    }

    const removeuser = (No) => {
     
      var helper = new XMLHttpRequest();
      helper.onreadystatechange = () => {
        if (helper.readyState == 4 && helper.status == 200) {
          var result = JSON.parse(helper.responseText);
        }
      };
      helper.open("DELETE", "http://localhost:9090/center/" + No);
      helper.send();
      
    };
    const showcenterdetail = (No) =>{
      var helper = new XMLHttpRequest();
      helper.onreadystatechange = () => {
        if (helper.readyState == 4 && helper.status == 200) {
          var result = JSON.parse(helper.responseText);
        }
      };
      helper.open("GET", "http://localhost:9090/center/" + No);
      helper.send();

      return (
        <ShowCenterDetails/>
      );
    }
    return (
      <div>
         
         <h1>All Centeres</h1>

        <div className="table-responsive marginset">
          <table className="table table-bordered marginset">
          <Thead style={{ backgroundColor: "#539196" }}>
              <Tr>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Center Id</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Center Name</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Area </h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">State</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Pincode</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">District</h1>
                  </div>
                </Th>
                
              </Tr>
            </Thead>
            <tbody>
              {centers.map((center) => {
                return (
                  <tr key={center.id}>
                    <td>{center.id}</td>
                    <td>{center.name}</td>
                    <td>{center.area}</td>
                    <td>{center.caddress.cstate}</td>
                    <td>{center.caddress.cpincode}</td>
                    <td>{center.caddress.cdistrict}</td>
                    
                    
                   
                    <td>
                      <button
                         className="btn btn-danger"
                         onClick={() => {
                            removeuser(center.id);
                          }}
                      >
                        Delete
                      </button>
                    </td>
                    <td><button className="btn btn-primary" onClick={() => handleUserClick(center.id)}>View Details</button> </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          
         
          </div>
        
    );
  }

export default ShowAllCenter;


