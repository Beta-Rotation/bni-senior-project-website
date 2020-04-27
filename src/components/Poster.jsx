import React from "react";
import styled from "styled-components";
import pdf from "../assets/BetaRotation.pdf";

const Poster = () => {
	return (
		<React.Fragment>
			<h2>Final Project Poster</h2>
			<a
				href={pdf}
				target="_blank"
				rel="noopener noreferrer"
			>View the Poster in a new tab</a>

			<iframe
				src={pdf}
				width="100%"
				height="700px"
				title="Final Project Poster"
			/>
		</React.Fragment>
	);
};

export default Poster;