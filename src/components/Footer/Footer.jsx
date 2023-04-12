import React from "react";
import PaddingContainer from "../HelpersComponents/PaddingContainer";
import WidthContainer from "../HelpersComponents/WidthContainer";
import { Box } from "@mui/material";
import FlexBetween from "../HelpersComponents/FlexBetween";
import SocialIcons from "./SocialIcons/SocialIcons";

const Footer = () => {
	return (
		<Box padding={"5rem 0 1rem 0"}>
			<WidthContainer>
				<FlexBetween>
					<Box>Inovflow</Box>
					<SocialIcons />
				</FlexBetween>
			</WidthContainer>
		</Box>
	);
};

export default Footer;
