import "../Styles/FeaturesHeader.css";

import { smallleftarrow, smallrightarrow } from "../assets";

export default function () {
	return (
		<>
			<div className="main-feature-header" id="arrival-top">
				<div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
					<h1>NEW ARRIVALS</h1>
					<h1>BEST SELLERS</h1>
					<h1>POPULAR</h1>
				</div>
				<div className="arrows">
					<img src={smallleftarrow} alt="" />
					<img src={smallrightarrow} alt="" />
				</div>
			</div>
		</>
	);
}
