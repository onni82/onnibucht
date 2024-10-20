import React from "react"
//import { graphql } from "gatsby"
import { Link } from "gatsby"
import Logo from "../images/logo-big.png"

const ListLink = props => (
	<li>
		<Link to={props.to} className={props.className}>{props.children}</Link>
	</li>
)

export default function Layout({ pageProp, location, children }) {
	return (
		<div id="boxcontent">
			<header>
				<a href="/" aria-label="Home page"><img src={Logo} alt="" height="36" /></a>
				<ul>
					<ListLink to="/">Work Experience</ListLink>
					<ListLink to="/education/">Education</ListLink>
					<ListLink to="/skills/">Skills</ListLink>
				</ul>
			</header>
			{children}
			<footer id="footer">
				<p>&copy; 2024 <span className="blacktext">Onni Bucht</span></p>
				<Link to="/contact/">Contact</Link>
			</footer>
		</div>
	)
}
