import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../Layout/Header/header";

const AboutUs = () => {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/player")
			.then((res) => res.json())
			.then(({ players }) => {
				setPlayers(players);
			});
	}, []);

	return (
		<Wrap>
			<Header />
			<h2>About Us</h2>
			{players.map((player) => (
				<Player>{player.name}</Player>
			))}
		</Wrap>
	);
};

export default AboutUs;

const Wrap = styled.div``;
const Player = styled.div``;
