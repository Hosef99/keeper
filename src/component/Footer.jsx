import React from "react";

function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer>
			<p>@{year} Joseph Tan</p>
		</footer>
	);
}

export default Footer;
