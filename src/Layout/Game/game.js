import React, { useState } from "react";
import styled from "styled-components";

const Game = (params) => {
	const [game, setGame] = useState(params.data);

	return (
		<Wrap>
			{game.win ? <WinPanel>Win</WinPanel> : <LosePanel>Lose</LosePanel>}
		</Wrap>
	);
};

export default Game;

const Wrap = styled.div``;
const WinPanel = styled.div`
	margin: 5px;
	padding: 5px;
	background-color: darkgreen;
`;
const LosePanel = styled.div`
	margin: 5px;
	padding: 5px;
	background-color: darkred;
`;
