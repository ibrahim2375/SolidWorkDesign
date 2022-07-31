import React, { useState } from 'react'
//redux
import { useSelector } from 'react-redux'
//components
import Pagination from '../pagination/pagination'
//css import
import '../css/WorksPosts.css'
//icons  
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function WorksPosts() {
    const posts_reducer = useSelector((state) => state.posts_reducer.posts);
    //create pagination need some variables first
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const lastIndexOfPage = currentPage * postsPerPage;
    const firstIndexOfPage = lastIndexOfPage - postsPerPage;
    const currentPosts = posts_reducer.slice(firstIndexOfPage, lastIndexOfPage);

    //change page number
    const paginate = (number) => {
        setCurrentPage(number);
    }
    return (
        <div className="WorksPosts">
            <div className="circle-shape"></div>
            <div className="circle-shape1"></div>
            <h1 className='text-center mt-5'>Everything</h1>
            <div className="posts mb-5">
                {/* single post */}
                {
                    currentPosts.length > 0 ?
                        currentPosts.map(posts => {
                            return <Post key={posts.id} title={posts.title} description={posts.description} img={posts.img} company={posts.company} id={posts.id} />
                        }) : <h1>Not Founded 😞</h1>
                }
                {/* single post */}

            </div>
            {/* pagination pages */}
            <Pagination postsPerPage={postsPerPage} totalPosts={posts_reducer.length} paginate={paginate} />
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