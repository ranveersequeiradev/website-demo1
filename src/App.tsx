import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Layout/Header'
import { Footer } from './components/Layout/Footer'
import { Home } from './pages/Home'
import { ContactUsPage } from './pages/ContactUs'
import { Products } from './pages/Products'
import { Services } from './pages/Services'
import { Login } from './pages/Login'
import { DevAdmin } from './pages/DevAdmin'
import IndustryDetail from './pages/industry/index';
import ServiceDetailPage from './pages/services/index';
import { SiteFooter } from './components/site-footer'
import Teams from './pages/Teams';

function App() {
  return (
    <Router>
      <div className="font-sans bg-white w-full ">
        <Routes>
          {/* Dev Admin Routes - No Header/Footer */}
          <Route path="/dev-admin/login" element={<Login />} />
          <Route path="/dev-admin" element={<DevAdmin />} />

          {/* Public Routes - With Header/Footer */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <SiteFooter />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <ContactUsPage />
              <SiteFooter />
            </>
          } />
          <Route path="/products" element={
            <>
              <Header />
              <Products />
              <SiteFooter />
            </>
          } />
          <Route path="/products/:id" element={
            <>
              <Header />
              <IndustryDetail />
              <SiteFooter />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header />
              <Services />
              <SiteFooter />
            </>
          } />
          <Route path="/services/:id" element={
            <>
              <Header />
              <ServiceDetailPage />
              <SiteFooter />
            </>
          } />
          <Route path="/about/team" element={
            <>
              <Header />
              <Teams />
              <SiteFooter />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
