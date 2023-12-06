import React, { useContext, useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import 'animate.css';
import { User } from '../../context/contextfile';
const Navbar = () => {
    const [isScrolled, setScroll] = useState(false);
    const [dropdown, setdropdown] = useState(false);
    const { modal, setmodal } = useContext(User)
    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    const handle = () => {
        setmodal(!modal)
        if (!modal) { window.document.body.style.overflow = 'hidden' }
        else { window.document.body.style.overflow = '' }
    }
    return (<>
        <div className={isScrolled ? "navbar scrolled " : "navbar "}>
            <div className="navbarContainer" >
                <div className="left">
                    <span>JettHire</span>
                </div>
                <div className="center " >
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/" className='link'>Jobs</Link>
                    <Link to="/" className='link'>Companies</Link>
                    <Link to="/" className='link'>Candidates</Link>
                    <Link to="/" className='link'>Packages</Link>

                </div>

                <div className="right">
                    <div className={isScrolled ? "signup scroll " : "signup "} onClick={handle}>Signup</div>
                    <div className={isScrolled ? "signup scroll " : "signup "} onClick={handle}>Login</div>
                    <div className={isScrolled ? "signup scroll signup_login " : "signup signup_login "} onClick={handle}>Login/Signup</div>
                    <div className={isScrolled ? "post scroll " : "post "}>Post a Job</div>
                    <div className="navbar_icon" onClick={(e) => {
                        setdropdown(!dropdown)

                    }}><MenuIcon /></div>
                </div>
            </div>
        </div >
        <div className={dropdown ? "show dropdown_container animate__animated animate__fadeInLeft" : "dropdown_container  "}>
            <ul>
                <li>  <Link to="/" className='link'>Home</Link></li>
                <li>    <Link to="/" className='link'>Jobs</Link></li>
                <li>  <Link to="/" className='link'>Companies</Link></li>
                <li> <Link to="/" className='link'>Candidates</Link></li>
                <li>   <Link to="/" className='link'>Packages</Link></li>
            </ul>
        </div>



    </>
    )
}

export default Navbar