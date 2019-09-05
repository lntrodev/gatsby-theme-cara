/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Speakers from "../components/speakers"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax sx={{ display: ['block', 'block', 'none'] }} pages={6}>
      <Hero offset={0} />
      <Speakers offset={1} />
      <About offset={3} />
      <Contact offset={5} />
    </Parallax>
    <Parallax sx={{ display: ['none', 'none', 'block'] }} pages={5}>
      <Hero offset={0} />
      <Speakers offset={1} />
      <About offset={3} />
      <Contact offset={4} />
    </Parallax>
  </Layout>
)

export default Cara
