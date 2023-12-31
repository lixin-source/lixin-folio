import { useState, useEffect } from 'react';
import './App.css'
import Type from "./components/Type";
import ListItem from "./components/ListItem";
import Nav from "./components/Nav";
import ProjectCard from './components/ProjectCard';
import MediaCard from './components/MediaCard';
import BackToTopButton from './components/TopButton';
import Loading from './components/Loading';
import Certificate from './components/Certificate';

// import imgs
import aboutimg from "./assets/imgs/aboutimg.png";
import awc from "./assets/imgs/awc.jpg";
import cp from "./assets/imgs/cp.jpg";
import dreamus from "./assets/imgs/dreamus.jpg";
import nydoe from "./assets/imgs/nydoe.jpg";
import bccc from "./assets/imgs/bccc.PNG";
import pfizer from "./assets/imgs/pfizer.jpg";
import ccb4a from "./assets/imgs/ccb4a.PNG";
import bc from "./assets/imgs/bc.jpg";
import ifem from "./assets/imgs/ifem.jpg";
import ms from "./assets/imgs/ms.jpg";
import nysylc from "./assets/imgs/nysylc.jpg";
import btt from "./assets/imgs/btt.jpg";
import dsc from "./assets/imgs/dsc.jpg";
import uwnyc from "./assets/imgs/uwnyc.jpg";
import proj1 from "./assets/imgs/proj1.PNG";
import proj3 from "./assets/imgs/proj3.PNG";
import proj2 from "./assets/imgs/proj2.PNG";
import media1 from "./assets/imgs/media/media1.jpeg";
import media2 from "./assets/imgs/media/media2.PNG";
import media3 from "./assets/imgs/media/media3.jpg";
import media4 from "./assets/imgs/media/media4.PNG";
import cert1 from "./assets/imgs/certs/samsungai.PNG";
import cert2 from "./assets/imgs/certs/cp1.PNG";
import cert3 from "./assets/imgs/certs/cp2.PNG";
import email from "./assets/LIGHT/mail.svg";
import github from "./assets/LIGHT/github.svg";
import linkedin from "./assets/LIGHT/linkedin.svg";



