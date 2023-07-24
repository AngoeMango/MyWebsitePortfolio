import './NavbarStyles.css'
import windowslogo from './images/windows-0.png'

function Navbar() {
	return (
		<nav className = "navbar">
			<div class = "topnav-left">
				<button class = "button98">
					<img src = {windowslogo} alt-text = "windowslogo"></img>
					Angeleeca
				</button>
			</div>
		</nav>
	)
}

export default Navbar