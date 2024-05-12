import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"

export default function Programming() {
    return (
        <div id="content">
            <Layout pageProp="programming">
            <div id="page">
                <Header headerText="Programming" className="centered" />
                <h2>Command Line Based Role Playing Game</h2>
                <p>Created as a school assignment during my studies in C++. Can be found on <a href="https://github.com/onni82/projektuppgift">GitHub</a>.</p>
                <p>Languages: C++.</p>
                <br />
                <Header headerText="Web Development" className="centered" />
                <h2>emanuelbucht.netlify.app</h2>
                <p>This website is built using <a href="https://www.gatsbyjs.com/">Gatsby</a> and the code is hosted on <a href="https://github.com/onni82/emanuelbucht">GitHub</a>.</p>
                <p>Languages: Javascript (React and node.js), HTML and CSS.</p>
                <br />
            </div>
            </Layout>
        </div>
    );
}

export const Head = () => (
    <Seo title="Programming & Web Development" />
)