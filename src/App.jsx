import Layout from "./components/00Layout/Layout";
import Hero from "./components/Hero/Hero";
import SecondSection from "./components/Section2/SecondSection";
import ThirdSection from "./components/Section3/ThirdSection";
import FourthSection from "./components/Section4/FourthSection";

function App() {
	return (
		<div className="App">
			<Layout>
				<Hero />
				<SecondSection />
				{/* <ThirdSection /> */}
				<FourthSection />
			</Layout>
		</div>
	);
}

export default App;
