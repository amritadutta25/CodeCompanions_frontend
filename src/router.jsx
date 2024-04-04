import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
// import { indexLoader, showLoader } from "./loaders"
// import {createAction, updateAction, deleteAction} from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path='' element={<Index/>} />
            <Route path='sessions/:id' element={<Show/>} />
            <Route path="sessions/create" />
            <Route path="sessions/update/:id" />
            <Route path="sessions/delete/:id" />
        </Route>
    </>
))

export default router