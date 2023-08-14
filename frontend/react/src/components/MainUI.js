import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
 import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './common.css'
import CenterLogin from './CenterLogin';
import ProtectedRoute from './ProtechtedRoute';
import Booking from './Booking';
import Bookslot from './Bookslot';
import BookTimeAndSlot from './BookTimeAndSlot';
import Viewvaccine from './Viewvaccine';
import Center from './Center';
import NotFound from './NotFound';
import CenterDashboard from './CenterDashboard';
import CenterRegister from './CenterRegister';
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

function MainUI()
{
    return <div className='content'>
        <div>
          
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
               
                <hr/>
            <hr></hr>
        
           </div>
           </div>
}

export default MainUI; 