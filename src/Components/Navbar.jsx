import "../Styles/Navbar.css";

import {cart2} from "../assets";

function Navbar(){
    return(
        <>
        <div className="navbar-container">
            <ul>
                <li><a href="#top1">Home</a></li>
                <li><a href="#categories-top">Shop</a></li>
                <li><a href="#arrival-top">Features</a></li>
                <li><a href="#men-top">Mega Group</a></li>
                <li><a href="#footer-top">About</a></li>
                <li><a href="#blog-top">Blog</a></li>
                <li><a href="#footer-top">Contact</a></li>
                <li className="shopping" ><img src={cart2} alt="" />Shopping Cart (0)</li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;