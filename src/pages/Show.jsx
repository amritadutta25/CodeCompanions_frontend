import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aMeeting = useLoaderData()
    
    const id = aMeeting?.url.split("/")[4]
     
    return (
        <div>
            <h1>{aMeeting['title']}</h1>
            <h2>{aMeeting['description']}</h2>

            
            <div className="session-show-content">
                <div >
                    <h2>Technology:</h2>
                    <p>{aMeeting['technology']}</p>
                </div>
                <div >
                    <h2>Date:</h2>
                    <p>{aMeeting['date']}</p>
                    <h2>Time:</h2>
                    <p>{aMeeting['time']}</p>
                </div>
                <div>
                    <h2>Status:</h2>
                    <p>{aMeeting['status']}</p>
                </div>
            </div>


            <div>
                {/* Update form */}
                {/* <Form action={`/update/${id}/`} method="POST">
                    <label htmlFor="name">
                        Rename you Turtle
                        <input type="text" id="name" name="name" defaultValue={aPet.name}/>
                    </label>
                    
                    <label htmlFor="age">
                        Did they have a birthday?
                        <input type="number" id="age" name="age" defaultValue={aPet.age}/>
                    </label>
                    <button style={{"backgroundColor": "blue"}}>Update our Turtle</button>
                </Form> */}

                {/* Delete Form */}
                <Form action={`/sessions/delete/${id}/`} method="post">
                    <button style={{"backgroundColor": "red"}}>Delete Session</button>
                </Form>
            </div>

            <Link to="/">
                <button>Go Back</button>
            </Link>


        </div>
    )
}