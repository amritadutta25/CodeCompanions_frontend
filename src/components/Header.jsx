import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header flex">
            <h1>Code Companions</h1>
            
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}