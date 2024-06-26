import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"

export default function Contact() {
	return (
		<Layout pageProp="contact">
			<div id="page">
				<Header headerText="Contact" />
				<section>
					<p>Known by some as Emanuel and by many as Onni - he is a person with an interest in web development, music production, audio engineering and languages.</p>
					<p>Before graduating from Dalarna University (in Falun, Sweden) with bachelor's degree in sound and music production, he released multiple singles and EPs under the name of ONB, many in collaboration during his final two years in university.</p>
					<p>There are also previous musical works from him, starting in 2009.</p>
					<p>With an interest in language and culture, he studied the Japanese language and culture for three semesters at Stockholm University (fall semester 2015 through fall semester 2016).</p>
					<p>Later he also studied the Korean language and Korean culture as an exchange student in Seoul, South Korea for two semesters (August 2017 through August 2018).</p>
					<p>If you feel like working together, feel free to message me!</p>
					<p>Email: <a href="mailto:emanuel.bucht@icloud.com">emanuel.bucht@icloud.com</a>.</p>
					<p>Instagram: <a href="https://instagram.com/onni82" target="_blank" rel="noreferrer nofollow">@onni82</a> &amp; <a href="https://instagram.com/onbprod" target="_blank" rel="noreferrer nofollow">@onbprod</a>.</p>
				</section>
			</div>
		</Layout>
	);
}

export const Head = () => (
	<Seo title="Contact" />
)