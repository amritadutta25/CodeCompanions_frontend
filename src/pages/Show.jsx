import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aMeeting = useLoaderData()
    
    const id = aMeeting?.url.split("/")[4]
     
    return (
        <div>
            <h1>Show</h1>
        </div>
    )
}