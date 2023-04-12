import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import WidthContainer from "../../HelpersComponents/WidthContainer";
import MainMenu from "./MainMenu/MainMenu";

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

export default function ElevateAppBar(props) {
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
							<MainMenu />
						</Toolbar>
					</WidthContainer>
				</AppBar>
			</ElevationScroll>

			<Toolbar />
		</React.Fragment>
	);
}
