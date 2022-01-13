import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { routeNames } from "./router.constants";
import Home from "../routes/home";
import GameHistory from "../routes/GameHistory";
import AboutUs from "../routes/AboutUs";

const Router = () => {
	return (
		<HashRouter>
			<Routes>
				<Route exact path={routeNames.home} element={<Home />} />
				<Route exact path={routeNames.gameHistory} element={<GameHistory />} />
				<Route exact path={routeNames.about} element={<AboutUs />} />
			</Routes>
		</HashRouter>
	);
};

export default Router;
