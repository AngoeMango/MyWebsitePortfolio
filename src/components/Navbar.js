import './NavbarStyles.css'
import Clock from './Clock.js'
import windowslogo from './images/windows-0.png'

function Navbar() {
	return (
		<nav className = "navbar">
			<div class = "nav-left">
				<button class = "button98">
					slay<img src = {windowslogo} alt-text = "windowslogo" class = "startbuttonimg"></img>
				</button>
			</div>
			<div class = "nav-right">
				<Clock></Clock>
			</div>

		</nav>
	)
}

export default Navbar