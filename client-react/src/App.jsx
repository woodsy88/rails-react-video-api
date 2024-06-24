import { BrowserRouter as Router } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import PostsList from './features/posts/PostsList'
import NavBar from "./components/NavBar"
import AppRoutes from "./components/AppRoutes"

function App() {

  return (
    <Router>
      <div className="app">
        <h2>React on Rails</h2>
        <NavBar />
       <AppRoutes />
      </div>
    </Router>
  )
}

export default App
