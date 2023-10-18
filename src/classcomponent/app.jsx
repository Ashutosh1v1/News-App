import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Footer from "./footer";

export default class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi",
      search:""

    }
  }
  changeLanguage=(language)=>{
    this.setState({language:language})
  }
  changeSearch=(search)=>{
    this.setState({search:search})
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch} />
          <Routes>
            <Route path="/" element={<Home search={this.state.search} language={this.state.language} q="All"/>} />
            <Route path="/politics" element={<Home search={this.state.search} language={this.state.language} q="Politics"/>} />
            <Route path="/crime" element={<Home search={this.state.search} language={this.state.language}q="Crime"/>} />
            <Route path="/education" element={<Home search={this.state.search}  language={this.state.language}q="Education"/>} />
            <Route path="technology" element={<Home search={this.state.search} language={this.state.language} q="Technology"/>} />
            <Route path="/science" element={<Home search={this.state.search} language={this.state.language} q="Science"/>} />
            <Route path="/sports" element={<Home search={this.state.search} language={this.state.language} q="Sports"/>} />
            <Route path="/cricket" element={<Home  search={this.state.search}language={this.state.language} q="Cricket"/>} />
            <Route path="/ipl" element={<Home search={this.state.search} language={this.state.language} q="IPL"/>} />
            <Route path="/entertainment" element={<Home search={this.state.search} language={this.state.language} q="Entertainment"/>} />
           
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
