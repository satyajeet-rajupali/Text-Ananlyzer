import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
// import About from './components/About.js'

const App = () => {
  return (
    <>
      <NavBar title="TextUtils" about="About"/>
      <div className='container my-3'>
        <TextForm heading="Enter your text to analyze"/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
