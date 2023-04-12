import { Box } from "@mui/material";
import WidthContainer from "./components/HelpersComponents/WidthContainer";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourthSection from "./components/fourthSection/fourthSection";

function App() {
	return (
		<div className="App">
			<Layout>
				<Hero />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
			</Layout>
		</div>
	);
}

export default App;
