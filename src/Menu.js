import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// Adjust the path as needed

function Menu() {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ABC Automobiles</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" data-testid="menu-content">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            {user && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/vehicleList">Vehicles</Link>
                                    </li>
                                   
                                </>
                            )}
                            {user?.role === 'admin' && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add-vehicle">Add Vehicle</Link>
                                </li>
                            )}
                            {!user && (
                                <>
                                   
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        {user && (
                            <button className="btn btn-outline-light" onClick={logout}>Logout</button>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;