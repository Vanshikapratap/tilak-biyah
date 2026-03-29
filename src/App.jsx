import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useData } from './context/DataContext'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Onboarding from './components/Onboarding'
import Services from './components/Services'
import Gardens from './components/Gardens'
import Membership from './components/Membership'
import OnboardingListing from './components/OnboardingListing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminDashboard from './components/AdminDashboard'
import AdminLogin from './components/AdminLogin'
import AdminLink from './components/AdminLink'
import CustomCursor from './components/CustomCursor'

// Customer View
const HomePage = () => {
  const [selectedGarden, setSelectedGarden] = useState(null)
  return (
    <>
      <Header />
      <Hero />
      <Onboarding />
      <Services />
      <Gardens selectedGarden={selectedGarden} setSelectedGarden={setSelectedGarden} />
      <Membership />
      <OnboardingListing />
      <Contact selectedGarden={selectedGarden} />
      <Footer />
      <AdminLink />
    </>
  )
}

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useData();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
