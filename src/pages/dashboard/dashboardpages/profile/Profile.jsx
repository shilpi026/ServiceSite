import React from 'react'
import Navbar from '../../../../components/dashboardcomponents/navbar/Navbar'


import Sidebar from '../../../../components/dashboardcomponents/sidebar/Sidebar'

import './profile.scss'
const Profile = () => {

    return (
        <div className='dashboard'>
            <Navbar />
            <div className="dashboard_container">
                <Sidebar />
                <div className="main">



                    <div className="top_main">
                        <h2>Edit Profile</h2>
                        <p>Edit your company profile page info.</p>
                    </div>
                    <div className="dashboard_profile_form">
                        <label htmlFor="name">Company Name*</label>
                        <input type="text" id='name' placeholder='Company Name' />
                        <div className="dashboard_profile_form_input">
                            <div>
                                <label htmlFor="email" className='label'>Email*</label>
                                <input type="text" id='email' placeholder='Email' /></div>
                            <div>  <label htmlFor="phone">Phone*</label>
                                <input type="text" id='phone' placeholder='Phone' /></div>
                        </div>
                        <label htmlFor="website">Website*</label>
                        <input type="text" id='website' placeholder='Website' />
                    </div>
                    <div className="about_container">
                        <div className="about_profile">
                            <h2>About</h2>
                            <textarea name="" id="" cols="130" rows="10" placeholder='About Company' >

                            </textarea>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Profile