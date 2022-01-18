import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CreateLan from "../../Layout/CreateLan/createLan";
import Header from "../../Layout/Header/header";
import Lan from "../../Layout/Lan/lan";

const GameHistory = () => {
	const [lans, setLans] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/lan")
			.then((res) => res.json())
			.then(({ lans }) => {
				setLans(lans);
			});
	});

	return (
		<Wrap>
			<Header />
			<h2>GameHistory</h2>
			<CreateLan></CreateLan>
			{lans.map((lan) => (
				<StyledLan data={lan} key={lan.date} />
			))}
		</Wrap>
	);
};

export default GameHistory;

const Wrap = styled.div``;
const StyledLan = styled(Lan)``;
const Game = styled.div``;
const Player = styled.div``;
