import React from 'react';
import './assets/App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Separator from './components/Separator/Separator';
import TrendingJobs from './components/TrendingJobs/TrendingJobs';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Separator />
      <TrendingJobs />
    </>
  );
}

export default App;