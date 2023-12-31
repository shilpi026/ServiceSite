import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
// import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = (props) => {
    // const amt = 100;
    // const diff = 20;
    // let data;
    // switch (type) {
    //     case "user":
    //         data = {
    //             title: "USERS",
    //             isMoney: false,
    //             link: "See all users",
    //             icon: <PersonOutlinedIcon className='icon' style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }} />
    //         };
    //         break;
    //     case "order":
    //         data = {
    //             title: "ORDERS",
    //             isMoney: false,
    //             link: "View all orders",
    //             icon: <ShoppingCartOutlinedIcon className='icon' style={{ color: "goldenrod ", backgroundColor: "rgba(218,165,32,0.2)" }} />
    //         };
    //         break;
    //     case "earning":
    //         data = {
    //             title: "Earning",
    //             isMoney: true,
    //             link: "View net earning",
    //             icon: <MonetizationOnOutlinedIcon className='icon' style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }} />
    //         };
    //         break;
    //     case "balance":
    //         data = {
    //             title: "Balance",
    //             isMoney: true,
    //             link: "See details",
    //             icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: "purple", backgroundColor: "rgba(128,0,128 ,0.2)" }} />
    //         };
    //         break;
    //     default:
    //         break;

    // }
    return (
        <div className='widget' style={{ backgroundColor: props.color }}>
            <div className="left">
                <span className="title">title</span>
                <span className="counter">$40</span>
                <span className="link">link</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {/* {diff}% */}
                </div>
                icon

            </div>
        </ div >
    )
}

export default Widget