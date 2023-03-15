import Navbar from './Components/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Router>
  );
}

export default App;
