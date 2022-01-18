import React, { useState } from "react";
import styled from "styled-components";
import game from "../Game/game";

const Lan = (params) => {
	const [lan, setLan] = useState(params.data);

	const AddGame = () => {
		const gamedata = {
			date: new Date(),
			win: true,
			players: [],
		};
	};
	return (
		<Wrap>
			<Date>{lan.date}</Date>
			{lan.games.map((game) => (
				<StyledGame data={game} key={game.id}></StyledGame>
			))}
			<Button onClick={() => AddGame()}>Add Game</Button>
		</Wrap>
	);
};

export default Lan;

const Wrap = styled.div`
	width: 500px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
`;
const Date = styled.div``;
const Button = styled.button`
	align-self: flex-end;
	padding: 5px;
`;
const StyledGame = styled(game)``;
