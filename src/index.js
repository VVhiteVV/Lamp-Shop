import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./consctruct/header/Header";
import App from './App';
import './globalStyle/GlobalStyle.css'
import {StrictMode} from "react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <Header/>
    <App />
  </StrictMode>
);

