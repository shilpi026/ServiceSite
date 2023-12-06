import React from 'react'
import './footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='footer'>
                <div className="container_footer">
                    <div className="left_footer">
                        <div className="title">JettHire</div>
                        <div className="call">call us</div>
                        <div className="number">87126313</div>
                        <div className="address">
                            <p>90 Fifth Avenue, 3rd Floor</p>
                            <p>San Francisco, CA 1980</p>
                            <p>office@jobster.com</p>
                        </div>

                    </div>
                    <div className="right_footer">
                        <div className="info_box">
                            <h3>For Candidates</h3>
                            <ul>
                                <li>Find Jobs</li>
                                <li onClick={() => navigate('/dashboard')}>Candidate Dashboard</li >
                                <li>My Applications</li>
                                <li>Favourite Jobs</li>
                                <li>My inbox</li>
                            </ul>
                        </div>
                        <div className="info_box">
                            <h3>For Employers</h3>
                            <ul>
                                <li>Find Candidates</li>
                                <li onClick={() => navigate('/dashboard')}>Company Dashboard</li>
                                <li>My Applications</li>
                                <li>Favourite Jobs</li>
                                <li>My inbox</li>
                                <li>My inbox</li>
                            </ul>
                        </div>
                        <div className="info_box">
                            <h3>Other Demos</h3>
                            <ul>
                                <li>Find Jobs</li>
                                <li onClick={() => navigate('/dashboard')}>Candidate Dashboard</li>
                                <li>My Applications</li>
                                <li>Favourite Jobs</li>
                                <li>Favourite Jobs</li>
                                <li>Favourite Jobs</li>
                                <li>My inbox</li>
                            </ul>
                        </div>
                        <div className="info_box">
                            <h3>About Us</h3>
                            <ul>
                                <li>Find Jobs</li>
                                <li onClick={() => navigate('/dashboard')}>Candidate Dashboard</li>
                                <li>My Applications</li>
                                <li>Favourite Jobs</li>
                                <li>My inbox</li>
                            </ul>
                        </div>

                        .
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                <p>© 2022 JettHire. All Right Reserved.</p>
                <div className="icon_footer">
                    <span><a href="/#"><FacebookIcon /></a> </span>
                    <span><a href="/#"><TwitterIcon /></a> </span>
                    <span> <a href="/#"><InstagramIcon /></a>  </span>
                    <span>  <a href="/#"><LinkedInIcon /></a> </span>
                </div>
            </div>
        </>
    )
}

export default Footer