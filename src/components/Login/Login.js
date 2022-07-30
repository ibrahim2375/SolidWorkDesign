import React, { useState } from 'react'
//import css     
import axios from 'axios'
import '../../css/Login/Login.css';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
const Img = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp";
//icons for
function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Errors, setErrors] = useState('');
    axios.defaults.withCredentials = true;
    const Login = async (e) => {
        e.preventDefault();
        await axios.post(process.env.REACT_APP_LOGIN_TO_CHECK_USER, {
            email: email,
            password: password
        }).then((response) => {
            console.log(response.data);
            if (response.data === 'valid user') {
                toast(`Hello ${email}`, {
                    position: "top-right",
                    autoClose: 1000,
                });
                setErrors('');
                window.location.href = '/';
            } else {
                setErrors(response.data);

            }
        }).catch((error) => {
            toast(error.message, {
                position: "top-right",
                autoClose: 1000,
            });
        })
    }
    return (
        <section className="vh-100 ">
            <div className="container-fluid">
                <div className="close-icon">
                    <Link to="/" > <CloseIcon className="icon" /></Link>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-sm-6 text-black">
                        <div className="px-5 ms-xl-4">
                            <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
                            <span className="h1 fw-bold mb-0 span-txt ">Solid Work</span>
                        </div>
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <form style={{ width: "23rem" }}>
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log in</h3>
                                <p className="text-danger">{Errors}</p>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form2Example18" className="form-control form-control-lg" name='email' onChange={(e) => setemail(e.target.value)} />
                                    <label className="form-label" forlhtml="form2Example18">Email address</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="form2Example28" className="form-control form-control-lg" onChange={(e) => setpassword(e.target.value)} />
                                    <label className="form-label" forlhtml="form2Example28">Password</label>
                                </div>

                                <div className="pt-1 mb-4 w-100">
                                    <button className="btn btn-login btn-lg btn-block w-100" type="submit" onClick={Login}>Login</button>
                                </div>
                                <p>Don't have an account? <Link to="/register" className="register-link ">Register here</Link></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src={Img} alt="" className="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div >
            <ToastContainer />
        </section >
    )
}

export default Login