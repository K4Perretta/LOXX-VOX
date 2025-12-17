import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Creator from "./pages/Creator"
import Projects from "./pages/Projects"
import Planner from "./pages/Planner"
import Ebook from "./pages/Ebook"
import NotFound from "./pages/NotFound"
import "./global.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = document.getElementById("root")
if (root) createRoot(root).render(<App />)

export default App
