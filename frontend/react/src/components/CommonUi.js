import React,{useEffect,useState,useRef} from 'react';
import { useHistory , Link} from 'react-router-dom';



function CommonUi() {

    const history = useHistory();

    const userLogin = (e) => {
        e.preventDefault();
        history.push("/userui")
    }


    const centerLogin = (e) => {
        e.preventDefault();
        history.push("/centerui")
    }

    return(
       
      <>
      <div  style={{display : "flex" , justifyContent : "center" , alignItems : "center" , margin : "auto"}}>
          
          <Link to="/UserLogin"><button className='btn btn-warning'>
            User Login
          </button></Link>
          <Link to="/CenterLogin"><button style={{marginLeft:"10px"}} className='btn btn-warning'>
            Center Login
          </button></Link>
          {/* onClick={userLogin}
          onClick={centerLogin} */}
      </div>
      </>
    )
}
export default CommonUi