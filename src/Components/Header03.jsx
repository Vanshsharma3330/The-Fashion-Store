import "../Styles/Header03.css";
import { linedarrow } from "../assets";

function Header03(){
    return(
        <>
        <div className="header-content">
            <ul>
                <li>Go quickly to </li>
                <li><img src={linedarrow} alt="" /></li>
                <li><a href="#">Women &ensp;:</a></li>
                <li><a href="#">Men &ensp;:</a></li>
                <li><a href="#">Accessories &ensp;:</a></li>
                <li><a href="#">Fashion &ensp;:</a></li>
                <li><a href="#">Features &ensp;:</a></li>
                <li><a href="#">Clothing &ensp;:</a></li>
                <li><a href="#">Bag and Wallets &ensp;:</a></li>
                <li><a href="#">Fragrances &ensp;:</a></li>
                <li><a href="#">Caps & Hats &ensp;:</a></li>
            </ul>
        </div>
        </>
    );
}
export default Header03;