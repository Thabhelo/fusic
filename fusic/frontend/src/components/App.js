import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                  <Route path='/join' element={<RoomJoinPage />}/>
                  <Route path='/create' element={<CreateRoomPage />}/>
                  <Route path='/' element={<p> This is the rendered Home Page </p>}/>
                </Routes>
            </Router>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);