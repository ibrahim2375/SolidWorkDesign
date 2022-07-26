import React, { useState } from 'react'
import '../../css/Register/Register.css'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
function Register() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Errors, setErrors] = useState('');
    const SignUp = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', {
            name: name,
            email: email,
            password: password
        }).then((response) => {
            if (response.data === "OK") {
                toast(response.data, {
                    position: "top-right",
                    autoClose: 1000,
                });
                setErrors('');
                window.location.href = '/login';
            } else {
                console.log(response.data);
                setErrors(response.data);
            }
        }).catch((err) => {
            setErrors(err.message);
        })
    }
    return (
        <section className="background-radial-gradient overflow-hidden ">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start ">
                <div className="close-icon">
                    <Link to="/login" > <CloseIcon className="icon" /></Link>
                </div>
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                        <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                            SignUp For SolidWork Make Posts To Find Worker <br />
                            <span className="span-register-title">for your business</span>
                        </h1>
                        <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Temporibus, expedita iusto veniam atque, magni tempora mollitia
                            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                            ab ipsum nisi dolorem modi. Quos?
                        </p>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                        <div className="card bg-glass">
                            <div className="card-body px-4 py-5 px-md-5">
                                <form>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example1" className="form-control" onChange={(e) => setname(e.target.value)} />
                                        <label className="form-label" forhtml="form3Example1">Name</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control" onChange={(e) => setemail(e.target.value)} />
                                        <label className="form-label" forhtml="form3Example3">Email address</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" className="form-control" onChange={(e) => setpassword(e.target.value)} />
                                        <label className="form-label" forhtml="form3Example4">Password</label>
                                    </div>
                                    <p className="text-danger mb-2">{Errors}</p>
                                    <button type="submit" className="btn btn-register btn-block mb-4 w-100" onClick={SignUp}>
                                        Sign up
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Register