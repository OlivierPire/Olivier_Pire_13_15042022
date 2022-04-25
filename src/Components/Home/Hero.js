import React from "react";
import Features from "./Features";

const Hero = () => {
	return (
		<div className="main">
			<div className="hero">
				<section className="hero-content">
					<h2 className="sr-only">Promoted Content</h2>
					<p className="subtitle">No fees.</p>
					<p className="subtitle">No minimum deposit.</p>
					<p className="subtitle">High interest rates.</p>
					<p className="text">Open a savings account with Argent Bank today!</p>
				</section>
			</div>
			<Features
				src={"../../img/icon-chat.png"}
				alt={"Chat Icon"}
				title={"You are our #1 priority"}
				content={
					"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
				}
			/>
			<Features
				src={"../.././img/icon-money.png"}
				alt={"Chat Icon"}
				title={"More savings means higher rates"}
				content={
					"The more you save with us, the higher your interest rate will be!"
				}
			/>
			<Features
				src={"../../img/icon-security.png"}
				alt={"Chat Icon"}
				title={"Security you can trust"}
				content={
					"We use top of the line encryption to make sure your data and money is always safe."
				}
			/>
		</div>
	);
};

export default Hero;