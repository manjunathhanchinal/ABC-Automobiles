import {useFormik} from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () =>{
   
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
            username:'',
            password:'',
            role:'user'
        },
        validationSchema : Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: (values , {setSubmitting, setStatus})=>{
            axios.post('http://localhost:2000/users',values)
                .then(response =>{                    
                    setStatus('success');
                    navigate('/login');
        })
                .catch(error =>{
                    setStatus('error');
                })
                .finally(()=>{
                    setSubmitting(false);
                });
                

                
        }
    });

    return(
        <div className="container mt-4">
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label
                        htmlFor="username"
                        className="form-label">
                            Username
                        </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />

                    {
                        formik.touched.username && formik.errors.username ? (
                            <div className="text-danger">{formik.errors.username}</div>
                        ): null
                    }
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="password"
                        className="form-label">
                            password
                        </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />

                    {
                        formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ): null
                    }

                    <div className="mb-3" >
                        <label htmlFor="role" className="form-label"> role </label>
                        <select
                            id="role"
                            name="role"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.role}
                        
                        >
                        <option value = "user">User</option>
                        <option value = "admin">Admin</option>
                        
</select>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
                        Register
                    </button>

                    {formik.status && formik.status === 'error' && (
                        <span className="text-danger">Invalid username and password</span>
                    )}

                </div>
                </form>
        </div>
    )
}
export default Register;