import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
// import About from './components/About.js'

const App = () => {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000000';
    } else  {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <NavBar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
        <TextForm heading="Enter your text to analyze" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
