import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useLocation } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

function ShowUsersinthisCenter(){
    
    const [users, setUsers] = useState([]);
    const [selectedUserDetails, setSelectedUserDetails] = useState(null);
    const { state } = useLocation();
    const { id } = state;
    
   
console.log({id});
    useEffect(() => {
        // Call the API to get the list of users
        axios.get(`http://localhost:9090/center/${id}`)
          .then(response => setSelectedUserDetails(response.data))
          .catch(error => console.log(error));
      }, []);

    return(<div>
        
        <h1>Welcome Show Users in This Center Who Takes A Vaccine</h1>
        
        {selectedUserDetails && (
        <table className="table table-bordered marginset">
          <Thead style={{ backgroundColor: "#539196" }}>
              <Tr>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Id</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Name</h1>
                  </div>
                </Th>
                 <Th>
                  <div>
                    <h1 className="h5 fw-bold">DOB</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Aadhaar No.</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Dose No.</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Date</h1>
                  </div>
                </Th>
                
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Review</h1>
                  </div>
                </Th>
                {/*<Th>
                  <div>
                    <h1 className="h5 fw-bold">Age</h1>
                  </div>
                </Th>
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">Role</h1>
                  </div>
                </Th> */}
              </Tr>
            </Thead>
            <tbody>
            
                    {selectedUserDetails.booking.map((book) => (
                        <tr key={book.id}>
                        <td>{book.user.id}</td>
                        <td>{book.user.firstname} { }  {book.user.middlename} {  }  {book.user.lastname}</td>
                        <td>{book.user.dob}</td>
                        <td>{book.user.adhar}</td>
                        <td>{book.user.dosecount}</td>
                        <td>{book.udoseDate.userdosedate}</td>
                        {selectedUserDetails.review.map((rview) => (
                        <tr key={rview.id}>
                        <td>{rview.data}</td>
                        </tr>
                     ))}
                        </tr>
                     ))}
                      
                    {/* <td>{usr.booking.user.id}</td>
                    <td>{usr.booking.user.firstname}</td>
                    <td>{usr.booking.user.middlename}</td>
                    <td>{usr.booking.user.lastname}</td>
                    <td>{usr.booking.user.dob}</td>
                    <td>{usr.booking.user.adhar}</td>
                    <td>{usr.booking.user.email}</td>
                    <td>{usr.booking.user.age}</td>
                    <td>{usr.booking.user.role}</td> */}
                  
                
            </tbody>
          </table>

        )}
        </div>)
}
export default ShowUsersinthisCenter;