import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { Seo } from "../components/seo"
const ListLink = props => (
  <li className="headerlink">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function error() {
  return (
    <div id="content">
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <div id="header">
          <ul style={{ listStyle: `none`}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/video">Video Production</ListLink>
            <ListLink to="/audio">Audio Engineering</ListLink>
            <ListLink to="/music">Music Writing</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
            <ListLink to="/about/">About</ListLink>
          </ul>
        </div>
        <Header headerText="Error 404, Page Not Found" />
      </div>
    </div>
  )
}

export const Head = () => (
  <Seo title="Page not found" />
)