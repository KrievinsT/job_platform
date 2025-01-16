import React from 'react';
import './assets/App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Separator from './components/Separator/Separator';
import TrendingJobs from './components/TrendingJobs/TrendingJobs';
import Team from './components/Team/Team';
import Hire from './components/Hire/Hire';
import Footer from './components/Footer/Footer';
import JobsList from './components/JobsList/JobsList';
import TeamPage from './components/TeamPage/TeamPage';
import About from './components/About/About';
import ContactPage from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <Separator />
            <TrendingJobs />
            <Team />
            <Hire />
            <Footer />
          </>
        } />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;