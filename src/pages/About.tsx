import "./main.css"
import { useEffect } from "react"
import { updateMetadata } from "../metadata-function"
import { aboutUrl } from "../core"

const About = () => {

    useEffect(() => updateMetadata("About", "This is about page", "OG title about page", "OG description about page", aboutUrl))

    return (
        <div className="main">About</div>
    )
}

export default About