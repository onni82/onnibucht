import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"

export default function Skills() {
	return (
		<Layout pageProp="skills">
			<div id="page">
				<Header headerText="Skills" />
				<section>
					<p className="subcategory">Text/Code Editors</p>
					<p>Visual Studio, Sublime Text, Code::Blocks</p>
				</section>
				<section>
					<p className="subcategory">Media Skills</p>
					<p>Music writing, lyric writing, audio engineering &amp; music production</p>
				</section>
				<section>
					<p className="subcategory">Languages</p>
					<p>English, Swedish &amp; some Korean</p>
				</section>
				<Header headerText="Tools" />
				<section>
					<p className="subcategory">Operative Systems</p>
					<p>Windows, macOS, Ubuntu (Desktop &amp; Server)</p>
				</section>
				<section>
					<p className="subcategory">Digital Audio Workstations</p>
					<p>Avid Pro Tools, Image-Line FL Studio, Apple Logic Pro</p>
				</section>
				<section>
					<p className="subcategory">Video Editing Software</p>
					<p>Adobe Premiere Pro, Avid Media Composer, Apple Final Cut Pro</p>
				</section>
			</div>
		</Layout>
	);
}

export const Head = () => (
	<Seo title="Skills" />
)