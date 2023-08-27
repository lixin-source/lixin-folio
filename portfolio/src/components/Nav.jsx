import { useEffect } from 'react';
import "../App.css";

const Nav = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Calculate the offset based on the height of the navigation bar
      const navHeight = document.querySelector('nav').offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }

    // Cleanup event listeners
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div id='wholeNav'>
    <div className="titleHome"> 
        <h1>Xin Yi Li</h1>
    </div>
      {/* NAV */}
      <nav>
        {/* <a href="#home">Home</a> */}
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a href='#media'>Media</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Nav;
