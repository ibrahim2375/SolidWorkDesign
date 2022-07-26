import React, { useState } from 'react'
import axios from 'axios'
//components
import Links from './components/Links'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
//css  
import './css/Create.css';
import { ToastContainer, toast } from 'react-toastify'
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

function CreatePost() {
    return (
        <div className="create">
            <div className="container">
                <Nav />
                <SideBar />
                <Links />
                {/* form */}
                <div className="form">
                    <Form />
                    <ToastContainer />
                </div>
                {/* form */}
            </div>
        </div>
    )
}

const Form = () => {
    const [Errors, setErrors] = useState();
    const [img, setimg] = useState();
    const [title, setitle] = useState('');
    const [email, setemail] = useState('');
    const [website, setwebsite] = useState('');
    const [description, setdescription] = useState('');
    const [company, setcompany] = useState('');
    const handel = (e) => {
        setimg(e.target.files[0]);
    }
    const sendPostData = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file', img);
        formdata.append('title', title);
        formdata.append('email', email);
        formdata.append('website', website);
        formdata.append('description', description);
        formdata.append('company', company);
        if (title != null && description != null && email != null && website != null && company != null && img != null) {
            setErrors('success');
            axios.post('http://localhost:5000/upload', formdata).then((response) => {
                toast("successfully uploaded 😀..", {
                    position: "top-right",
                    autoClose: 2000,
                });
                setitle('');
                setcompany('');
                setemail('');
                setdescription('');
                setimg('');
                setwebsite('');
            }).catch((error) => {
                toast("somthing error 😒", {
                    position: "top-right",
                    autoClose: 2000,
                });
            })
        } else {
            setErrors('can not be empty');
        }
    }
    return (
        <form encType="multipart/form-data">
            <h1 className="text-center ">Create Post</h1>
            <p className="text-center text-muted">post to find a developer for your work 🧑‍🚀 </p>
            <p className={`${Errors === 'success' ? 'text-success' : 'text-danger'}`}>{Errors}</p>
            {/* img */}
            <div className="mb-3">
                <input type="file" name="file" accept="image/*" onChange={handel} />
            </div>
            {/* title*/}
            <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">title</label>
                <input type="text" className="form-control" id="exampleInputTitle" name="title" onChange={(e) => setitle(e.target.value)} value={title} placeholder="title" />
            </div>
            {/* company */}
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">company</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="company" onChange={(e) => setcompany(e.target.value)} value={company} placeholder="Company Name" />
            </div>
            {/* website */}
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">website</label>
                <input type="url" className="form-control" id="exampleInputEmail1" name="website" onChange={(e) => setwebsite(e.target.value)} value={website} placeholder="https://example.com" />
            </div>
            {/* email */}
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder="example@gmail.com" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            {/* description */}
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <textarea type="password" className="form-control" id="exampleInputPassword1" name="description" onChange={(e) => setdescription(e.target.value)} value={description} placeholder="description of this job"></textarea>
            </div>
            <button type="submit" className="btn w-100 mb-5" onClick={sendPostData} >Submit</button>
        </form>
    )
}


export default CreatePost