import React from 'react'

//css import
import '../css/WorksPosts.css'
import Image from '../images/sw4.jpg'
//icons  
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function WorksPosts() {
    return (
        <div className="WorksPosts">
            <div className="circle-shape"></div>
            <div className="circle-shape1"></div>
            <h1 className='text-center mt-5'>Everything</h1>
            <div className="posts">
                {/* single post */}
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                {/* single post */}

            </div>
        </div>
    )
}
const Post = () => {
    return (
        < div className="post" >
            <img src={Image} alt="" />
            <div className="cover"></div>
            <div className="post-info">
                <div className="info-header">
                    <h1>RHO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Qui ad ratione nam
                        voluptatum ipsum? Distinctio ad omnis
                    </p>
                </div>
                <div className="info-footer">
                    <h4>career</h4>
                    <ArrowRightAltIcon />
                </div>
            </div>
        </div >
    )
}

export default WorksPosts