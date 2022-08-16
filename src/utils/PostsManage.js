import axios from 'axios'
import store from '../Redux/store'
import { get_user_posts } from '../Redux/actions/Actions'
import { toast } from 'react-toastify'

export const getMyPosts = async () => {
    await axios.get(process.env.REACT_APP_GET_MY_POST).then((response) => {
        if (response.data.msg === undefined) {
            store.dispatch(get_user_posts(response.data));
        } else {
        }
    }).catch((err) => {
        console.log(err.message);
        alert('Error: ' + err.message);
    })
}

export const deletePost = async (id) => {
    await axios.delete(`${process.env.REACT_APP_DELETE_POST}${id}`).then((response) => {
        console.log(response.data);
        window.location.reload();
    }).catch((error) => {
        console.log(error);
    })
}
export const update = (formdata) => {
    axios.put(process.env.REACT_APP_UPDATE_WORK, formdata).then((response) => {
        toast(`${response.data}`, {
            position: "top-right",
            autoClose: 2000,
        });
        // setErrors('success');
    }).catch((error) => {
        toast("somthing error 😒", {
            position: "top-right",
            autoClose: 2000,
        });
        console.log(error);
    })

}
export const create = (formdata) => {
    axios.post(process.env.REACT_APP_CREATE_WORK, formdata).then((response) => {
        toast("successfully uploaded 😀..", {
            position: "top-right",
            autoClose: 2000,
        });
    }).catch((error) => {
        toast("somthing error 😒", {
            position: "top-right",
            autoClose: 2000,
        });
    })
}