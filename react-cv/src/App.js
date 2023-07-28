import './App.css';
import {Routes,Route} from "react-router-dom";

import Blog from "./pages/pageBlog/Blog.jsx";
import Home from "./pages/pageHome/Home.jsx";
import Realisation from "./pages/pageReal/Realisation.jsx";
import Services from "./pages/pageServices/Services.jsx";
import Contact from "./pages/pageContact/Contact.jsx";
import Legal from "./pages/pageLegal/Legal.jsx";
import Github from './pages/pageGithub/Github';

import Header from './component/Header/Header.jsx';
import Footer from './component/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Realisation" element={<Realisation/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Legal" element={<Legal/>}></Route>
          <Route path="/Github" element={<Github/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
