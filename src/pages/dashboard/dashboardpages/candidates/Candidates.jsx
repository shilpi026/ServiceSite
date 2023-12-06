import React from 'react'
import Navbar from '../../../../components/dashboardcomponents/navbar/Navbar'


import Sidebar from '../../../../components/dashboardcomponents/sidebar/Sidebar'
import Datatable from '../../../../components/dashboardcomponents/datatable/Datatable'
import './candidates.scss'
const Joboffer = () => {

    return (
        <div className='dashboard'>
            <Navbar />
            <div className="dashboard_container">
                <Sidebar />
                <div className="main">



                    <div className="top_main">
                        <h2>Candidates</h2>
                        <p>Detailed list with all your job offers.</p>
                    </div>
                    <Datatable />

                </div>

            </div>

        </div>
    )
}

export default Joboffer