import { Link } from "react-router-dom"

export default function Meeting({ meeting }) {

    const id = meeting.url.split('/')[4]

    return (
        <div>
            <Link to={`/sessions/${id}`}>
                <h1>{meeting.title}</h1>
            </Link>
        </div>
    )
}