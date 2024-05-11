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
        <ListLink to="/" activeClassName="active">HOME</ListLink>
        <ListLink to="/programming/" activeClassName="active">PROGRAMMING &amp; WEB DEV</ListLink>
        <ListLink to="/education/" activeClassName="active">EDUCATION</ListLink>
        <ListLink to="/skills/" activeClassName="active">SKILLS &amp; TOOLS</ListLink>
        <ListLink to="/contact/" activeClassName="active">ABOUT &amp; CONTACT</ListLink>
      </ul>
      {children}
      <br />
      <div id="footer"><p>Copyright &copy; 2024 <span className="blacktext">Onni August Emanuel Bucht</span></p></div>
    </div>
  )
}
