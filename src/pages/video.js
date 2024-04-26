import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"

export default function Video() {
  return (
    <div id="content">
      <Layout pageProp="video">
        <div id="page">
          <Header headerText="Video Production" className="centered" />
          <div className="grid">
            <div class="td darkgrey img_lightyearloopers">
              <a href="https://youtu.be/SltWgUFtjzA" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="caption cdarkgrey">
                  <h2 className="tb">Lightyear Loopers - Do You Want To?</h2>
                  <h3 className="tb">Filming and video editing</h3>
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
  <Seo title="Video Production" />
)