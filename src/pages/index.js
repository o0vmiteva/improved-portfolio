import React from "react"
import Layout from "../components/Layout"
import Homepage from "../components/Homepage"
import About from "../pages/About"




export default function Home() {
  return (
    <Layout>
      <Homepage />
      <About />
    </Layout>
  )
}
