import React, { useEffect } from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
import WorkIcon from '@mui/icons-material/Work';
import AOS from "aos";
import "aos/dist/aos.css";
const Card = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div data-aos='slide-up' className='card ' >
            <div className="icons ">
                <WorkIcon className='icon' />
            </div>
            <div className="title ">Buisness Developement</div>
            <div className="detail"><Link to="/" className='link'>2 open positions</Link> </div>
            <div className="detail"><Link to="/" className='link'>Follow</Link> </div>
        </div>
    )
}

export default Card