import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App main">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element="/cart" />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
