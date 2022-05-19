import img from "./404img.jpg"
import './404.css'
import { Link } from "react-router-dom"
export default function Dashboard() {
    return(
        <div>
            <div className="wrapper-404">
                <h1>404 Error</h1>
                <h2>This page does not exist</h2>
                <Link to={"/form"}>
                    <h3>Return back to home</h3>
                </Link>
            </div>
            {/* <img src={img} className="bg-img"/> */}
        </div>
    )
}