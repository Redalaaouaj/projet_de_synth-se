import { useState } from 'react'
import { AuthContext } from './authContext'
import RegisterPage from './auth/RegistrePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarListing from './components/CarListing';
import Reservation from './components/Reservation';

function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }} >
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path='/home' element={<CarListing/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
          <Route path="*" element={<h1>not found</h1> } />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
