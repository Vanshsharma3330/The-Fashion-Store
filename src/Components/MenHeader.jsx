import "../Styles/MenHeader.css";
import {smallleftarrow, smallrightarrow} from "../assets";

export default function MenHeader() {
	return (
		<>
			<div className="main-men-header" id="men-top">
				<h1>MEN</h1>
				<div className="arrows">
					<img src={smallleftarrow} alt="" />
					<img src={smallrightarrow} alt="" />
				</div>
			</div>
            
		</>
	);
}
