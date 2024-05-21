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
                    <p className="bold">Media Skills</p>
                    <p>Music writing, lyric writing, audio engineering &amp; music production</p>
                    <p className="bold">Languages</p>
                    <p>English, Swedish &amp; some Korean</p>
                    <Header headerText="Tools" />
                    <p className="bold">Operative Systems</p>
                    <p>Windows, macOS, Ubuntu (Desktop &amp; Server)</p>
                    <p className="bold">Text/Code Editors</p>
                    <p>Visual Studio, Sublime Text, Code::Blocks</p>
                    <p className="bold">Digital Audio Workstations</p>
                    <p>Avid Pro Tools, Image-Line FL Studio, Apple Logic Pro</p>
                    <p className="bold">Video Editing Software</p>
                    <p>Adobe Premiere Pro, Avid Media Composer, Apple Final Cut Pro</p>
                    <br />
                </div>
            </Layout>
        </div>
    );
}

export const Head = () => (
    <Seo title="Skills" />
)