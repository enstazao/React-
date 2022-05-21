import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
// import Signup from './components/Signup/Signup';
import Sidebar from './components/Sidebar/Sidebar';
import CreateEvent from './components/CreateEvent/CreateEvent';

function App() {
  return (
    <>
      <Router>
        <Route path='/create/event' element={<CreateEvent />} />
      </Router>
    </>
  );
}

export default App;
