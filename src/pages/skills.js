import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"

export default function Skills() {
    return (
        <div id="content">
            <Layout pageProp="skills">
                <div id="page">
                    <Header headerText="Skills" />
                    <h2>Media Skills</h2>
                    <p>Music writing, lyric writing, audio engineering &amp; music production</p>
                    <h2>Languages</h2>
                    <p>English, Swedish &amp; some Korean</p>
                    <Header headerText="Tools" />
                    <h2>Operative Systems</h2>
                    <p>Windows, macOS, Ubuntu (Desktop &amp; Server)</p>
                    <h2>Text/Code Editors</h2>
                    <p>Visual Studio, Sublime Text, Code::Blocks</p>
                    <h2>Digital Audio Workstations</h2>
                    <p>Avid Pro Tools, Image-Line FL Studio, Apple Logic Pro</p>
                    <h2>Video Editing Software</h2>
                    <p>Adobe Premiere Pro, Avid Media Composer, Apple Final Cut Pro</p>
                    <br />
                </div>
            </Layout>
        </div>
    );
}

export const Head = () => (
    <Seo title="Skills and Tools" />
)