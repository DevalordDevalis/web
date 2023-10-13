import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { faCode, faLaptop, faGears, faCar, faTerminal} from '@fortawesome/free-solid-svg-icons';
import { Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container } from '@mui/material';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);

  }

  const handleIconClick = (socialMedia) => {
    alert(`You clicked on the icon ${socialMedia}`);

  };

  const services = [
    {
      icon: faTerminal,
      title: 'Key programming',
    },
    {
      icon: faCode,
      title: 'Key repair',
    },
    {
      icon: faLaptop,
      title: 'Car side diagnostics',
    },
    {
      icon: faGears,
      title: 'Installation of security systems',
    },
    {
      icon: faLaptop,
      title: 'Recovery of keys in case of complete loss',
    },
    {
      icon: faCar,
      title: 'Opening doors',
    },
  ];
  
  return (
    <div className="App">

      <div className="navbar">
      <div className="nav-links">
          <a href="#about">About me</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      <div className="social-icons">
        <a href="https://twitter.com/?lang=ru" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="сhttps://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      </div>

      <div className="basic">

      <div className="header">
      <div className="name-info">
        <p className='hello'>Hello...</p>
        <h1>I'm Vitaly</h1>
        <p>Intermediate undergraduate computer science student with good skills in working in OOP-like environments, calculations and data. A promising specialist in the field of working with microcontroller data and familiar with web operations development technologies. I am interested in gaining more in-depth knowledge in those areas that are in the areas that I study.</p>
      </div>
      <div className="myphoto">
          <img src="https://img.freepik.com/free-photo/portrait-of-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais" alt="Ваша фотография" />
        </div>
        </div>
        <Fade bottom>
      <section id="about" className="about-section">
      <div className="image-aboutme">
          <img src="https://kartinki.pics/uploads/posts/2022-03/1646153602_2-kartinkin-net-p-kartinki-ofisnie-2.jpg" alt="Изображение" />
        </div>

        <div className="text-aboutme">
        <h2>About me</h2>
        <Container>

  <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
    <TabList className="TabList">
      <Tab className="Tab">Interests</Tab>
      <Tab className="Tab">Education</Tab>
      <Tab className="Tab">Experience</Tab>
    </TabList>

    <TabPanel>
      <div className="content">
        <p>Many of my interests are related to computer games, including action games, strategy games and multinational online games. I love to read books in various genres, including science fiction, detective stories and non-fiction books. I am passionate about designing and building new things, including model cars and airplanes.</p>
      </div>
    </TabPanel>

    <TabPanel>
      <div className="content">
        <p>2020 - present, TSI Faculty OF Computer Sciences and Ttelecommunications</p>
        <p>2004 - 2016, Riga 15th secondary school</p>
      </div>
    </TabPanel>

    <TabPanel>
      <div className="content">
        <p>Car key programmers - Used to create, program and recover car keys and access keys. They use specialized tools and software to read and write information from keys and immobilizers. Key keeper-programmers must be familiar with various types of vehicles and their electronic systems, as well as have a technical education.</p>
      </div>
    </TabPanel>
  </Tabs>
</Container>
</div>
      </section>
      </Fade>
      <section id="services" className="myServices">
      <Fade bottom>
        <h2>My Offered Services</h2>
        <div className="servicesCont">
        <Grid container spacing={2}>
      {services.map((service, index) => (
        <Grid item xs={6} md={4} key={index}>

          <Button onClick={() => alert(`You have chosen the service: ${service.title}`)} style={{ width: '100%', padding: 0, color: 'black'}}>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <FontAwesomeIcon icon={service.icon} size="2x" />
              <Typography variant="h6">{service.title}</Typography>
              <Typography variant="body2">{service.description}</Typography>
            </div>
          </Button>
        </Grid>
      ))}
    </Grid>
</div>
</Fade>
      </section>
      </div>
      <footer className="footer">
      <div className="contactInf">
      <Fade bottom>
      <div className='contact'>
      <h3>Contact Information</h3>
        <ul>
          <li>vitalijs.valters@gmail.com</li>
          <li>+37128888888</li>
        </ul>
        </div>
        <div className='contact'>
        <h3>Newsletter</h3>

        <TextField
      label="Email"
      variant="outlined"
      fullWidth
      sx={{
        width: '350px',
        '& input': {
          color: 'white',
        },
        '& fieldset': {
          borderColor: 'white',
        },
        '& label': {
          color: 'white',
        },
      }}

      InputProps={{
        endAdornment: (
          <SendIcon color="primary" style={{ cursor: 'pointer' }} />
        ),}}/>
      </div>

      <div id="contact" className='contact'>
      <h3>Follow Me</h3>
      <div className="social-icons-footer">
      <FontAwesomeIcon icon={faTwitter} className="social-icon" onClick={() => handleIconClick('Twitter')} />
      <FontAwesomeIcon icon={faFacebook} className="social-icon" onClick={() => handleIconClick('Facebook')} />
      <FontAwesomeIcon icon={faInstagram} className="social-icon" onClick={() => handleIconClick('Instagram')} />
      <FontAwesomeIcon icon={faTelegram} className="social-icon" onClick={() => handleIconClick('Telegram')} />
    </div>
        </div> 
        </Fade>
        </div>
      </footer>
    </div>
  );
}


export default App;