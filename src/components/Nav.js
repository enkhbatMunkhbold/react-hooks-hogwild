import React, { useState } from "react";
import piggy from "../assets/porco.png";
import HogsList from "./HogsList";
import Filter from "./Filter";
import SortHogs from "./SortHogs";

const Nav = ({ hogs, setHogs }) => {
	const [greasedHog, setGreasedHog] = useState('All')

	const onChangeGrease = e => {
		setGreasedHog(e.target.value)
	}

	const handleSort = e => {
		// console.log(e.target.name)
		if(e.target.name === 'name') {
			hogs.sort((a, b) => a.name.localeCompare(b.name))
		} else {
			hogs.sort((a, b) => a.weight - b.weight)
		}
		setHogs([...hogs])
	}

	const filteredHogs = hogs.filter(hog => {
		if(greasedHog === 'greased') {
			return hog.greased === true
		} else if(greasedHog === 'ungreased') {
			return hog.greased === false
		} else {
			return hog
		}
	})

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			
			<Filter onChangeGrease={onChangeGrease}/>
			<SortHogs onHandleSort={handleSort}/>
			<span className="normalText">
				A React App for County Fair Hog Fans				
			</span>
			<HogsList hogs={filteredHogs}/>
		</div>
	);
};

export default Nav;
