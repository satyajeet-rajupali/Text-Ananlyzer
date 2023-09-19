import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000000';
      showAlert("Dark mode enabled", "success");
      document.title = "Text Analyzer - Dark Mode";
      setTimeout(() => {
        document.title = "Text Analyzer - Home"
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "Text Analyzer - Light Mode";
      setTimeout(() => {
        document.title = "Text Analyzer - Home"
      }, 1500);
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <NavBar title="Text-Analyzer" about="About" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Analyze Text" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
