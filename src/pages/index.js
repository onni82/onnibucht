import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"
import Hda from "../images/hda.png"
import Avid from "../images/avid_certified.png"
import BeLicensed from "../images/belicensed_nopadding.png"
import IrisHadar from "../images/irishadar.png"

export default function Home() {
    return (
        <Layout pageProp="home">
            <div id="page">
                <Header headerText="Work Experience" className="centered" />
                <img src={IrisHadar} alt="Iris Hadar Komvux" width="55" className="skillLogo" />
                <h2>Iris Hadar</h2>
                <p>Nov 2023-Jan 2024 - Municipal Adult Education - Mathematics 2a</p>
                <p>Stockholm/Södertälje, Sweden (online course)</p>
                <img src={IrisHadar} alt="Iris Hadar Komvux" width="55" className="skillLogo" />
                <h2>Iris Hadar</h2>
                <p>July 2023-Sep 2023 - Municipal Adult Education - Programming 1 (C++)</p>
                <p>Stockholm/Södertälje, Sweden (online course)</p>
            </div>
        </Layout>
    );
}

export const Head = () => (
    <Seo title="Work Experience" />
)