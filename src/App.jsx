
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import CareerPage from './Components/CareerPage';
import AboutUsPage from './Components/About_us';
import EngineeringServices from './Components/EngineeringServices';
import StructuralSteel from './Components/StructuralSteel';
import Project from './Components/Project';
import ContactPage from './Components/Contact';


// Main App Component
const App = () => (
  <Router>
     <div >
       <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/career" element={<CareerPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/engineering-services" element={<EngineeringServices/>} />
          <Route path='/structural-steel' element={<StructuralSteel/>} />
          <Route path='/projects' element={<Project />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
     </div>
   </Router>
 );

// const App = () => (
//   <Router>
//     <div className="app">
//     <Header />
//     <main>
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//     </Routes>
//     </main>
//     </div>
//     <Footer />
//   </Router>
// );


export default App;