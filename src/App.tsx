import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {

  return (
    <>
      <NavigationBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App;