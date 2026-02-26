import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo">Hemanth Kancharla</div>
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')}><b>Home</b></a>
          <a onClick={() => scrollToSection('about')}><b>About</b></a>
          <a onClick={() => scrollToSection('skills')}><b>Skills</b></a>
          <a onClick={() => scrollToSection('projects')}><b>Projects</b></a>
          <a onClick={() => scrollToSection('education')}><b>Education</b></a>
          <a onClick={() => scrollToSection('certificates')}><b>Certificates</b></a>
          <a onClick={() => scrollToSection('contact')}><b>Contact</b></a>
        </nav>
      </header>
      {isMenuOpen && <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)}></div>}
    </>
  );
};

export default Header;
