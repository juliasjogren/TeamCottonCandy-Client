import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../Layout/Header/header";

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
		<Wrap>
			<Header />
			<h2>GameHistory</h2>
			{lans.map((lan) => (
				<Lan key={lan.date}>
					{lan.games.map((game) => (
						<Game key={game.id}>
							<h1>{game.result}</h1>
							{game.players.map((player) => (
								<Player key={player.player}>{player.hero}</Player>
							))}
						</Game>
					))}
				</Lan>
			))}
		</Wrap>
	);
};

export default GameHistory;

const Wrap = styled.div``;
const Lan = styled.div``;
const Game = styled.div``;
const Player = styled.div``;
