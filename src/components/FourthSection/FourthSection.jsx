import React from "react";
import PaddingContainer from "../HelpersComponents/PaddingContainer";
import WidthContainer from "../HelpersComponents/WidthContainer";
import { Typography } from "@mui/material";

const FourthSection = () => {
	return (
		<div>
			<PaddingContainer>
				<WidthContainer>
					<Typography
						variant="h2"
						fontSize="9rem"
						sx={{ display: "flex", justifyContent: "center" }}
					>
						Let's Work Together
					</Typography>
				</WidthContainer>
			</PaddingContainer>
		</div>
	);
};

export default FourthSection;
