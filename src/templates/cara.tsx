/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Speakers from "../components/speakers"
import About from "../components/about"
import Contact from "../components/contact"
import Schedule from "../components/schedule"

const Cara = () => (
  <Layout>
    <Parallax sx={{ display: ['block', 'block', 'none'] }} pages={8}>
      <Hero offset={0} />
      <Speakers offset={1} />
      <Schedule offset={4} />
      <About offset={5} />
      <Contact offset={7} />
    </Parallax>
    <Parallax sx={{ display: ['none', 'none', 'block'] }} pages={7}>
      <Hero offset={0} />
      <Speakers offset={1} />
      <Schedule offset={3.5} />
      <About offset={5} />
      <Contact offset={6} />
    </Parallax>
  </Layout>
)

export default Cara
