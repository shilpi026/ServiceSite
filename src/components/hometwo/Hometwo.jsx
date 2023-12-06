import React, { useEffect, useRef, useState } from 'react'
import Card from '../card/Card'
import './hometwo.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AOS from "aos";
import "aos/dist/aos.css";
const Hometwo = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const slide = useRef()
    const [slider, setslider] = useState(0)
    const [isMoved, setisMoved] = useState(false)

    const handleClick = (direction) => {

        setisMoved(true);
        const distance = slide.current.getBoundingClientRect().x - 100;
        console.log(distance);
        if (direction === 'right' && slider < 6) {
            setslider(slider + 1);
            console.log(slider)
            slide.current.style.transform = `translateX(${-320 + distance}px)`
        }
        if (direction === 'left' && slider > 0) {
            setslider(slider - 1);
            console.log(slider)
            slide.current.style.transform = `translateX(${320 + distance}px)`
        }



    }
    return (
        <div className='hometwo'>
            <div className="container_hometwo">
                <div className="top_hometwo">
                    <h1>Search By Category</h1>
                    <p>Search your career opportunity with our categories</p>
                </div>
                <div className="center_hometwo">
                    <div className="cardss_hometwo" ref={slide}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />


                    </div>
                </div>
                <div className="bottom_hometwo">
                    <div className="dot left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}><ChevronLeftIcon /></div>

                    <div className="dot right" onClick={() => handleClick("right")}><ChevronRightIcon /></div>
                </div>
            </div>

        </div >
    )
}

export default Hometwo