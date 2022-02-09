import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router,Routes, Route, Link, useParams} from "react-router-dom";
import './styles/index.scss'
import reportWebVitals from './reportWebVitals';
import AboutPage from "pages/AboutPage/AboutPage"
import ContactPage from "pages/ContactPage/ContactPage"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

ReactDOM.render(
  <Router>
    <Routes >
      <Route path="/" element={<AboutPage />}>
        
      </Route>
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />     
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
