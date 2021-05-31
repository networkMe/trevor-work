import * as React from "react"
import { Helmet } from "react-helmet";
import { FaLongArrowAltLeft } from 'react-icons/fa'

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const CSTracerPage = () => {
  return (
    <main>
      <Helmet>
        <title>Trevor Meehl - Project CS Tracer</title>
        <meta name="description" content="CS Tracer - tracked competitive CS:GO matches/statistics" />
        <link rel="canonical" href="https://trevor.work/cstracer" />
      </Helmet>
      <section className="text-gray-600 body-font">
        <div className="sm:w-2/3 md:py-12 mx-auto p-5">
          <nav className="mb-5">
            <Link to="/" className="text-indigo-700"><FaLongArrowAltLeft className="inline-block align-text-top" /> Back</Link>
          </nav>
          <div className="space-y-2">
            <p>In 2015, I started playing and spectating CS:GO competitive matches after deciding I'd take a break from Dota 2.</p>
            <p>The more I played and watched of CS:GO (including DreamHack), the more fun I was having and CS:GO soon became my primary competitive game. However, there was one thing that bugged me a lot when coming from Dota 2. There was no easy, existing method to track the competitive matches that I played in addition to monitoring my CS:GO rank.</p>
            <p>Having a background in Dota 2, where they have <span className="text-yellow-600">dotabuff.com</span> and <span className="text-yellow-600">yasp.co</span>, it was extremely disappointing that one of the best methods I had for CS:GO was to download the demo file of my match after every game and create some kind of personal excel document tracking my matches.</p>
            <p>So, I set out to create a website that would let me track my CS:GO competitive matches in an easy-to-use fashion.</p>
            <p>Thus, cstracer.com was born in late 2015.</p>
            <p className="text-red-500">Unfortunately, whilst the base engine worked very well, it became too costly to run and Valve's lack of an API to integrate with CS:GO made developing new features extremely difficult (or in some cases impossible). CS Tracer shut down in early 2017.</p>
          </div>
          <div className="space-y-5 mt-10">
            <StaticImage src="../images/cstracer/homepage.jpg" alt="" />
            <StaticImage src="../images/cstracer/player_overview.jpg" alt="" />
            <StaticImage src="../images/cstracer/player_records.jpg" alt="" />
            <StaticImage src="../images/cstracer/summary.jpg" alt="" />
            <StaticImage src="../images/cstracer/map_overview.jpg" alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default CSTracerPage