import React from "react";
import styled from "styled-components";

const CreateLan = () => {
	const postLan = () => {
		const data = {
			date: new Date(),
		};
		fetch("http://localhost:3000/lan", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	};

	return (
		<Wrap>
			<CreateButton onClick={() => postLan()}>Create New Lan</CreateButton>
		</Wrap>
	);
};

export default CreateLan;

const Wrap = styled.div``;
const CreateButton = styled.button`
	padding: 20px;
	background-color: blueviolet;
`;
