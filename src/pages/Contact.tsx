import "./main.css"
import { useEffect } from "react"
import { updateMetadata } from "../metadata-function"
import { contactUrl } from "../core"

const Contact = () => {

    useEffect(() => updateMetadata("Contact", "This is contact page", "OG title contact page", "OG description contact page", contactUrl))

    return (
        <div className="main">Contact</div>
    )
}

export default Contact