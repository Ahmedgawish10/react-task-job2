import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
function App() {
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(1); 
    }, 2000); 
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-screen">
       
          <Loading/>
        </div>
      ) : (
        <>
          <Header />
          <Hero className="mt-[84px]" />
          <Skills />
          <About />
          <Portfolio />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
