import { useState } from 'react'
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="box">
      <Header />
      <Card />
      <Footer />
    </div>
  )
}

export default App
