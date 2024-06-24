import { useState } from 'react'
import './App.css'
import PostsList from './features/posts/PostsList'

function App() {

  return (
    <div className="app">
      <h2>React on Rails</h2>
      <PostsList />
    </div>
  )
}

export default App
