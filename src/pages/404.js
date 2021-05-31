import * as React from "react"
import { Helmet } from "react-helmet"
import { FaRegFrown, FaLongArrowAltLeft } from 'react-icons/fa'

import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <Helmet>
        <title>Trevor Meehl - Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <section className="text-gray-600 body-font">
        <div className="w-2/3 sm:w-1/4 mx-auto mt-24">
          <p className="mb-3 text-8xl"><FaRegFrown className="inline-block align-text-top"  /></p>
          <h1 className="mb-5 text-lg">Page not found</h1>
          <p>
          <Link to="/" className="text-indigo-700"><FaLongArrowAltLeft className="inline-block align-text-top"  /> Go home</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
