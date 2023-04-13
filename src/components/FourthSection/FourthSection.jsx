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
						variant="h5"
						// fontSize="4rem"
						sx={{
							display: "flex",
							justifyContent: "center",
							wordWrap: "break-word",
						}}
					>
						Let's Work Together
					</Typography>
					<Typography variant="fs6xl">fs6xl</Typography>
					<Typography variant="fs5xl">fs5xl</Typography>
					<Typography variant="h1">h1</Typography>
					<Typography variant="h2">h2</Typography>
					<Typography variant="h3">h3</Typography>
					<Typography variant="h4">h4</Typography>
					<Typography variant="h5">h5 tag</Typography>
					<Typography variant="h6">h6 tag</Typography>
					<Typography variant="body1">body1</Typography>
					<Typography variant="body2">body2</Typography>
				</WidthContainer>
			</PaddingContainer>
		</div>
	);
};

export default FourthSection;
