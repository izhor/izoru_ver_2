
import './App.css';
import React from "react";
import MuiIcon from './componenents/mui-icon';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import Profile from './componenents/profile';
import Education from './componenents/education';
import QA from './componenents/q_a';
import Experience from './componenents/experience';
import Skills from './componenents/skills';
import Achievements from './componenents/achievements';
import Projects from './componenents/projects';
import swal2 from 'sweetalert2';
import Aos from 'aos';


function display_swal_alert(){
  swal2.fire({
    title:'Error Ocurred',
    text: 'No file found',
    icon: 'warning'
  })
}
function App() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <p className="navbar-item nav-logo">I Z O R U</p>
            <p
            onClick={() => {
              setisActive(!isActive);
              }}
            role="button" 
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </p>
          </div>
          <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start">
              <Link to="/" className="navbar-item"> <i className="fa-solid fa-user px-2"></i> Profile </Link>
              <Link to="/education" className="navbar-item"> <i className="fa-solid fa-graduation-cap px-2"></i> Education </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <p className="navbar-link"> <i className="fa-solid fa-file px-2"></i> Portofolio </p>
                <div className="navbar-dropdown">
                  <Link to="/experience" className="navbar-item"> <i className="fa-solid fa-briefcase px-1"></i> Experience </Link>
                  <Link to="/skills" className="navbar-item"> <i className="fa-solid fa-screwdriver-wrench px-1"></i> Skills </Link>
                  <Link to="/achievements" className="navbar-item"> <i className="fa-solid fa-medal px-1"></i> Achievements </Link>
                  <Link to="/projects" className="navbar-item"> <i className="fa-solid fa-globe px-1"></i> Projects </Link>
                </div>
              </div>
              <Link to="/qna" className="navbar-item"> <i className="fa-solid fa-circle-question px-2"></i> Q&A </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-link" onClick={()=>{
                    display_swal_alert();
                  }}>
                    <i className="fa-solid fa-download mr-2"></i> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section>
          <div style={{"margin-top":'100px',"margin-bottom":'50px'}}>
              <Routes>
                <Route path="/" exact element={<Profile/>} />
                <Route path="/education" exact element={<Education/>}/>
                <Route path="/qna" exact element={<QA/>} />
                <Route path="/experience" exact element={<Experience/>}/>
                <Route path="/skills" exact element={<Skills/>}/>
                <Route path="/achievements" exact element={<Achievements/>}/>
                <Route path="/projects" exact element={<Projects/>}/>
              </Routes>
          </div>
        </section>
      </BrowserRouter>
              
      <footer class="footer has-background-white">
        <div class="content has-text-centered">
          <p>Made with</p>
              <div className='content is-vcentered'>
                <MuiIcon/>
              </div>
          <p>By Muhammad Alif Zhorif Arachdin</p>
        </div>
      </footer>
    </div>
  );
}


export default App;


