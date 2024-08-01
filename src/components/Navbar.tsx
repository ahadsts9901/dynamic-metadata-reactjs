import { useNavigate } from "react-router-dom"
import "./main.css"

const Navbar = () => {

    const routes = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "Services", path: "/services" }
    ]

    const navigate = useNavigate()

    return (
        <div className="navbar">
            {
                routes.map((route: any, i: number) => (
                    <p onClick={() => navigate(route?.path)} key={i}>{route?.label}</p>
                ))
            }
        </div>
    )
}

export default Navbar