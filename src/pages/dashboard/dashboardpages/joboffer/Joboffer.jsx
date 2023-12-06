import React from 'react'
import Navbar from '../../../../components/dashboardcomponents/navbar/Navbar'


import Sidebar from '../../../../components/dashboardcomponents/sidebar/Sidebar'

import './joboffer.scss'
const Joboffer = () => {

    return (
        <div className='dashboard'>
            <Navbar />
            <div className="dashboard_container">
                <Sidebar />
                <div className="main">



                    <div className="top_main">
                        <h2>New Job Offer</h2>
                        <p>Add a new job to your company's job list.</p>
                    </div>
                    <div className="dashboard_job_form">
                        {/* <form action=""></form> */}
                        <label htmlFor="job_title">Job Title*</label>
                        <input type="text" id='job_title' placeholder='Add Job Title' />
                        <div className="dashboard_job_form_input">
                            <div>
                                <label htmlFor="category" className='label'>Category*</label>
                                <input type="text" id='category' placeholder='Category' /></div>
                            <div>
                                <label htmlFor="phone">Location*</label>
                                <select name="" id="" className='select'>
                                    <option value=""> 1  </option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select></div>
                        </div>

                    </div>
                    <div className="about_container">
                        <div className="about_job">
                            <h2>Job Description</h2>
                            <textarea name="" id="" cols="130" rows="10" placeholder='About Company' >

                            </textarea>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Joboffer