function App() {
  
  useEffect(() => {
    document.title = 'Xin Yi Li Portfolio';
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading with useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Once loading is done, set isLoading to false
    }, 1000); // Simulating a second loading process
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading /> // Show the loading component while isLoading is true
      ) : (
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
          <p>
      Hi! I&apos;m Xin Yi Li, a member of Radiate Consulting. The services I provide include{' '}
      <span style={{ color: '#5E79FF', fontStyle: 'italic' }}>
        front-end development, data analysis, project/event coordination, workshop facilitation, public speaking, social media management & content creation
      </span>
    .</p>
    
          <p> I&apos;m a <span style={{ color: '#5E79FF', fontStyle: 'italic' }}>first-generation college graduate</span> from CUNY Brooklyn College (Bachelor&apos;Computer Science & Minor in Sociology).
          I also graduated from CUNY Borough of Manhattan Community College (Associate&apos;s in Computer Science).
          </p>
            <p> I&apos;ve participated in tech opportunities with Microsoft Research, Pfizer, Brooklyn College&apos;s Cancer Center, & more. I also have a strong skillset in public speaking, content creation, social media management, & community organizing that I developed
            during my undergrad with NYC&apos;s Department of Education, CUNY, TheDream.US, and more!
          </p>
          <p> Reach out to me for inquiries <a href="#contact" className='aboutHere'>here</a>. </p>
          </div>
        </div>
        <img src={aboutimg} className='aboutimg'/>
      </div>
    </section>

    {/* CERTIFICATES */}
    <section id='certificates'>
        <div className='certificatesSection'>
        <h1 className='cert-title'>certificates</h1>
          <div className='cert-cards'>
            <Certificate img={cert1} title='Samsung Innovation Campus Artificial Intelligence Course' date='May 2023' link='https://www.credly.com/badges/5610d56c-7bf6-481d-bca4-353ae205db37/public_url'/>
            <Certificate img={cert3} title='CodePath Intermediate Web Development' date='May 2023'/>
            <Certificate img={cert2} title='CodePath Intermediate Software Engineering' date='Aug 2022'/>
          </div>
        </div>
    </section>


    {/* EXPERIENCES */}
    <section id="experiences">
      <div className='expSection'>
        <h1>experiences</h1>
        <div className='timeline'>

          <ListItem title='Event & Programs Intern @ Asiyah Women&apos; Center' content='
          Assisted in the planning, coordination, & execution of events, ensuring seamless logistics & a positive attendee experience.
          Collaborated with cross-functional teams to develop event concepts & themes.
          Researched potential event venues, suppliers, & entertainment options, presenting recommendations to the team to enhance event experiences
          ' img={awc} date='June 2023 - present' location='Remote'/>

          <ListItem title='Tech Fellow @ CodePath' content='
          Provide real-time guidance & support to students on coding labs, debugging, & best practices, resulting in improved comprehension and increased student engagement.
          Developed & executed strategic LinkedIn & email marketing campaigns to promote technical courses.
          Utilized social media platforms and online communities to engage with students, answer questions, and share resources, building a strong online presence and sense of community'
          img={cp} date='July 2023 - present' location='Remote'/>

          <ListItem title='Social Media Intern @ TheDream.US' content='
          Developed comprehensive social media campaigns boosting survey participation by 59%.
          Created engaging content for corresponding campaigns with Canva, Instagram Reels, Facebook, & TikTok resulting in an 83% survey participation rate, the highest among all cohorts.
          Collaborated with the marketing team to develop and execute innovative social media campaigns that encouraged user participation, further enhancing brand awareness and loyalty
          ' img={dreamus} date ='Mar 2023 - Jun 2023' location='Remote'/>

          <ListItem title='Community Ambassador @ NYC Department of Education' content='
          Maintained & initiated workshop management plans & several presentations that improved presentation creation & revisions.
          Facilitated & assisted in several workshops through Zoom about the experiences of immigrant students with a total of over 100+ attendees.
          Organized biweekly team meetings & agendas that created workshop presentations in a timely manner through Google Slides, Notion, Canva, Docs, & Sheets.
          Presented as a speaker at various events, delivering informative & engaging talks for community campaigns
          ' img={nydoe} date ='Nov 2021 - Jun 2023' location='Hybrid'/>

          <ListItem title='Data Analysis & Research Intern @ Brooklyn College Cancer Center' content='
          Conducted extensive research on HPV, cervical, & breast cancer to create multiple social media campaigns & cancer awareness and testing events for the center.
          Communicated research findings & data analysis results to team members and stakeholders through written reports and meetings.
          Collaborated with a professor to collect, clean, and analyze data using statistical techniques & tools like regression analysis & machine learning classification.
          Collaborated with colleagues to develop engaging activities and interactive displays to help spread information about HPV
          ' img={bccc} date ='Oct 2022 - May 2023' location='Brooklyn, NY'/>

          <ListItem title='Artificial Intelligence Learning Fellow @ Pfizer & Cornell Tech' content='
          Collaborated in a team of 3 to create a machine learning model with Python, NumPy, Scikit-Learn, & Pandas that analyzed department turnover.
          Organized weekly team meetings to discuss project scope, delegate tasks, and company pain points.
          Communicated data analysis & results to stakeholders
          ' img={pfizer} date ='Jun 2021 - Apr 2022' location='New York City, NY'/>

          <ListItem title='Bridge Coach @ College & Career Bridge4All' content='
          Created & managed weekly outreach to a caseload of 200+ students that confirmed & assisted with their post-secondary plans.
          Created & managed weekly social media posts for 200+ students that generated multiple responses using Canva & Instagram.
          Assisted 200+ students with different situations that helped them get to their post-secondary plan
          ' img={ccb4a} date ='May 2022 - Sep 2022' location='Remote'/>

          <ListItem title='Researcher @ Brooklyn College Sociology Department' content='
          Collaborated in a team of 3 to create a machine learning model with Python, NumPy, Scikit-Learn, & Pandas that analyzed department turnover.
          Organized weekly team meetings to discuss project scope, delegate tasks, and company pain points.
          Communicated data analysis & results to stakeholders
          ' img={bc} date ='Sep 2022 - May 2023' location='Brooklyn, NY'/>

          <ListItem title='Web Developer @ iFeminist' content='
          Collaborated in a team of 3 to publish weekly research articles through HTML/CSS/Git/GitHub.
          Debugged and resolved merge conflicts through communication between team members.
          Created a design to streamline adding new features to the website
          ' img={ifem} date ='Aug 2021 - Mar 2022' location='Remote'/>

          <ListItem title='Data Science Summer School Fellow @ Microsoft Research NYC' content='
          Selected for a cohort of 12 students out of 100+ applications to study and research data for 4 weeks.
          Replicated closely aligned data graphs based on published research and wrote bash scripts to obtain and clean data with R packages (dplyer, tidyverse, ggplot2).
          Created and evaluated extended research from the replicated draw data external conclusions
          ' img={ms} date ='June 2021' location='Remote'/>

          <ListItem title='UndocuAcademy Mentor @ New York State Youth Leadership Council' content='
          Selected for a team of 8 college mentors to help high school senior students guide through the college application process.
          Assisted 1 on 1 with a student for several months through scholarship applications, college options, and general questions about the college application process.
          Maintained contact & guided conversations with student during college for further assistance
          ' img={nysylc} date ='Nov 2020 - Sep 2021' location='Remote'/>

          <ListItem title='Volunteer Web Designer @ Break Through Tech' content='
          Developed & redesigned a WebNode website for an NPO through VolunteerMatch.
          Oversaw a 3-month project timeline to meet client needs whilst managing weekly meetings.
          Wrote substantial, in-depth design documentation for client reference
          ' img={btt} date ='Nov 2020 - Sep 2021' location='Remote'/>

          <ListItem title='BMCC Chapter President @ Developer Student Club' content='
          Managed 8+ workshops, two hack-a-thons, and led technical Git/GitHub and Google Cloud labs which increased BMCC Programming Club&apos;s membership by 140%.
          Created an organization system for a team of 4 club officers to manage event planning more seamlessly
          ' img={dsc} date ='Aujg 2020 - June 2021' location='Remote'/>

          <ListItem title='Researcher & LinkedIn Manager @ iFeminist' content='
          Conducted and authored 5 self-guided research articles on underrepresented women in history.
          Managed weekly posts for the iFeminist LinkedIn page with 100+ followerss.
          Planned & coordinated weekly article posts that increased LinkedIn following by 18% over the course of a month
          ' img={ifem} date ='Apr 2020 - Mar 2021' location='Remote'/>

          <ListItem title='Information Technology Intern @ United Way NYC' content='
          Executed a 3-week project proposal which increased corporate engagement and communication within all departments.
          Initiated the Microsoft Sharepoint intranet recommendation which centralized the work of all departments.
          Facilitated interviews with 3 employees and research documentation on 3 intranet applications
          ' img={uwnyc} date ='Jan 2020' location='New York City, NY'/>

        </div>
      </div>
    </section>

    {/* PROJECTS */}
    <section id='projects'>
      <h1>projects</h1>
      <div className='projectsSection'>
        <ProjectCard title='Cute Recipes' content='A frontend application with CRUD that allows users to input their own 
        recipes. I designed and created it by myself to help people share their recipes with each other.'
         img={proj1}
        techstack='React, Javascript, HTML/CSS, Supabase' github='https://github.com/lixin-source/codepathwork/tree/main/hobbyhub' demo='https://cute-recipes-finalproject.netlify.app/'/>
        <ProjectCard title='FinLand' content='Using usability tests & user research, this Figma prototype was created to address financial literacy. I worked in a team of two to create the prototype and conducted user research as well.' 
        img={proj2} techstack='Figma' demo='https://www.figma.com/proto/qrRI6cuDM4SQmPXWXwyfLb/Avocademy-team-library?node-id=411%3A21&scaling=scale-down&page-id=411%3A18&starting-point-node-id=411%3A21&show-proto-sidebar=1' />
        <ProjectCard title='Sanrio Flashcards' content='A frontend React quiz application for users to test their sanrio knowledge. This is a for-fun application that people can use to quiz themselves, share with friends, etc.' 
        img={proj3} techstack='React, Javascript, HTML/CSS' github='https://github.com/lixin-source/sanrio-quiz' demo='https://sanrio-quiz.netlify.app/'/>
      </div>
    </section>


    {/* MEDIA */}
    <section id='media'>
      <h1>media</h1>
      <p className='subtxt'><em>As a panelist & public speaker, I strive to continue advocacy outside of the classroom and within technology to raise awareness and share information</em></p>
      <div className='mediaCards'>
        <MediaCard img={media4} title='Panelist' date='Sep 2023' event='CUNY UISP & Macaulay Honors' descrip='Information session with a panel of undocu/immigrant students to speak about experiences in navigating undocu-friendly fellowships'/>

        <MediaCard link='https://www.linkedin.com/posts/activity-7057743198399393792-YTgy/?utm_source=share&utm_medium=member_desktop'
        img={media1} title='Panelist' date='Apr 2023' event='Guttman Community College' descrip='A panel discussion about career pathways for immigrant students'/>

        <MediaCard link='https://www.linkedin.com/posts/activity-7057743198399393792-YTgy/?utm_source=share&utm_medium=member_desktop'
        img={media2} title='Panelist' date='Apr 2023' event='CUNY IIE Conference' descrip='As a part of the conference, the panel discussed career opportunities and challenges for immigrant educators within higher education.'/>
      
      <MediaCard link='https://www.linkedin.com/posts/activity-7057743198399393792-YTgy/?utm_source=share&utm_medium=member_desktop'
        img={media3} title='Panelist' date='Feb 2023' event='TheDream.US Scholar Welcome' descrip='A speaker panel about the experiences of TheDream.US scholars, helping students answer questions'/>
      

      </div>
    </section>

    {/* CONTACT */}
    <section id='contact'>
      <div className='contactSection'>
        <h1> Feel Free to Connect With Me</h1> 
        <div className='contactList'>
        <a href='mailto:xinyi.li88@bcmail.cuny.edu' target='_blank' rel='noopener noreferrer'>
            <button><img src={email} alt='Email' /></button>
          </a>
          <a href='https://github.com/lixin-source' target='_blank' rel='noopener noreferrer'>
            <button><img src={github} alt='GitHub' /></button>
          </a>
          <a href='https://www.linkedin.com/in/x-li/' target='_blank' rel='noopener noreferrer'>
            <button><img src={linkedin} alt='LinkedIn' /></button>
          </a>
        </div>
        </div>
    </section>

    {/* FOOTER */}
    <section id='footer'>
      <div className='footerSection'>
        <h6>Copyright © 2023 Xin Yi Li</h6>
        <p>Inspired by Isabel V. Abonitalla & Soumyajit Behera </p>
      </div>
    </section>
    <BackToTopButton/>
    </div>
    )}
    </div>
  )
}

export default App
