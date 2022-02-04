import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './dashboard/Dashboard'
import Landing from './pages/Landing'
import Otp from './pages/Otp'
import ResetPasswordPage from './pages/ResetPass'
import ResetMailPage from './pages/ResetMail'
import VerifyTokenPage from './pages/VerifyToken'
import AdminLoginPage from './pages/AdminLogin'

import './styles/style.css'
import About from './pages/About'
import Plans from './pages/Plans'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import PrivacyAndPolicy from './pages/PrivacyAndPolicy'
import TermsAndCondition from './pages/TermsAndCondition'

const App = () => {
  return (
      <>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/about" element={ <About /> } />
            <Route path="/plans" element={ <Plans /> } />
            <Route path="/blogs" element={ <Blogs /> } />
            <Route path="/blog/:id" element={ <BlogDetail /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/privacy_and_policy" element={ <PrivacyAndPolicy /> } />
            <Route path="/terms_and_condition" element={ <TermsAndCondition /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp-verification" element={<Otp />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/reset-mail" element={<ResetMailPage />} />
            <Route path="/verify-token" element={<VerifyTokenPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />

          </Routes>
          <Dashboard />
      </>
  )
}

export default App

