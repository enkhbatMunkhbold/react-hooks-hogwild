import React from "react";
import piggy from "../assets/porco.png";
import HogsList from "./HogsList";

const Nav = ({hogs}) => {
	console.log('hogs:', hogs)

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
				<HogsList hogs={hogs}/>
			</span>
		</div>
	);
};

export default Nav;
