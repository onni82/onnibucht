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
                    <p className="bold">Iris Hadar</p>
                    <p>Nov 2023-Jan 2024 - Municipal Adult Education - Mathematics 2a</p>
                    <p>Stockholm/Södertälje, Sweden (online course)</p>
                </section>
                <section>
                    <p className="bold">Iris Hadar</p>
                    <p>July 2023-Sep 2023 - Municipal Adult Education - Programming 1 (C++)</p>
                    <p>Stockholm/Södertälje, Sweden (online course)</p>
                </section>
                <section>
                    <p className="bold">Be Licensed</p>
                    <p>Feb 2022-Mar 2022 - Vocational Training - Video Production</p>
                    <p>Stockholm, Sweden (online course)</p>
                </section>
                <section>
                    <p className="bold">Be Licensed</p>
                    <p>Dec 2021-Jan 2022 - Vocational Training - Sound Production</p>
                    <p>Stockholm, Sweden (online course)</p>
                </section>
                <section>
                    <p className="bold">Dalarna University</p>
                    <p>2018-2021 - Bachelor of Science - Sound and Music Production</p>
                    <p>Falun, Sweden</p>
                </section>
                <Header headerText="Certifications" />
                <section>
                    <p className="bold">Avid Pro Tools</p>
                    <p>Certified User - version 2020 and version 12.8</p>
                </section>
            </div>
        </Layout>
    );
}

export const Head = () => (
    <Seo title="Education" />
)