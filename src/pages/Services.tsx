import "./main.css"
import { useEffect } from "react"
import { updateMetadata } from "../metadata-function"
import { servicesUrl } from "../core"

const Services = () => {

    useEffect(() => updateMetadata("Services", "This is services page", "OG title services page", "OG description services page", servicesUrl))

    return (
        <div className="main">Services</div>
    )
}

export default Services