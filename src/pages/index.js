import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout pageProp="home">
            <div id="page">
                <Header headerText="Work Experience" />
                <section>
                    <p className="subcategory">Securitas</p>
                    <p>April 2022-Present - Security Guard</p>
                    <p>Full-time contract as a security guard. On behalf of Securitas, I patrol several buildings at one of their clients' work areas in Södertälje.<br />This also includes report writing and fire and emergency alarm calls, as well as working as a receptionist and escort when needed.</p>
                    <p>Södertälje, Sweden</p>
                </section>
                <section>
                    <p className="subcategory">Mind Proxy AB</p>
                    <p>June 2023-Sept 2023 - Supervisor and Administrator</p>
                    <p>Norberg, Sweden (Remote)</p>
                </section>
            </div>
        </Layout>
    );
}

export const Head = () => (
    <Seo title="Work Experience" />
)