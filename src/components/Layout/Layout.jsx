import React from "react";
import {
	CssBaseline,
	useMediaQuery,
	createTheme,
	ThemeProvider,
} from "@mui/material";
import themeSettings from "../../theme";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
	const theme = themeSettings;
	const isNonMobile = useMediaQuery("(min-width: 600px)");
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				{children}
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default Layout;
