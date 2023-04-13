import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import WidthContainer from "../../HelpersComponents/WidthContainer";
import MainMenu from "../MainMenu/MainMenu";
import { useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

export default function ElevateAppBar({
	isSidebarOpen,
	setIsSidebarOpen,
	isTopOfPage,
	props,
}) {
	const isNonMobile1000 = useMediaQuery("(min-width: 1000px)");
	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar>
					<WidthContainer>
						<Toolbar
							disableGutters
							sx={{ justifyContent: "space-between" }}
						>
							<Typography>Namuche</Typography>

							{isNonMobile1000 && <MainMenu />}
							{!isNonMobile1000 && (
								<IconButton
									onClick={() =>
										setIsSidebarOpen(!isSidebarOpen)
									}
								>
									<MenuIcon
										sx={{
											fontSize: "25px",
										}}
									/>
								</IconButton>
							)}
						</Toolbar>
					</WidthContainer>
				</AppBar>
			</ElevationScroll>

			<Toolbar />
		</React.Fragment>
	);
}
