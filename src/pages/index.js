import * as React from "react"
import { Helmet } from "react-helmet"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { StaticImage } from "gatsby-plugin-image"

import JsonProfile from "../components/json_profile"
import ProjectPanel from "../components/project_panel"

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Trevor Meehl - Home</title>
        <meta name="description" content="Personal website for Trevor Meehl - Programmer, Gamer, Chef" />
        <link rel="canonical" href="https://trevor.work/" />
      </Helmet>
      <section className="text-gray-600 body-font">
        <div className="px-5 md:py-12 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10 sm:justify-center">
              <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 text-center sm:pr-4 sm:py-4">
                <div className="inline-flex items-center justify-center text-gray-400">
                  <StaticImage src="../images/portrait.jpg" alt="" className="w-24 h-24 rounded-full" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h1 className="font-medium title-font mt-4 text-gray-900 text-xl">Trevor Meehl</h1>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">I originally became interested in technology and (thus) computers when I was 10. Shortly after I began, I realised how much I enjoyed using them and today, over 10 years later, I still do.</p>
                </div>
                <div className="mt-3 space-x-2">
                  <a href="https://github.com/networkMe" aria-label="Github"><FaGithub className="inline-block align-text-top text-4xl" /></a>
                  <a href="https://www.linkedin.com/pub/trevor-meehl/48/9a4/701" aria-label="LinkedIn"><FaLinkedin className="inline-block align-text-top text-4xl" /></a>
                </div>
              </div>
              <div className="sm:px-4 sm:py-4 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed mb-2">I've used a multitude of different languages to create personal and business projects including:</p>
                <ul className="list-disc list-inside text-left ml-2 experience-list">
                  <li>HTML / CSS / JS / <a href="https://jquery.com/">jQuery</a></li>
                  <li>React.js / <a href="https://www.gatsbyjs.com/">GatsbyJS</a> (including this site!)</li>
                  <li>PHP (<a href="http://laravel.com/">Laravel</a>)</li>
                  <li>C# .NET</li>
                  <li>C / C++ / C++11</li>
                  <li>Java including <a href="https://developer.android.com/">Android</a></li>
                  <li>SQL / <a href="https://docs.microsoft.com/en-us/sql/t-sql/language-reference">T-SQL</a> / <a href="https://www.mongodb.org/">MongoDB</a></li>
                  <li><a href="https://nodejs.org/">Node.js</a> (notably related to REST API's utilizing <a href="http://expressjs.com/">Express.js</a>)</li>
                </ul>
                <p className="leading-relaxed mt-5 mb-2">In addition to programming, I also have experience in reverse engineering:</p>
                <ul className="list-disc list-inside text-left ml-2 experience-list">
                  <li>Native Code (<a href="https://en.wikipedia.org/wiki/X86_assembly_language">x86 ASM</a>)</li>
                  <li>Unpacking difficult DRM such as <a href="https://en.wikipedia.org/wiki/Arxan_Technologies">Arxan</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Common_Intermediate_Language">MSIL</a> Code (.NET / Mono)</li>
                  <li><a href="https://en.wikipedia.org/wiki/Java_bytecode">Java Bytecode</a></li>
                </ul>
              </div>
              <div className="hidden xl:block xl:border-l border-gray-200 pl-5">
                <JsonProfile />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="text-center border-t mt-4 pt-4">
          <h2 className="font-medium text-gray-900 text-xl mb-4">Projects</h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center">
            <ProjectPanel img="images/missinghud2.png" title="Missing HUD 2" href="https://github.com/networkMe/missinghud2">Gameplay overlay HUD for OpenGL game</ProjectPanel>
            <ProjectPanel img="images/sprout.png" title="Sproutapp" href="/sproutapp">Anonymous messaging mobile application</ProjectPanel>
            <ProjectPanel img="images/cstracer.png" title="CS Tracer" href="/cstracer">CS:GO Stat tracking &amp; analysis website</ProjectPanel>
            <ProjectPanel img="images/tgm.png" title="TGM Computers" href="https://www.tgmcomputers.com">IT business support and application development</ProjectPanel>
            <ProjectPanel img="images/coming_soon.png" title="Homegrown" href="#">Coming Soon</ProjectPanel>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage