import { useState } from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'
import './App.css'

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Contact />
      <Chatbot />
    </Layout>
  )
}

export default App
