import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useState } from 'react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Añadir o eliminar el atributo data-bs-theme="dark" al elemento html
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.setAttribute('data-bs-theme', 'light');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'dark');
    }
  };

  return (
    <>
      <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <Projects />
      <Skills darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer />
    </>
  );
};

export default App;