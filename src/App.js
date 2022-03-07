import './App.css';
import Work from "./components/Work";
import About from "./components/About";
import Home from './components/Home';
import NavBar from './components/NavBar';
import {Route, Routes , BrowserRouter as Router} from "react-router-dom"
import NotFound from './components/NotFound';

function App() {
  const socialLinks = {
    github : "https://github.com/KyiThantSin",
    email : "Kyithantsin4321@gmail.com",
    edumail : "kyithantsin@mtu.edu.mm",
    Linkedin : "https://www.linkedin.com/in/kyi-thant-sin-7a335a1b7",
    Instagram : "https://www.instagram.com/kyi04_",
    phNo : "+959441040568"
}
  return (
    <Router>
      <div className="App">
      
        <NavBar />
        <br />
        <Routes>
          <Route exact path="/" element={<Home socialLinks={socialLinks}/>} />
          <Route exact path="/work" element={<Work socialLinks={socialLinks} />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
