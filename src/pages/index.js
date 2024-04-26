import React from "react"
//import { Link } from "gatsby"
import Header from "../components/header"
import { Seo } from "../components/seo"
import Layout from "../components/layout"

export default function Home() {
  return (
    <div id="content">
      <Layout pageProp="home">
        <div id="page">
          <Header headerText="Do You Need A Music Producer, Audio Engineer, Voice Actor, Or Web Developer?" className="centered" />
          <p>Onni August Emanuel Bucht is the right person for your business.</p>
          <p>With a Bachelor of Arts degree in Sound and Music Production and training in Video Production, he is perfect for any kind of visual or auditory production.</p>
          <p>As he has studied foreign languages and cultures, he also has a good understanding of people. This means that any work together with him will go smoothly.</p>
          <br />
        </div>
      </Layout>
    </div>
  );
}

export const Head = () => (
  <Seo title="Home" />
)