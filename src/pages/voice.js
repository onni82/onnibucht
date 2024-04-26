import React from "react"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"

export default function Voice() {
  return (
    <div id="content">
      <Layout pageProp="education">
        <div id="page">
          <Header headerText="Voice Acting" className="centered" />
          <div className="grid">
            <div class="td darkgrey img_aragami">
              <a href="https://store.steampowered.com/app/1158370/Aragami_2/" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="caption cdarkgrey">
                  <h2 className="tb">Aragami 2 (2021 Video Game)</h2>
                  <h3 className="tb">Voice acting as Nobu and Iwao</h3>
                </div>
              </a>
            </div>
            <div class="td darkgrey img_aragami">
              <a href="https://youtu.be/m9sTgup3DOI?t=697" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="caption cdarkgrey">
                  <h2 className="tb">Aragami 2 (2021 Video Game)</h2>
                  <h3 className="tb">Nobu - cutscene</h3>
                </div>
              </a>
            </div>
            <div class="td darkgrey img_aragami">
              <a href="https://youtu.be/m9sTgup3DOI?t=1045" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="caption cdarkgrey">
                  <h2 className="tb">Aragami 2 (2021 Video Game)</h2>
                  <h3 className="tb">Iwao - interaction</h3>
                </div>
              </a>
            </div>
            <div class="td darkgrey img_aragami">
              <a href="https://youtu.be/m9sTgup3DOI?t=1406" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="caption cdarkgrey">
                  <h2 className="tb">Aragami 2 (2021 Video Game)</h2>
                  <h3 className="tb">Iwao - interaction</h3>
                </div>
              </a>
            </div>
            <div class="td darkgrey img_aragami">
              <a href="https://youtu.be/koua8-K1oCQ?t=1825" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="caption cdarkgrey">
                  <h2 className="tb">Aragami 2 (2021 Video Game)</h2>
                  <h3 className="tb">Iwao - interaction</h3>
                </div>
              </a>
            </div>
            <div class="td darkgrey img_mymothersgarden">
              <a href="https://drive.google.com/file/d/1wvppK0vEHM4BzTHqi0YNnmJZ2BN5ORzb/view" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="caption cdarkgrey">
                  <h2 className="tb">My Mother's Garden 엄마의 정원</h2>
                  <h3 className="tb">Voice acting as Neighbor and Mom's Friend</h3>
                </div>
              </a>
            </div>
            <div class="td darkgrey img_thaishull">
              <a href="https://youtu.be/VTKLzcU3Eks" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="caption cdarkgrey">
                  <h2 className="tb">The Story of Cereal</h2>
                  <h3 className="tb">Voice acting as all characters</h3>
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
  <Seo title="Voice Acting" />
)