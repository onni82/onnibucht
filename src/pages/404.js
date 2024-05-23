import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Logo from "../images/logo3.png"

const ListLink = props => (
    <li className="headerlink">
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function error() {
    return (
        <div id="boxcontent">
            <header>
                <a href="/"><img src={Logo} alt="" height="36" /></a>
                <ul>
                    <ListLink to="/">Work Experience</ListLink>
                    <ListLink to="/education/">Education</ListLink>
                    <ListLink to="/skills/">Skills</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </header>
            <div id="page">
                <Header headerText="Error 404" />
                <p>Page not found</p>
            </div>
        </div>
    )
}

export const Head = () => (
  <Seo title="Page not found" />
)