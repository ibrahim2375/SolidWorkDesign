import React, { useState, useEffect } from 'react'
import Axios from 'axios';
//components
import Pagination from '../pagination/pagination'
//css import
import '../css/WorksPosts.css'
//icons  
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function WorksPosts() {
    const [posts, setposts] = useState([]);
    //create pagination need some variables first
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const lastIndexOfPage = currentPage * postsPerPage;
    const firstIndexOfPage = lastIndexOfPage - postsPerPage;
    const currentPosts = posts.slice(firstIndexOfPage, lastIndexOfPage);

    //change page number
    const paginate = (number) => {
        setCurrentPage(number);
    }

    useEffect(() => {
        const getPosts = async () => {
            await Axios.get(process.env.REACT_APP_GET_POSTS).then((res) => {
                setposts(res.data);
            })
        }
        getPosts();
    }, [])
    return (
        <div className="WorksPosts">
            <div className="circle-shape"></div>
            <div className="circle-shape1"></div>
            <h1 className='text-center mt-5'>Everything</h1>
            <div className="posts mb-5">
                {/* single post */}
                {
                    currentPosts.map(post => {
                        return <Post key={post.id} title={post.title} description={post.description} img={post.img} company={post.company} id={post.id} />
                    })
                }
                {/* single post */}

            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            {/* pagination pages */}
            {/* pagination pages */}
        </div>
    )
}
const Post = ({ title, description, img, company, id }) => {
    return (
        < div className="post">
            <img src={`/uploads/${img}`} alt="" />
            <div className="cover"></div>
            <div className="post-info">
                <div className="info-header">
                    <h1>{company}</h1>
                    <p>{description}</p>
                </div>
                <div className="info-footer">
                    <h4>{title}</h4>
                    <a className="text-light detail" href={`/works/${id}`}>
                        <ArrowRightAltIcon />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default React.memo(WorksPosts);