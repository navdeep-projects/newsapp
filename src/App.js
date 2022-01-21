import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  name = 'fba42a59edf14ee8b4e0bf2362a5de28';
  render() {
    return (
      <div>
        <Navbar/>
          <Routes>
              <Route exact path="/" element={<News key="1" country="in" category="general"/>} />
              <Route exact path="/general" element={<News key="2" country="in" category="general"/>} />
              <Route exact path="/business" element={<News key="3" country="in" category="business"/>} />
              <Route exact path="/entertainment" element={<News key="4" country="in" category="entertainment"/>} />
              <Route exact path="/health" element={<News key="5" country="in" category="health"/>} />
              <Route exact path="/science" element={<News key="6" country="in" category="science"/>} />
              <Route exact path="/sports" element={<News key="7" country="in" category="sports"/>} />
              <Route exact path="/technology" element={<News key="8" country="in" category="technology"/>} />
          </Routes>
      </div>
    )
  }
}

