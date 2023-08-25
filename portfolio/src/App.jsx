import { useEffect } from 'react';
import './App.css'
import Type from "./components/Type";
import ListItem from "./components/ListItem"

function App() {
  
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
    <div>
    {/* NAV */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

    {/* HOME */}
    <section id="home">
      <Type/>
    </section>

    {/* ABOUT */}
    <section id="about">
      <div className='aboutText'>
      <p> Hi! I&apos;m Xin Yi Li, a first-generation college graduate from Brooklyn College in May 2023 (Computer Science & Sociology).
        I&apos;ve participated in tech opportunities with Microsoft Research, Pfizer, Brooklyn College&apos;s Cancer Center, and more!
      </p>
      <p> I also have a strong skillset in public speaking, content creation, social media management, and community organizing that I developed
        during my undergrad with NYC&apos;s Department of Education, CUNY, TheDream.US, and more!
      </p>
      <p>
        The main programming languages I use are Python & Javascript.
      </p>
      <p> I&apos;m open to opportunities in frontend development, data science/analysis, UX research, community organizing, and public speaking. Feel free to reach out!</p>
      </div>
      <img src='src/imgs/aboutimg.png' className='aboutimg'/>
    </section>

    <section id="experiences">
      <ListItem title='Event & Programs Intern' content='Test'/>

    </section>
    </div>
  )
}

export default App
