import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";

import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Realisation from "./pages/Realisation"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Services" element={<Services></Services>}></Route>
          <Route path="/Realisation" element={<Realisation></Realisation>}></Route>
          <Route path="/Blog" element={<Blog></Blog>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
