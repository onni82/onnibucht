import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"

export default function Music() {
  return (
    <div id="content">
      <Layout pageProp="music">
        <div id="page">
          <Header headerText="Music Writing" className="centered" />
          <div className="grid">
            <div class="td darkgrey img_onb">
              <a href="https://linktr.ee/onbprod" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="caption cdarkgrey">
                  <h2 className="tb">ONB's singles &amp; EPs</h2>
                  <h3 className="tb">Music writing, lyric writing, mixing, mastering</h3>
                </div>
              </a>
            </div>
          </div>
          <br />
        </div>
      </Layout>
    </div>
  );
}

export const Head = () => (
  <Seo title="Music Writing" />
)