import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App"
import {BrowserRouter as Router } from "react-router-dom";

const rootNode=document.getElementById("root");
const jsx=  <div>
                <App/>
            </div>;
ReactDOM.render(<Router><App/></Router>,rootNode);