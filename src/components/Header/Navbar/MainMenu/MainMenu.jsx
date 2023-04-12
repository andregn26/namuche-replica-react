import React from "react";
import FlexBetween from "../../../HelpersComponents/FlexBetween";
import { Box, Typography } from "@mui/material";

const menuItems = [
	{
		name: "a agência",
	},
	{
		name: "os serviços",
	},
	{
		name: "os trabalhos",
	},
	{
		name: "a magazine",
	},
	{
		name: "os contactos",
	},
];

const MainMenu = () => {
	return (
		<FlexBetween>
			<Box sx={{ display: "flex", gap: "2rem" }}>
				{menuItems.map((item, index) => (
					<Typography key={index} gap={2}>
						{item.name}
					</Typography>
				))}
			</Box>
		</FlexBetween>
	);
};

export default MainMenu;
