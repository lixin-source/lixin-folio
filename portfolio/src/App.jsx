// import { useEffect } from 'react';
import './App.css'
import Type from "./components/Type";
import ListItem from "./components/ListItem"
import Nav from "./components/Nav"

function App() {
  
  return (
    <div>
    {/* NAV */}
      <Nav />
    {/* HOME */}
    <section id="home">
      <Type/>
    </section>

    {/* ABOUT */}
    <section id="about">
      <div className='aboutSection'>
        <div className='aboutLeft'>
          <h1>about</h1>
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
        </div>
        <img src='src/imgs/aboutimg.png' className='aboutimg'/>
      </div>
    </section>

    <section id="experiences">
      <ListItem title='Event & Programs Intern' content='Conducted tests. Added info.'/>

    </section>
    </div>
  )
}

export default App
