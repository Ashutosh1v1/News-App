import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Footer from "./footer";

export default function App() {

  let [language, setLanguage] = useState('hi')
  let [search, setSearch] = useState('')

  function changeLanguage(language) {
    setLanguage(language)
  }
  function changeSearch(search) {
    setSearch(search)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} language={language} q="All" />} />
          <Route path="/politics" element={<Home search={search} language={language} q="Politics" />} />
          <Route path="/crime" element={<Home search={search} language={language} q="Crime" />} />
          <Route path="/education" element={<Home search={search} language={language} q="Education" />} />
          <Route path="technology" element={<Home search={search} language={language} q="Technology" />} />
          <Route path="/science" element={<Home search={search} language={language} q="Science" />} />
          <Route path="/sports" element={<Home search={search} language={language} q="Sports" />} />
          <Route path="/cricket" element={<Home search={search} language={language} q="Cricket" />} />
          <Route path="/ipl" element={<Home search={search} language={language} q="IPL" />} />
          <Route path="/entertainment" element={<Home search={search} language={language} q="Entertainment" />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

