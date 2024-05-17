import React from "react"
import { Seo } from "../components/seo"
import Layout from "../components/layout"
import Securitas from "../images/securitas.png"

export default function Home() {
    return (
        <Layout pageProp="home">
            <div id="page">
                <img src={Securitas} alt="" className="skillLogo" />
                <h2>Securitas</h2>
                <p>April 2022-Present - Security Guard</p>
                <p>Full-time contract as a security guard. On behalf of Securitas, I patrol several buildings at one of their clients' work areas in Södertälje.<br />This also includes report writing and fire and emergency alarm calls, as well as working as a receptionist and escort when needed.</p>
                <p>Södertälje, Sweden</p>
                <img src={Securitas} alt="" className="skillLogo" />
                <h2>Mind Proxy AB</h2>
                <p>June 2023-Sept 2023 - Supervisor and Administrator</p>
                <p>Norberg, Sweden (Remote)</p>
            </div>
        </Layout>
    );
}

export const Head = () => (
    <Seo title="Work Experience" />
)