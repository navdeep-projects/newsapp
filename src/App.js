import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  state = {
    progress : 10,
    
  }
  //apiKey = "fba42a59edf14ee8b4e0bf2362a5de28";
  apiKey = process.env.REACT_APP_API_NEWS_KEY;

  setProgress = (progress)=> {
    this.setState({progress : progress})

  }
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            />
          <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress}  apiKey = {this.apiKey}  key="1" country="in" category="general"/>} />
              <Route exact path="/general" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="2" country="in" category="general"/>} />
              <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="3" country="in" category="business"/>} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="4" country="in" category="entertainment"/>} />
              <Route exact path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="5" country="in" category="health"/>} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="6" country="in" category="science"/>} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="7" country="in" category="sports"/>} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="8" country="in" category="technology"/>} />
          </Routes>
      </div>
    )
  }
}

