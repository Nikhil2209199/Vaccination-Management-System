import UHeader from './UHeader';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
 import { Link, Route, Routes, Switch, useNavigate } from 'react-router-dom';
import './common.css'

import ShowAllUser from './ShowAllUsers';
import ShowAllCenter from './ShowAllCenters';
import DetailCenter from './DetailCenter';
import PutQuantity from './PutQuantity';
import AddVaccine from './AddVaccine';
import ShowUsersinthisCenter from './ShowUsersinthisCenter';
import SearchNearbyCenter from './SearchNearbyCenter';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
import BookVaccine from './BookVaccine';
import Welcome from './Welcome';
import { BrowserRouter as Router } from 'react-router-dom';

function UMainUI()
{



    return <div className='content'>
        <div>
            <UHeader></UHeader>
            <hr></hr>
            {/* <Link to={"/CenterLogin"}>Login</Link> {" "}
            <Link to={"/CenterRegister"}>Register</Link> {" "}
            <Link to={"/home"}>Home</Link> {" "}
            <Link to={"/about"}>About Us</Link> {" "}
            <Link to={"/CenterDashboard"}>Dashboard</Link> {" "}
            <Link to={"/booking"}>Bookings</Link> {" "}
            <Link to={"/contact"}>Contact Us</Link> {" "}
            <Link to="/Home" >Home </Link>
            <Link  to="/Bookslot" >Bookslot </Link>
            <Link to="/Viewvaccine" >Viewvaccine </Link>
            <Link to="/About" >About </Link>
            <Link to="/Contact" >Contact Us</Link>
            <Link to="/Center" >Centers</Link> */}

            
            {/* <button onClick={Navigate}>Navigate Me To Dashboard</button> */}
            
            <hr></hr>
            {/* <Router>
                <Switch>
           
         
          <Route path="/ShowAllCenters" component={ShowAllCenter} exact/>
          <Route path="/DetailCenter/:id" component={DetailCenter} exact/>
          <Route path="/PutQuantity" component={PutQuantity} exact/>
          <Route path="/AddVaccine" component={AddVaccine} exact/>
          <Route path="/ShowUsersinthisCenter" component={ShowUsersinthisCenter} exact/>

          <Route path="/" component={Home} exact/>
          <Route path="/home" component={Home} exact/>
          <Route path="/SearchNearbyCenter" component={SearchNearbyCenter} exact/>
          <Route path="/UserRegistration" component={UserRegistration} exact/>
          <Route path="/Welcome" component={Welcome} exact/>
          <Route path="/UserLogin" component={UserLogin} exact/>
          <Route path="/BookVaccine" component={BookVaccine} exact/>
          <Route path="/ShowAllUser" component={ShowAllUser} exact/>

                </Switch>
                </Router> */}
                <hr/>
            <hr></hr>
            <Footer></Footer>
           </div>
           </div>
}

export default UMainUI; 