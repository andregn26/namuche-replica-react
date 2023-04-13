import React from "react";
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme,
} from "@mui/material";
import { SettingsOutlined, ChevronRight } from "@mui/icons-material";
import FlexBetween from "../../HelpersComponents/FlexBetween";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Sidebar = ({
	drawerWidth,
	isSidebarOpen,
	setIsSidebarOpen,
	isNonMobile,
}) => {
	const theme = useTheme();

	return (
		<>
			<Box component="nav">
				{isSidebarOpen && (
					<Drawer
						open={isSidebarOpen}
						onClose={() => setIsSidebarOpen(false)}
						variant="persistent"
						anchor="right"
						sx={{
							width: drawerWidth,
							"& .MuiDrawer-paper": {
								backgroundColor:
									theme.palette.background.default,
								boxSizing: "border-box",
								borderWidth: isNonMobile ? 0 : "2px",
								width: drawerWidth,
							},
						}}
					>
						<Box
							width="100%"
							height="100%"
							sx={{
								p: "1.5rem 2rem 2rem 3rem",
								border: "solid red 3px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							{/* Margins and padding box */}
							{/* Menu Header Box */}
							<FlexBetween>
								<Box
									display="flex"
									alignItems="center"
									gap="0.5rem"
								>
									<Typography variant="h4" fontWeight="bold">
										Menu
									</Typography>
								</Box>
								<IconButton
									onClick={() =>
										setIsSidebarOpen(!isSidebarOpen)
									}
								>
									<ChevronRight />
								</IconButton>
							</FlexBetween>
							{/* Menu Actions Box */}
							{/* Menu Footer Box */}{" "}
							<Box>
								<Divider />
								<FlexBetween
									textTransform="none"
									// gap="1rem"
									// m="1.5rem 2rem 2rem 3rem"
									mt="2rem"
									mb="1rem"
								>
									<Box display="flex" gap="2rem">
										<FacebookOutlinedIcon />
										<InstagramIcon />
										<WhatsAppIcon />
										<EmailOutlinedIcon />
									</Box>
								</FlexBetween>
							</Box>
						</Box>
					</Drawer>
				)}
			</Box>
		</>
	);
};

export default Sidebar;
