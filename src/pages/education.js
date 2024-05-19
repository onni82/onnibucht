import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"
import Hda from "../images/hda.png"
import Avid from "../images/avid_certified.png"
import BeLicensed from "../images/belicensed_nopadding.png"
import IrisHadar from "../images/irishadar.png"

export default function Education() {
    return (
        <Layout pageProp="education">
            <div id="page">
                <Header headerText="Education" />
                <section>
                    <img src={IrisHadar} alt="Iris Hadar Komvux" className="skillLogo" />
                    <h2>Iris Hadar</h2>
                    <p>Nov 2023-Jan 2024 - Municipal Adult Education - Mathematics 2a</p>
                    <p>Stockholm/Södertälje, Sweden (online course)</p>
                </section>
                <section>
                    <img src={IrisHadar} alt="Iris Hadar Komvux" className="skillLogo" />
                    <h2>Iris Hadar</h2>
                    <p>July 2023-Sep 2023 - Municipal Adult Education - Programming 1 (C++)</p>
                    <p>Stockholm/Södertälje, Sweden (online course)</p>
                </section>
                <section>
                    <img src={BeLicensed} alt="Be Licensed Logo" className="skillLogo" />
                    <h2>Be Licensed</h2>
                    <p>Feb 2022-Mar 2022 - Vocational Training - Video Production</p>
                    <p>Stockholm, Sweden (online course)</p>
                </section>
                <section>
                    <img src={BeLicensed} alt="Be Licensed Logo" className="skillLogo" />
                    <h2>Be Licensed</h2>
                    <p>Dec 2021-Jan 2022 - Vocational Training - Sound Production</p>
                    <p>Stockholm, Sweden (online course)</p>
                </section>
                <section>
                    <img src={Hda} alt="Dalarna University Logo" className="skillLogo" />
                    <h2>Dalarna University</h2>
                    <p>2018-2021 - Bachelor of Science - Sound and Music Production</p>
                    <p>Falun, Sweden</p>
                </section>
                <Header headerText="Certifications" />
                <section>
                    <img src={Avid} alt="Avid Logo" className="skillLogo" />
                    <h2>Avid Pro Tools</h2>
                    <p>Certified User - version 2020 and version 12.8</p>
                </section>
            </div>
        </Layout>
    );
}

export const Head = () => (
    <Seo title="Education" />
)