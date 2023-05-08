import './App.css';
import Header from './components/nav/Header';
import { ApplicationViews } from './components/appViews/ApplicationViews';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <ApplicationViews/>
    </Router>
    </>
  );
}

export default App;
