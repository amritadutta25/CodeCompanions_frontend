import { Link } from "react-router-dom"

export default function Meeting({ meeting }) {

    const id = meeting.url.split('/')[4]

    return (
        <div>
            <h1>meeting {meeting}</h1>
        </div>
    )
}