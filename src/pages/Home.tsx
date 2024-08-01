import "./main.css"
import { useEffect } from "react"
import { updateMetadata } from "../metadata-function"
import { homeUrl } from "../core"

const Home = () => {

    useEffect(() => updateMetadata("Home", "This is homepage", "OG title homepage", "OG description homepage", homeUrl))

    return (
        <div className="main">Home</div>
    )
}

export default Home