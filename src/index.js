import React from 'react';
import './index.css';
import Carousel from './Carousel';
import ReactDOM,{ render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import reportWebVitals from './reportWebVitals';
// import Carousel from './carousel.js';

ReactDOM.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
render( document.getElementById("root"));
