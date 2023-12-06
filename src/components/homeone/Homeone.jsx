import React, { useEffect } from 'react'
import './homeone.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PublicIcon from '@mui/icons-material/Public';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Homeone = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='homeone'>
            <div className="left_homeone">
                <div className="top_left_homeone">
                    <h1 className='title_left_homeone'>Find local service</h1>
                    <h1 className='title_left_homeone'>professionals </h1>
                    <h1 className='title_left_homeone'>for whatever you need</h1>
                    <span>Your Job Search Starts and ends With Us</span>
                </div>
                <div className="center_left_homeone">
                    <input type="text" placeholder='Job Title, Keywords, or Phrase' />
                    <div className="location">
                        <div className="icon"><PublicIcon />

                            <select name="select" id="select">
                                <option value="">City, State or ZIP</option>
                                <option value="">UP</option>
                                <option value="">MP</option>
                                <option value="">Punjab</option>
                            </select>
                        </div>
                        <SearchOutlinedIcon className='searchIcon' />
                    </div>

                </div>
                <div className="bottom_left_homeone">
                    <div className="bottomTitle">Popular Searches</div>
                    <div className="tags">
                        <span className="tag">Full stack</span>
                        <span className="tag">Designer</span>
                        <span className="tag">Software</span>
                        <span className="tag">React</span>

                    </div>
                </div>
            </div>
            <div className="right_homeone">
                <div className="cards_right_homeone">
                    <div className="cardone animate__animated "></div>
                    <div className="cardtwo animate__animated "></div>
                    <div className="cardthree animate__animated "></div>
                    <div className="cardinfo">
                        <div className="content_right_homeone">
                            <div className="title_right_homeone">
                                <h1>319 <span>Job offers</span></h1>
                                <p>in Business Development</p>
                            </div>
                            <div className="title_right_homeone">
                                <h1>319 <span>Job offers</span></h1>
                                <p>in Business Development</p>
                            </div>
                            <div className="title_right_homeone">
                                <h1>319 <span>Job offers</span></h1>
                                <p>in Business Development</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="colordiv animate__animated "></div>

            </div>
        </div>
    )
}

export default Homeone