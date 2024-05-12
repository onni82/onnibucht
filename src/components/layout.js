import React from "react"
//import { graphql } from "gatsby"
import { Link } from "gatsby"
import Logo from "../images/logo3.png"

const ListLink = props => (
    <li className="headerlink">
        <Link to={props.to} className={props.className}>{props.children}</Link>
    </li>
)

export default function Layout({ pageProp, location, children }) {
    return (
        <div id="boxcontent">
            <img src={Logo} alt="" height="36" className="headerimg" />
            <ul className="centered bigscreen">
                <ListLink to="/" activeClassName="active">Work Experience</ListLink>
                <ListLink to="/education/" activeClassName="active">Education</ListLink>
                <ListLink to="/background/" activeClassName="active">Background</ListLink>
            </ul>
            {children}
            <div id="footer">
                <p>Copyright &copy; 2024 <span className="blacktext">Onni August Emanuel Bucht</span></p>
                <Link to="/contact/" activeClassName="active">Contact</Link>
            </div>
        </div>
    )
}
