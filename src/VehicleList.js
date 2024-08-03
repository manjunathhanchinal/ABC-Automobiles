import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "./context/AuthContext";
import { Navigate, useNavigate } from 'react-router-dom';


function VehicleList() {
    const [vehicle, setVehicles] = useState([]);
    const { users, logout } = useContext(AuthContext);

    const navigate = useNavigate();
    useEffect(() => {

        fetchVehicles();


    }, [])
    function fetchVehicles() {

        axios.get('http://localhost:2000/vehicles')
            .then(response => {
                setVehicles(response.data);

            })
            .catch(error => {
                console.log('There was an error fetching the vehicles data!', error);
            })
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:2000/vehicles/${id}`)
            .then(() => {
                fetchVehicles();
            })
            .catch(error => {
                console.log('There was an error deleting the vehicle data!', error);
            })
    }
    function handleUpdate(id) {
        navigate(`/update-vehical/${id}`);
    }



    return (

        <div className="container mt-4">

            <h2>Vehicle List</h2>
            <div className="row">
                {vehicle.map(vehicle => (
                    <div className="col-md-4" key={vehicle.id}>
                        <div>
                            <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name} />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="car-text">Price : ${vehicle.price}</p>
                                <p className="car-text">Mileage : {vehicle.mileage} </p>
                                <p className="car-text">Seats : {vehicle.seats} </p>
                                <p className="car-text">Color: {vehicle.color} </p>
                                <p className="car-text">Fuel : {vehicle.fuel} </p>
                                <p className="car-text">Gear : {vehicle.gear} </p>
                                <p className="car-text">Description : {vehicle.description} </p>

                                {/* <button className="btn btn-danger" onClick={() =>handleDelete(vehicle.id)} >Delete</button> */}
                                {/* <button  className="btn btn-info" onClick={()=>navigate(`/update-vehicle/${vehicle.id}`)}>Update</button> */}
                                
                                    <>
                                        <button 
                                            type="button" 
                                            className="btn btn-danger me-2" 
                                            onClick={() =>handleDelete(vehicle.id)} 
                                        >
                                            Delete
                                        </button>
<button 
                                            type="button" 
                                            className="btn btn-primary" 
                                            onClick={()=>navigate(`/update-vehicle/${vehicle.id}`)}>
                                        
                                            Update
                                        </button>
                                    </>
                                
                            </div>
                        </div>


                    </div>


                ))}
            </div>


        </div>

    )
}


export default VehicleList;
