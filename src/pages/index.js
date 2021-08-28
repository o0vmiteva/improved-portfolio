import React from "react"
import Layout from "../components/Layout"
import Homepage from "../components/Homepage"
import About from "../pages/About"
import Projects from "../pages/Projects"





export default function Home() {
  return (
    <Layout>
      <Homepage />
      <About />
      <Projects />
    </Layout>
  )
}
