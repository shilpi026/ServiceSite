import React, { useEffect } from 'react'
import './featuredcard.scss'
import { Link } from 'react-router-dom'
// import WorkIcon from '@mui/icons-material/Work';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PublicIcon from '@mui/icons-material/Public';
import AOS from "aos";
import "aos/dist/aos.css";


const Featuredcard = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className="featuredContainer">
            <div data-aos='fade-up' className='featuredcard ' >
                <div className="top_featuredcard">
                    <div className="topTop_featuredcard">
                        <LocalAtmIcon className='icon_featuredcard' />
                        <Link to='/' className='link_featuredcard'>Finance</Link>

                    </div>
                    <div className="centerTop_featuredcard">Financial Analyst</div>
                    <div className="bottomTop_featuredcard">
                        <div className="left_bottomTop_featuredcard"><span><PublicIcon /></span>
                            <span> UttarPradesh</span></div>
                        <div className="right_bottomTop_featuredcard"> Full Time</div>
                    </div>

                </div>
                <div className="bottom_featuredcard">
                    <div className="leftBottom_featuredcard">
                        <div className="date_featuredcard">June 8, 2022 by</div>
                        <div className="name_featuredcard">Gramware</div>
                    </div>
                    <div className="rightBottom_featuredcard"><img src="https://pixelprime.co/themes/jobster-wp/demo-1/wp-content/uploads/2022/06/company-logo-5-160x160.png" alt="" /></div>
                </div>

            </div>

        </div>
    )
}

export default Featuredcard

// animate__animated animate__fadeInUp