import React from "react";
import HeroImg from "../../assets/img/banner-1.png";
import { Box, Typography } from "@mui/material";
import WidthContainer from "../HelpersComponents/WidthContainer";

const Hero = () => {
	return (
		<WidthContainer>
			<Box
				sx={{
					position: "relative",
				}}
			>
				<img className="hero-img " src={HeroImg} alt="hERO-IMG" />

				<Typography
					align="center"
					variant="h1"
					sx={{
						margin: "0",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					making brands happen
				</Typography>
			</Box>
			<Typography
				variant="h3"
				sx={{
					padding: "10rem 30% 10rem 0",
				}}
			>
				Acreditamos nas marcas que são pessoas, trabalham com pessoas e
				se focam em pessoas.
			</Typography>
		</WidthContainer>
	);
};

export default Hero;
