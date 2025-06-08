import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import DeliveryForm from './components/DeliveryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <DeliveryForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;