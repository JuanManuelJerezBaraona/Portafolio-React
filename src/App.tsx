import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

const App: React.FC = () => {

  return (
    <>
      <NavigationBar />
      <Header />
      <About />
      <Skills />
    </>
  )
}

export default App;