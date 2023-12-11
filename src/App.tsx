import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';

const App: React.FC = () => {

  return (
    <>
      <NavigationBar />
      <Header />
    </>
  )
}

export default App;