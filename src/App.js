import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setalert] = useState(null);

  const showAlert=(message)=>{
    setalert({
      msg: message,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='white';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='rgb(58,58,58)';

    }
  }
  return (
    <>
    <HashRouter>
    {/* Navbar */}
    <Navbar mode={mode} toggleMode={toggleMode}/>
 
    {/* Alert componenet */}
    <Alert alert={alert}/>

    <Routes>
            {/* <About/> */}
          <Route path="/about" element={<About/>}/>

            {/* Page section  */}
          <Route index element={<Textform mode={mode} showAlert={showAlert}/>}/>

    </Routes>

    </HashRouter>
    </>
  );
}

export default App;
