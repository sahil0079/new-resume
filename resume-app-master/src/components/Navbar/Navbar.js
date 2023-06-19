import React from "react";
import "./Navbar.css";

function Navbar() {
	var name = "<SC/>";

	return (
		<div className="navbar_container">
			<div className="navbar_left">{name}</div>
			<div className="navbar_right">
				<p>
					<a href="#about">About</a>
				</p>
				<p>
					<a href="#tools">Tools</a>
				</p>
				<p>
					<a href="#experience">Experience</a>
				</p>
				<p>
					<a href="#projects">Projects</a>
				</p>

				{/* <a href="Tools"> <p>Tools</p></a>


       
        <p>Tools</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Resume</p> */}
			</div>
		</div>
	);
}

export default Navbar;
