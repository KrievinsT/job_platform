import React from 'react';
import './assets/App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Separator from './components/Separator/Separator';
import TrendingJobs from './components/TrendingJobs/TrendingJobs';
import Team from './components/Team/Team';
import Hire from './components/Hire/Hire';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Separator />
      <TrendingJobs />
      <Team />
      <Hire />
      <Footer />
    </>
  );
}

export default App;