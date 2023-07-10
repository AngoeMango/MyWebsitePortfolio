import './NavbarStyles.css'

function Navbar() {
	return (
		<nav className = "navbar">
			<a href = "/Home" className = "site-title">AngoeMango</a>
			<a href = "/Resume" title = "Professional Work History">Resume</a>
			<a href = "/Contact" title = "Get in touch!">Contact</a>
			<a href = "/About" title = "Personal Life and Biography">Angeleeca</a>
			<div className = "dropdown">
				<button className = "dropbutton">
					Projects
					<i className = "fa fa-caret-down"></i>
				</button>
				<ul className = "dropcontent">
					<a href = "/CodingProjects">Coding Projects</a>
					<a href = "/SewingProjects">Sewing Projects</a>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar