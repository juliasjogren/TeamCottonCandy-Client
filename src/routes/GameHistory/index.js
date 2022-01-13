import React, { useState, useEffect } from "react";
import Header from "../../Layout/Header";

const GameHistory = () => {
	const [lans, setLans] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/lan")
			.then((res) => res.json())
			.then(({ lans }) => {
				setLans(lans);
			});
	}, []);

	return (
		<div>
			<Header />
			<h2>GameHistory</h2>
			{lans.map(({ games }) => (
				<div>
					Lan!
					{games.map((game) => game.result)}
				</div>
			))}
		</div>
	);
};

export default GameHistory;
