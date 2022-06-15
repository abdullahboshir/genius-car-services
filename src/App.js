
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFount from './Pages/Shared/NotFount/NotFount';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';


function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/home' element={<Home></Home>}/>
    <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
    <Route path='/about' element={<About></About>}/>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path= '/register' element= {<Register></Register>}></Route>
    <Route path='*' elelment={<NotFount></NotFount>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
