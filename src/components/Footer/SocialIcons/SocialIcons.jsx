import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

const SocialIcons = () => {
	return (
		<Box sx={{ display: "flex", gap: "0.7rem" }}>
			<Tooltip
				title="Instagram"
				arrow
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 600 }}
			>
				<InstagramIcon />
			</Tooltip>
			<Tooltip
				title="LinkedIn"
				arrow
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 600 }}
			>
				<LinkedInIcon />
			</Tooltip>
			<Tooltip
				title="Blog"
				arrow
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 600 }}
			>
				<BookIcon />
			</Tooltip>
			<Tooltip
				title="Newsletter"
				arrow
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 600 }}
			>
				<MailIcon />
			</Tooltip>
		</Box>
	);
};

export default SocialIcons;
