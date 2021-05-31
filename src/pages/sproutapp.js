import * as React from "react"
import { Helmet } from "react-helmet";
import { FaLongArrowAltLeft } from 'react-icons/fa'

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const SproutappPage = () => {
  return (
    <main>
      <Helmet>
        <title>Trevor Meehl - Project Sproutapp</title>
        <meta name="description" content="Sproutapp - anonymous message mobile application" />
        <link rel="canonical" href="https://trevor.work/sproutapp" />
      </Helmet>
      <section className="text-gray-600 body-font">
        <div className="sm:w-2/3 md:py-12 mx-auto p-5">
          <nav className="mb-5">
            <Link to="/" className="text-indigo-700"><FaLongArrowAltLeft className="inline-block align-text-top" /> Back</Link>
          </nav>
          <div className="space-y-2">
            <p>Sproutapp was a secure mobile platform that used its artifical intelligence engine to allow users to send anonymous messages to people they know, which is only received if it achieves a certain positive threshold.</p>
            <p>It allowed people without the application to recieve the anonymous message as an SMS, prompting them to install the application and reply or send their own anonymous message.</p>
            <p className="text-red-500">Unfortunately, whilst the app worked well, introducing users onto the application was difficult. In addition, the AI behind analyzing the "quality" of the messages was a beta implementation that had teething problems, stunting the initial growth of the application.</p>
          </div>
          <div className="mt-10 mx-auto flex flex-row flex-wrap items-baseline gap-4">
            <StaticImage src="../images/sproutapp/message_list.png" alt="" className="max-w-sm" />
            <StaticImage src="../images/sproutapp/message.png" alt="" className="max-w-sm" />
            <StaticImage src="../images/sproutapp/community.png" alt="" className="max-w-sm" />
            <StaticImage src="../images/sproutapp/compose.png" alt="" className="max-w-sm" />
            <StaticImage src="../images/sproutapp/compose_verified.png" alt="" className="max-w-sm" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default SproutappPage