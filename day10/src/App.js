
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Register from './Register';
import Home from './layout/Home';
import Jobs from './layout/Jobs';
import Contact from './layout/Contact';
import Services from './layout/Services';
import About from './layout/About';
import Dashboard from './layout/Dashboard';
import Joblisting from './layout/Joblisting';
import FAQ from './layout/Faq';
import TermsAndConditions from './layout/Terms';
import PrivacyPolicy from './layout/Privacy';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/loginbtn" element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      <Route path="/Jobs" element={<Jobs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Joblisting' element={<Joblisting/>}/>
      <Route path='/Faq' element={<FAQ/>}/>
      <Route path='/Terms' element={<TermsAndConditions/>}/>
      <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
      


     

      </Routes>
     
    
    </BrowserRouter>
  </div>
  );
}

export default App;