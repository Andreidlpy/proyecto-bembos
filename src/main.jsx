import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter } from "react-router-dom";
import 'react-modern-drawer/dist/index.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
