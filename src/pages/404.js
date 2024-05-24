import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Logo from "../images/logo-big.png"

const ListLink = props => (
	<li className="headerlink">
		<Link to={props.to}>{props.children}</Link>
	</li>
)

export default function error() {
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
			<div id="page">
				<Header headerText="Error 404" />
				<p>Page not found</p>
			</div>
			<footer id="footer">
				<p>&copy; 2024 <span className="blacktext">Onni Bucht</span></p>
				<Link to="/contact/">Contact</Link>
			</footer>
		</div>
	)
}

export const Head = () => (
	<Seo title="Page not found" />
)