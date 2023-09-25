import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  let finalTheme = 'light';
  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark')
      finalTheme = 'dark';
  }

  const [mode, setMode] = useState(finalTheme);

  const enableLightMode = () => {
    setMode('light');
    localStorage.setItem('theme', 'light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled", "success");
    document.title = "Text Analyzer - Light Mode";
    setTimeout(() => {
      document.title = "Text Analyzer - Home"
    }, 1500);
  }

  const enableDarkMode = () => {
    setMode('dark');
    localStorage.setItem('theme', 'dark');
    document.body.style.backgroundColor = '#000000';
    showAlert("Dark mode enabled", "success");
    document.title = "Text Analyzer - Dark Mode";
    setTimeout(() => {
      document.title = "Text Analyzer - Home"
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      enableDarkMode();
    } else {
      enableLightMode();
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

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      if (localTheme === 'dark') {
        enableDarkMode();
      } else {
        enableLightMode();
      }
    } else {
      enableLightMode();
    }
    // eslint-disable-next-line
  }, [mode]);

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
