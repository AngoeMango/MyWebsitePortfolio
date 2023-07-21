import './NavbarStyles.css'

function Navbar() {
	return (
		<nav className = "navbar">
			<a href = "/About" title = "Personal Life and Biography">Angeleeca</a>
			<a href = "/Contact" title = "Get in touch!">Contact</a>
			<a href = "/Resume" title = "Professional Work History">Resume</a>
			<div className = "dropdown">
				<button className = "dropbutton">
					Projects
					<i className = "fa fa-caret-down"></i>
				</button>
				<div className = "dropcontent">
					<a href = "/CodingProjects">Coding Projects</a>
					<a href = "/SewingProjects">Sewing Projects</a>
				</div>
			</div>
			<div href = "/Home" title = "Home" className = "site-title">AngoeMango</div>
		</nav>
	)
}

export default Navbar