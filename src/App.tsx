import React,{useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import './App.css';
// import AOS from 'aos'
// import 'aos/dist/aos.css';
import Home from './pages/home';
import ContactPage from './pages/ContactPage';
import EntrepreneurshipPage from './pages/EntrepreneurshipPage';
import CitizenshipApp from './pages/citizenship';
import PartnershipPage from './pages/partnership';
import ResourcesPage from './pages/Resources';
import Solutionpage from './pages/solution';
import AdminPanel from './pages/admin_page';
import About from './pages/About';
import Offerings from './pages/offering';
import CaseStudiesPage from './pages/case_studies';
import FlagshipInitiativesPage from './pages/flagship';
function App() {
  useEffect(() => {
  // AOS.init({
  //   duration: 1000, // Animation duration in ms
  //   once: false, // to make sure it stays continues default it is true 
  //  mirror: true,    // this is to make it again and again
  // });
}, []);
  return (
    <div className="App">
      <main className="">
        <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/entrepreneurship" element={< EntrepreneurshipPage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/citizenship" element={<CitizenshipApp />} />
          <Route path="/flagships" element={< FlagshipInitiativesPage/>} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/caseStudies" element={<CaseStudiesPage />} />
          <Route path="/partnership" element={<PartnershipPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/solutions" element={<Solutionpage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
        
      </main>
      
    </div>
  );
}

export default App;
