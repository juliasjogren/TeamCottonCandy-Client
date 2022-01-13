import React from "react";
import Router from "./router";
import styled from "styled-components";

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
