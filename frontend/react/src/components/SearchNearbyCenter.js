import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory,useLocation } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

function SearchNearbyCenter(){
    const [centers, setCenter] = useState(0);
    // const  location = useLocation();
    // const id = location.state.userId;

    // const { userId } = location;

    const [data,setData]=useState([]);
    const [States,setState]=useState([]);
    const [city,setCity]=useState([]);
    const [ctr,setcenter]=useState();
    const [caddress, setcaddress] = useState([]);
    const [cid,setcid]=useState(0);
    const [qid,setqid]=useState(0);
    // const { state } = useLocation();
    // const { userId } = state;

const history = useHistory();
    // const { state } = useLocation();
    // const { userId } = state;
   //console.log(userId)
    useEffect(() => {
        // Call the API to get the list of users
        axios.get(`https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`)
          .then(response => setData(response.data))
          .catch(error => console.log(error));
      }, []);



    let country = [...new Set(data.map(item=> item.country))];
    country.sort();
    
    const handleCountryChange=(e)=>{
      setState("Select State");
      setCity("Select City");
      //As you select country from select box, in below line we filter that country from all data so that we can get subcountry(state), name(city) out of it.
      let Singlecountry = data.filter(item=> item.country === e.target.value);
      //now this singleCountry which is getting the name of subcountry(state) multiple times. So to remove duplicates set is used.
      let states = [...new Set(Singlecountry.map(item=> item.subcountry))];
      //after removing the duplicate subcountry names(state names). we have saved the data in state state using setState.
      setState(states);
    }
    
    
    const handleStateChange=(e)=>{
        //here when user selects particular subcountry(state name), we have checked again with original data to get all subcounty that match that name. to get the data of perticular city.
        let singleCity = data.filter(item=> item.subcountry === e.target.value);
        setCity(singleCity);
      }
      

const handlecitychange=(event)=>{
    console.log(event.target.value)
    setcenter(event.target.value)
    console.log(ctr)
}

const handlepushtobooking=(qid,cid)=>{
  
  console.log(qid)
 
//console.log(userId)

   console.log(cid)
// console.log(cid)

history.push({
  pathname:`/BookVaccine`,
state:{qid,cid}});

}
// const signIn = async (e) => {
//     e.preventDefault();
//     try {
     
//       const response = await fetch('http://localhost:9090/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email: user.email,
//             password: user.password
                
            
//         })
//       });
//       const data = await response.json();
//       console.log(data);
//       // sessionStorage.setItem("userId",data)
//       if(data.message!="No value present")
//       checksignIn(data);
      
//     } catch (error) {
//       console.error(error);
//       message="please enter valid credentials"
//     }
   
//   };

const saveinfo = () => {
    const reqOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cdistrict: ctr
        }) 
    }
    console.log("idhar aya "+ctr);
    axios.get(`http://localhost:9090/centerdistrict/${ctr}`)
          .then(response => setcaddress(response.data))
          .catch(error => console.log(error));

        

    }
    return (
    <div>
      <div style={{alignContent:"center" ,  marginLeft:"300px"}}>
        


            {/*Country Selection */}
    <label style={{marginLeft:"20px"}}>Country: </label>
    <select onChange={(e)=>handleCountryChange(e)}>
    <option>Select Country</option>
      {country?.map((item,index)=> (
        <option key={index} value={item}>{item}</option>
        ))}
    </select>

    {/*State Selection */}
    <label style={{marginLeft:"20px"}}>State: </label>
    <select onChange={(e)=>handleStateChange(e)}>
    <option>Select State</option>
      {States !=='Select State' &&  States?.map((item,index)=>
       <option key={index} value={item}>{item}</option>
      )}
    </select>

    {/*City Selection */}
    <label style={{marginLeft:"20px"}}>City: </label>
    <select    onChange={handlecitychange}>
      <option>Select City</option>
      {city !=='Select City' && city?.map((item,index)=>
       <option key={index} value={item?.name}>{item?.name}</option>
      )}
    </select>

           {/*City Selection */}
    {/* <label>City: </label>
    <select>
      <option>Select City</option>
      {city !=='Select City' && city?.map((item,index)=>
       <option key={index} value={item?.name}>{item?.name}</option>
      )}
    </select> */}

    
    <button className="btn btn-warning" style={{marginLeft:"20px"}} onClick={saveinfo}>Search</button>
    </div>

<div className="table-responsive marginset">
          <table className="table table-bordered marginset">
          <Thead style={{ backgroundColor: "#539196"  }}>
              <Tr >
                {/* <Th>
                  <div>
                    <h1 className="h5 fw-bold">Center Id</h1>
                  </div>
                </Th> */}
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
                    <h1 className="h5 fw-bold">Pincode</h1>
                  </div>
                </Th>
                <Th>
                <div>
                 
                    <td colSpan={2}>
                  
                    <h1 className="h5 fw-bold">Select Vaccine</h1>
                  
                  </td>
                 
                    </div>

                </Th>
{/*                 
                <Th>
                  <div>
                    <h1 className="h5 fw-bold">BOOK Vaccine</h1>
                  </div>
                </Th>   */}
                
              </Tr>
            </Thead>
            <tbody>
            
              {caddress.map((add) => {
                return (
                  <tr key={add.id} value={cid}>
                    {/* <td>{add.center[0].id}</td> */}
                    <td>{add.center[0].name}</td>

                    <td>{add.center[0].area}</td>
                    <td>{add.cpincode}</td>
                    <div>
                          <table className="table table-bordered marginset" style={{border:"2px solid black "}}>
                          <thead>
                               <tr>
                                 
                                  <td><th scope="col">Vaccine Name</th></td>
                                  <td><th scope="col">Quantity</th></td>
                                  <td><th scope="col">Book Vaccine</th></td>
                              </tr>
                          </thead>
                          
                          <tbody>
                          
                          {add.center.map((ct,index)=>(
                                    <>
                                        
                                        {ct.qtyVcc.map((qt)=>(
                                              <tr key={qt.id } value={qid} >
                                                 
                                                <td >{qt.qtyVaccine.vaccineName}</td>
                                                
                                                <td>{qt.qty}</td>
                                              
                                                <td><button className="btn btn-primary" onClick={()=>{
                                                 handlepushtobooking(qt.qtyVaccine.id,add.center[index].id)
                                                }} >Select</button></td>
                                                
                                              </tr>
                                        
                                        // onClick={handlepushtobooking}
                                            ))}
                                         
                                    </>
                              ))}
                              
                          
                          </tbody>
                          </table>
                      </div>
                            
                          </tr>
                        );
                      })}
            </tbody>
          
          </table>
          </div>
        </div>)
}
export default SearchNearbyCenter;
