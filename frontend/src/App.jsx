import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import CarDetails from './pages/CarDetails';
import Loginpage from './pages/loginpage';
import Signinpage from './pages/signinpage';
import CarList from './pages/CarList';
import UserProfile from './pages/userprofile';
import LogoutPage from './pages/logoutpage';
import Mylisting from './pages/mylisting';
import AdminPage from './pages/adminpage';
import AddCar from './pages/addCar';
import ModifyCar from './pages/modifyCar';
import DeleteCar from './pages/deleteCar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/cardetails' element={<CarDetails/>} />
      <Route path='/carlist' element={<CarList/>} />
      <Route path='/login' element={<Loginpage/>} />
      <Route path='/signup' element={<Signinpage/>} />
      <Route path='/profile' element={<UserProfile/>} />
      <Route path='/logout' element={<LogoutPage/>} />
      <Route path='/mylistings' element={<Mylisting/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/add-car' element={<AddCar/>}/>
      <Route path='/modify-car' element={<ModifyCar/>}/>
      <Route path='/delete-car' element={<DeleteCar/>}/>
    </Routes>
  );
}

export default App;
