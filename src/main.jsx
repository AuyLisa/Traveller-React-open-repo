import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home/Home'
import Trips from './pages/trips/Trips'
import TripDetail from './pages/trips/TripDetail'
import Hotels from './pages/hotels/Hotels'
import Avia from './pages/avia/Avia'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:id" element={<TripDetail />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/avia" element={<Avia />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
