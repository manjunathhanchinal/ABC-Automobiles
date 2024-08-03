import { lazy, Suspense } from "react";
import Menu from "./Menu";
import About from "./About";
import Footer from "./Footer"
import Home from "./Home";
import { Route, Routes ,Navigate,} from 'react-router-dom';
import VehicleList from "./VehicleList";
import AddVehicle from "./AddVehicle";
import UpdateVehical from "./UpdateVehicle"
import ErrorBoundary from "./ErrorBoundary";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Login from "./login";
import Register from "./Register";

import { useContext } from 'react';
const ProtectedRoute = ({ element, ...rest }) => {
    const { user } = useContext(AuthContext);

    return user ? element : <Navigate to="/login" />;

};

function App() {
    return (
        <AuthProvider>
            <>
                <Menu />
<ErrorBoundary> 

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vehicleList" element={<ProtectedRoute element={<VehicleList />} />} />                    <Route path="/add-vehicle" element={<AddVehicle />} />
                    <Route path="/update-vehicle/:id" element={<ProtectedRoute element={<UpdateVehical />} />} />
                    <Route path="/add-vehicle" element={<ProtectedRoute element={<AddVehicle />} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/" />} />

                </Routes>
                    </ErrorBoundary>
                <Footer />
            </>
        </AuthProvider>
    )
}
export default App;