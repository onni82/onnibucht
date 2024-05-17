import React from "react"
//import { graphql } from "gatsby"
import { Link } from "gatsby"
import Logo from "../images/logo3.png"

const ListLink = props => (
    <li>
        <Link to={props.to} className={props.className}>{props.children}</Link>
    </li>
)

export default function Layout({ pageProp, location, children }) {
    return (
        <div id="boxcontent">
            <header>
                <img src={Logo} alt="" height="36" />
                <ul>
                    <ListLink to="/">Work Experience</ListLink>
                    <ListLink to="/education/">Education</ListLink>
                    <ListLink to="/background/">Background</ListLink>
                </ul>
            </header>
            {children}
            <footer id="footer">
                <p>Copyright &copy; 2024 <span className="blacktext">Onni August Emanuel Bucht</span></p>
                <p><Link to="/contact/">Contact</Link></p>
            </footer>
        </div>
    )
}
