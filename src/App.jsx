
import React from 'react'
import { Header } from './components/Header/Header'

import './App.css';
import { Home } from './views/Home/Home';


export const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}
