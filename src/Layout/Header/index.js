import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../../Assets/TeamCottonCandy.jpg";

const Header = () => {
	return (
		<Wrap>
			<LogoImage src={image} />
			<Navigation>
				<StyledLink to={"/"}>Home</StyledLink>
				<StyledLink to={"/Gamehistory"}>Game History</StyledLink>
				<StyledLink to={"/AboutUs"}>About us</StyledLink>
			</Navigation>
		</Wrap>
	);
};

export default Header;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const LogoImage = styled.img`
	width: 250px;
`;
const Navigation = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
	width: 100%;
	background-color: #665560;
`;
const StyledLink = styled(Link)`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	text-decoration: none;
	margin-left: 20px;
	margin-right: 20px;
	color: white;
`;
