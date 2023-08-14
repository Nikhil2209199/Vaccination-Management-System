import { BrowserRouter as Router ,Switch} from "react-router-dom";
import UHeader from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
 import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './components/common.css'
import CenterLogin from './components/CenterLogin';
import ProtectedRoute from './components/ProtechtedRoute';
import Booking from './components/Booking';
import Bookslot from './components/Bookslot';
import BookTimeAndSlot from './components/BookTimeAndSlot';
import Viewvaccine from './components/Viewvaccine';
import Center from './components/Center';
import NotFound from './components/NotFound';
import CenterDashboard from './components/CenterDashboard';
import CenterRegister from './components/CenterRegister';
import ShowAllUser from './components/ShowAllUsers';
import ShowAllCenter from './components/ShowAllCenters';
import DetailCenter from './components/DetailCenter';
import PutQuantity from './components/PutQuantity';
import AddVaccine from './components/AddVaccine';
import ShowUsersinthisCenter from './components/ShowUsersinthisCenter';
import SearchNearbyCenter from './components/SearchNearbyCenter';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import BookVaccine from './components/BookVaccine';
import Welcome from './components/Welcome';
import CommonUi from "./components/CommonUi";
import UMainUI from "./components/UMainUI";
import UserProfile from "./components/UserProfile";



function App(){
  return(
    <>
      <UHeader></UHeader>
     <CommonUi></CommonUi>
                    <Router>
                        <Switch>
                
                <Route path='/CenterLogin'  component={CenterLogin} exact/>
                
                <Route path='/CenterRegister'  component={CenterRegister}exact />
                <Route path='/'  component={Home} exact/>
                {/* <ProtectedRoute element={<Dashboard/>} /> */}
                <Route path='/CenterDashboard' component={CenterDashboard} exact/>
                <Route path='/booking' component={Booking} exact/>
                {/* <Route path='*'  component={NotFound} /> */}
                <Route path="/Home" component={Home} exact/>
                    <Route path="/Bookslot" component={Bookslot} exact/>
                    <Route path="/Viewvaccine" component={Viewvaccine} exact/>
                    <Route path="/About" component={About} exact/>
                    <Route path="/Contact" component={Contact} exact/>
                    <Route path="/Center" component={Center} exact/>
                    <Route path="/BookTimeAndSlot" component={BookTimeAndSlot} exact/>
                    <Route path="/ShowAllUsers" component={ShowAllUser} exact/>
                    <Route path='/UserLogin'  component={UserLogin} exact/>
                    <Route path='/UserProfile'  component={UserProfile} exact/>
       
                    <Route path="/UserRegistration" component={UserRegistration} exact/>
      <Route path="/ShowAllCenters" component={ShowAllCenter} exact/>
      <Route path="/DetailCenter/:id" component={DetailCenter} exact/>
      <Route path="/PutQuantity" component={PutQuantity} exact/>
      <Route path="/AddVaccine" component={AddVaccine} exact/>
      <Route path="/ShowUsersinthisCenter" component={ShowUsersinthisCenter} exact/>

      
      <Route path="/SearchNearbyCenter" component={SearchNearbyCenter} exact/>
      <Route path="/UserRegistration" component={UserRegistration} exact/>
      <Route path="/Welcome" component={Welcome} exact/>
      <Route path="/userui" component={UserLogin} exact/>
      <Route path="/BookVaccine" component={BookVaccine} exact/>

            </Switch>
                    </Router>
                    <Footer></Footer>
    </>
  );
}
export default App;