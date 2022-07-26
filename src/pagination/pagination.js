import React from 'react'
import './pagination.css'
function pagination({ postsPerPage, totalPosts, paginate }) {
    const numArray = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        numArray.push(i);
    }
    return (
        <div className="container  paginator" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
            <div aria-label="Page navigation example  ">
                <ul className="pagination " style={{ overflow: 'auto' }}>
                    {
                        numArray.map((number, index) => {
                            return <li key={index} className="page-link" onClick={() => paginate(number)} style={{ color: '#8b5cdd', cursor: 'pointer' }}><a href={`#page=${number}`}>{number}</a></li>

                        })
                    }

                </ul>
            </div>

        </div>
    )
}

export default pagination