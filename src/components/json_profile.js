import * as React from "react"

import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/vs.css'

hljs.registerLanguage('json', json)

const json_profile_string = 
`{
  "full_name": "Trevor Meehl",
  "email": "me@trevor.work",
  "gender": "male",
  "state": "South Australia",
  "country": "Australia",
  "dominant-hand": "right",
  "gamertag": "Superstar655",
  "hobbies": [
    "programming",
    "reverse-engineering",
    "cooking",
    "e-sports",
    "fishing"
  ],
  "pets": [
    {
      "type": "cat",
      "name": "Clancy"
    }
  ]
}`

class JsonProfile extends React.PureComponent {
  constructor() {
    super()
    this.codeNode = React.createRef();
  }

  componentDidMount() {
    hljs.highlightElement(this.codeNode.current)
  }

  render() {
    return(
      <section>
        <pre>
          <code ref={this.codeNode}>
            {json_profile_string}
          </code>
        </pre>
      </section>
    )
  }
}

export default JsonProfile