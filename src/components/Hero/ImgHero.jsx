import React from "react";
import HeroImg from "../../assets/img/banner-1.png";
import { Box } from "@mui/material";

const ImgHero = ({ children }) => {
	return <Box className="hero-backgroundImg">{children}</Box>;
};

export default ImgHero;
