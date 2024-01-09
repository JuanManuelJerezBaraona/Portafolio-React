// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

// Components
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Form from './components/Form';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';

const App: React.FC = () => {
  // Obtener el estado inicial del darkMode desde localStorage o predeterminado como false
  const initialDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  // Actualizar el atributo data-bs-theme al cambiar el estado y almacenar en localStorage
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.setAttribute('data-bs-theme', 'dark');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'light');
    }

    // Almacenar el estado en localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header darkMode={darkMode} />
      <About />
      <Projects />
      <Skills darkMode={darkMode} />
      <Form />
      <Footer />
    </>
  );
};

export default App;