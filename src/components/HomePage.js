import Headers from"./Header"
import Contact from "./Contact";
import Footer from "./footer"
import About from "./about"
import Skills from "./skills"
import ProjectsComponent from "./ProjectsComponent";
import '../style/LoginForm.css'
import '../style/dashboard.css'
import "../style/header.css";
import "../style/style.css";
import "../style/responsive.css";
import "../style/skills.css";
function HomePage() {
  return (
    <div className="App">
        <Headers/>
        <About/>
        <Skills/>
      <ProjectsComponent />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default HomePage;
