import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/ShowList/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import {
  BrowserRouter,
  Route, 
  Routes, 
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} exact></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
