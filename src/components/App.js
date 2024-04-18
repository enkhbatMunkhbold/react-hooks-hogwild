import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {
	
	const [sortedHogs, setSortedHogs] = useState(hogs)
	return (
		<div className="App">
			<Nav 
				hogs={sortedHogs} 
				setHogs={setSortedHogs}
			/>
		</div>
	);
}

export default App;
