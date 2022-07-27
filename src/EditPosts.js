import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
//components
import Links from './components/Links'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
//css  
import './css/Create.css';
import { ToastContainer, toast } from 'react-toastify'
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
function EditPosts() {
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
    const param = useParams();
    const [getPostdata, setPostdata] = useState([]);
    const [Errors, setErrors] = useState();
    const [img, setimg] = useState();
    const [title, settitle] = useState('');
    const [email, setemail] = useState('');
    const [website, setwebsite] = useState('');
    const [description, setdescription] = useState('');
    const [company, setcompany] = useState('');
    const handel = (e) => {
        setimg(e.target.files[0]);
    }
    const update = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append('file', img);
        formdata.append('title', title);
        formdata.append('email', email);
        formdata.append('website', website);
        formdata.append('description', description);
        formdata.append('company', company);
        formdata.append('id', param.id);
        if (title != null && description != null && email != null && website != null && company != null && img != null) {
            axios.put('http://localhost:5000/post/update', formdata).then((response) => {
                toast(`${response.data}`, {
                    position: "top-right",
                    autoClose: 2000,
                });
                setErrors('success');
            }).catch((error) => {
                toast("somthing error 😒", {
                    position: "top-right",
                    autoClose: 2000,
                });
                console.log(error);
            })
        } else {
            setErrors('can not be updated');
        }
    }

    const getPost = () => {
        axios.get(`http://localhost:5000/edit/${param.id}`).then((response) => {
            setPostdata(response.data);
            settitle(response.data.title);
            setcompany(response.data.company);
            setemail(response.data.email);
            setwebsite(response.data.website);
            setdescription(response.data.description);
            setimg(response.data.img);
        }).catch((err) => {
            console.log(err.message);
        })
    }
    useEffect(() => {
        getPost()
    }, []);
    return (
        <form encType="multipart/form-data">
            <h1 className="text-center ">Update Your Post</h1>
            <p className={`${Errors === 'success' ? 'text-success' : 'text-danger'}`}>{Errors}</p>
            {/* img */}
            <div className="mb-3">
                <input type="file" name="file" accept="image/*" onChange={handel} />
            </div>
            <div className="mb-3 text-center">
                <img src={`/uploads/${img}`} alt="" className="w-75" style={{ height: '100px' }} />
            </div>
            {/* title*/}
            <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">title</label>
                <input type="text" className="form-control" id="exampleInputTitle" name="title" onChange={(e) => settitle(e.target.value)} value={title} placeholder="title" />
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
            <button type="submit" className="btn w-100 mb-5" onClick={update}>Update</button>
        </form>
    )
}


export default EditPosts