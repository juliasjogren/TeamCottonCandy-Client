import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";

const Home = () => {
	return (
		<div>
			<Header />
			<h2>Home</h2>
			{/* <div>
				<Link to={"/Gamehistory"}>Game History</Link>
			</div> */}
		</div>
	);
};

export default Home;
