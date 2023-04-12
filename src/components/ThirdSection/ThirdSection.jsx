import React from "react";
import WidthContainer from "../HelpersComponents/WidthContainer";
import PaddingContainer from "../HelpersComponents/PaddingContainer";
import Beeq from "../../assets/img/beeq.png";
import Famel from "../../assets/img/famel.png";
import Garcias from "../../assets/img/garcias.png";
import Iot4 from "../../assets/img/iot4.png";
import Mudey from "../../assets/img/mudey.png";
import Urbanos from "../../assets/img/urbanos.png";
import OhMySnack from "../../assets/img/oh-my-snacks.png";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const ThirdSection = () => {
	return (
		<div>
			<WidthContainer>
				<PaddingContainer>
					<swiper-container slides-per-view="3">
						<swiper-slide lazy="true">
							<img src={Beeq} loading="lazy" />
						</swiper-slide>
						<swiper-slide lazy="true">
							<img src={Famel} loading="lazy" />
						</swiper-slide>
						<swiper-slide lazy="true">
							<img src={Garcias} loading="lazy" />
						</swiper-slide>
						<swiper-slide lazy="true">
							<img src={Iot4} loading="lazy" />
						</swiper-slide>
						<swiper-slide lazy="true">
							<img src={Mudey} loading="lazy" />
						</swiper-slide>
						<swiper-slide lazy="true">
							<img src={Urbanos} loading="lazy" />
						</swiper-slide>
						<swiper-slide lazy="true">
							<img src={OhMySnack} loading="lazy" />
						</swiper-slide>
					</swiper-container>
				</PaddingContainer>
			</WidthContainer>
		</div>
	);
};

export default ThirdSection;
