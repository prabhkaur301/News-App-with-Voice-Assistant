import React from "react"
import ReactDom from "react-dom"
import { Route, Routes, BrowserRouter} from "react-router-dom"
import App from "./app"
import "./index.css"
import SavedArticles from "./pages/SavedArticles"



ReactDom.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            {/* <Route path="/saved" element={<SavedArticles />} /> */}
        </Routes>
    </BrowserRouter>
    , document.getElementById("root"))
