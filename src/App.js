import './App.css';
import Header from './components/nav/Header';
import { ApplicationViews } from './components/appViews/ApplicationViews';
import { BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './components/homePage/HomePage';

function App() {
  return (
    <>
    
    <Router>
      <HomePage/>
      <Header/>
      <ApplicationViews/>
    </Router>
    </>
  );
}

export default App;
