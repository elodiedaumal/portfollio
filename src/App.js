import Navbar from './Components/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
