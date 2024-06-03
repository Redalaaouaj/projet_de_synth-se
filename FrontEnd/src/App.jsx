import { useState } from 'react'
import { AuthContext } from './authContext'
import RegisterPage from './auth/RegistrePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarListing from './components/CarListing';
import Reservation from './components/Reservation';
import LoginPage from './auth/LoginPage';

function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }} >
      <BrowserRouter>
        <Routes>
        <Route path="/admin" element={<AdminRedirect />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/' element={<CarListing/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
           <Route path="/login" element={<LoginPage />} />
          {/*<Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
          <Route path="*" element={<h1>not found</h1> } />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
function AdminRedirect() {
  window.location.href = "http://localhost:8000/admin/login";
}
export default App
