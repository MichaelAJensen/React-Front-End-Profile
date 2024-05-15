import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
root.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>)

