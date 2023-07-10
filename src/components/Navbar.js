import React, {useState} from 'react'
import './NavbarStyles.css'

function Navbar() {
	return (
		<nav className = "navbar">
			<a href = "/Home" className = "site-title">AngoeMango</a>
			<ul>
				<li><a href = "/Resume" title = "Professional Work History">Resume</a></li>
				<li><a href = "/Contact" title = "Get in touch!">Contact</a></li>
				<li><a href = "/About" title = "Personal Life and Biography">Angeleeca</a></li>
				<div className = "dropdown">
					<button className = "dropbutton">
						Projects
						<i className = "fa fa-caret-down"></i>
					</button>
					<ul className = "dropcontent">
						<li><a href = "/CodingProjects">Coding Projects</a></li>
						<li><a href = "/SewingProjects">Sewing Projects</a></li>
					</ul>
				</div>
			</ul>
		</nav>
	)
}

export default Navbar