import Menu from "./Menu";
import About from "./About";
import Footer from "./Footer"
import Home from "./Home";
import {Route,Routes} from 'react-router-dom';
import VehicleList from "./VehicleList";

function App()
{
    return(
        <>
        <Menu/>
       
        <Routes>
        <Route path="/" element={<Home/>}/>

      <Route path="/about" element={<About/>}/>
     <Route path="/vehicle-list" element={<VehicleList/>}/>
    </Routes>


        
        <Footer/>
        
        </>
    )
}
export default App;