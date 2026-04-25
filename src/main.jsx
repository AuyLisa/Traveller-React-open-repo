import { StrictMode } from 'react'
import { UserProvider } from '@context/UserContext';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from '@pages/home/Home'
import Trips from '@pages/trips/Trips'
import TripDetail from '@pages/trips/TripDetail'
import Hotels from '@pages/hotels/Hotels'
import Avia from '@pages/avia/Avia'
import Cart from '@pages/cart/Cart'
import Checkout from '@pages/checkout/Checkout'
import Registration from '@pages/registration/Registration'
import Login from '@pages/login/Login'
import Profile from '@pages/profile/Profile';
import PersonalData from '@pages/profile/PersonalData';
import Favorites from '@pages/profile/Favorites';
import History from '@pages/profile/History';
import About from '@pages/about/About';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trips/:id" element={<TripDetail />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/avia" element={<Avia />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />


            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/PersonalData" element={<PersonalData />} />
            <Route path="/profile/Favorites" element={<Favorites />} />
            <Route path="/profile/History" element={<History />} />
        
          </Routes>
        </BrowserRouter>
    
    </UserProvider>
  </StrictMode>,
)
