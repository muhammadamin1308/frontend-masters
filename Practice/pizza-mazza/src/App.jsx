import './assets/styles/app.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <StrictMode>
      <h1>Hello World!</h1>
    </StrictMode>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)