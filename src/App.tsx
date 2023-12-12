import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import About from './components/About';

const App: React.FC = () => {

  return (
    <>
      <NavigationBar />
      <Header />
      <About />
    </>
  )
}

export default App;