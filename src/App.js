import React from "react";
import Router from "./router/router";
import styled from "styled-components";

console.log(1);

const App = () => {
	return (
		<Wrap>
			<Router />
		</Wrap>
	);
};

export default App;

const Wrap = styled.div`
	max-width: 1080px;
	margin: 0 auto;
`;
