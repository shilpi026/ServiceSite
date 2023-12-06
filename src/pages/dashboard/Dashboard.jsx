import React from 'react'
import Chart from '../../components/dashboardcomponents/chart/Chart'
import Navbar from '../../components/dashboardcomponents/navbar/Navbar'
import Sidebar from '../../components/dashboardcomponents/sidebar/Sidebar'
import Widget from '../../components/dashboardcomponents/widget/Widget'
import './dashboard.scss'

const Dashboard = () => {


    return (
        <div className='dashboard'>
            <Navbar />
            <div className="dashboard_container">
                <Sidebar />
                <div className="main">



                    <div className="top_main">
                        <h2>Dashboard</h2>
                        <p>Welcome, XXXXX</p>
                    </div>
                    <div className="widgets">
                        <Widget color="#e6f0f98b" />
                        <Widget color="#fff8ec" />
                        <Widget color="#c4e8c252" />
                        <Widget color="rgba(255, 192, 203, 0.475)" />
                    </div>
                    <div className="chart_container">
                        <div className="chart_one">
                            <h2>Company's Jobs Visiter</h2>
                            <Chart aspect={2 / 1} title="Last 6 months" /></div>
                        <div className="chart_second">
                            <h2>Applicaions</h2>
                            <Chart aspect={2 / 1} title="Last 6 months" /></div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Dashboard