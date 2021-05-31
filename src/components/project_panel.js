import * as React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import Link from "../components/link"
import FileImage from "../components/file_image"

const ProjectPanel = ({img, title, href, children}) => {
    return(
      <div className="border rounded-md border-gray-300 flex flex-row m-2 w-72">
        <FileImage src={img} alt="" className="m-2 mr-0 flex-shrink-0 project-image" />
        <div className="flex flex-col items-start text-left mx-3">
            <h4 className="text-lg mt-2 font-bold">{title}</h4>
            <p className="text-sm text-gray-400">{children}</p>
            <Link href={href} className="text-indigo-500 inline-flex items-center text-sm mt-2">Learn more <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-1" /></Link>
        </div>
      </div>
    )
}

export default ProjectPanel