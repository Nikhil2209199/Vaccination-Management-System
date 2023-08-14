import React from "react";
import { BrowserRouter as Router,Switch,Link, Route } from 'react-router-dom';
import { useEffect, useState } from "react";



import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

function ShowAllUser(){
    const [emps, setemps] = useState([]);
    
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
      helper.open("GET", "http://localhost:9090/users");
      helper.send();
    }, []);
    // useEffect(() => {
    //     var helper = new XMLHttpRequest();
    //     helper.onreadystatechange = () => {
    //       if (helper.readyState === 4 && helper.status === 200) {
    //         var result = JSON.parse(helper.responseText);
    //         setemps(result);
    //         console.log(result)
    //       }
    //     };
    //     //helper.open("GET", "http://localhost:7080/emps");
    //     helper.open("GET", "http://localhost:9090/users");
    //     helper.send();
    //   }, [emps]);
    // useEffect(() => {
    //   var helper = new XMLHttpRequest();
    //   helper.onreadystatechange = () => {
    //     if (helper.readyState === 4 && helper.status === 200) {
    //       var result = JSON.parse(helper.responseText).data;
    //       setemps(result);
    //       console.log(result);
    //     }
    //   };
    //   //  helper.open("GET", "http://localhost:7080/emps");
    //   helper.open("GET",  "http://localhost:9090/users");
    //   helper.send();
    // }, [emps]);
    // const addUser = () => {
    //   history.push("/user");
    // };
    // debugger;
    const removeuser = (No) => {
      // debugger;
      var helper = new XMLHttpRequest();
      helper.onreadystatechange = () => {
        if (helper.readyState == 4 && helper.status == 200) {
          var result = JSON.parse(helper.responseText);
        }
      };
      helper.open("DELETE", "http://localhost:9090/user/" + No);
      helper.send();
      
    };
    return (
      <div>
        
       <div className="table-responsive marginset">
          <table className="table table-bordered marginset">
          <Thead style={{ backgroundColor: "#539196" }}>
              <Tr>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">User Id</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">First Name</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Middle Name</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Last Name</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">DOB</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Adhaar No</h1>
                  </div>
                </Th>
                
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Email</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Age</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Role</h1>
                  </div>
                </Th>
              </Tr>
            </Thead>
            <tbody>
              {emps.map((emp) => {
                return (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.firstname}</td>
                    <td>{emp.middlename}</td>
                    <td>{emp.lastname}</td>
                    <td>{emp.dob}</td>
                    <td>{emp.adhar}</td>
                    <td>{emp.email}</td>
                    <td>{emp.age}</td>
                    <td>{emp.role}</td>
                   
                    <td>
                      <button
                         className="btn btn-danger"
                         onClick={() => {
                            removeuser(emp.id);
                          }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          
          
          </div>
        
    );
  }

export default ShowAllUser;


