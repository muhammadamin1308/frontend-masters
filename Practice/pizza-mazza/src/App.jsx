import './assets/styles/app.css'
import logo from './assets/images/logo-2.png'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Order from './Order'
import Pizza from './Pizza'
import { Cart } from './Cart'

function App() {
  return (
    <StrictMode>
      <div className='main-cont'>
        <nav className='flex justify-center p-4 gap-x-3 border-b-1 border-gray-300'>
          <img className='w-12' src={logo} alt="" />
          <h1 className='text-3xl font-bold text-amber-400'>Mazza Pizza</h1>
        </nav>
        <Order />
        <div className='grid grid-cols-2'>
          <Pizza />
          <Cart />
        </div>
      </div>
    </StrictMode>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)