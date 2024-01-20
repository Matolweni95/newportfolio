import './App.css';
import Home from './page/Home';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
       <Home />
    </Router>
  );
}

export default App;
