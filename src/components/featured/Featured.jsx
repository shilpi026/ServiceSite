import React from 'react'
import './featured.scss'

import Featuredcard from '../featuredcard/Featuredcard';
const Featured = () => {
    return (
        <div className='featured'>
            <div className="container_featured">
                <div className="top_featured">
                    <h1>Featured Job</h1>
                    <p>Search your career opportunity through 12,800 jobs</p>
                </div>
                <div className="center_featured">
                    <Featuredcard />
                    <Featuredcard />
                    <Featuredcard />
                    <Featuredcard />
                    <Featuredcard />
                    <Featuredcard />
                    <Featuredcard />
                    <Featuredcard />
                </div>
                <div className="bottom_featured">
                    <button>All Offers </button>
                </div>
            </div>

        </div>
    )
}

export default Featured