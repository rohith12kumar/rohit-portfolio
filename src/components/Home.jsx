import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const socialMediaLinks = [
  { href: 'https://www.linkedin.com/in/rohith12kumar/', icon: faLinkedin },
  { href: 'https://github.com/rohith12kumar', icon: faGithub },
  { href: 'https://rohithkumarmamindla.vercel.app/', icon: faGlobe },
  { href: 'mailto:rohithkumarmamindla12@gmail.com', icon: faEnvelope },
];

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-2xl mx-auto text-center bg-opacity-70">
        <p className="font-bold text-grape text-4xl">Hello, I'm</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight my-5 text-black font-dancing-script">Rohith Kumar Mamindla</h1>
        <p className="text-lg text-grape font-medium mb-5">Cloud Engineer | AWS | Linux | Python</p>
        <p className="text-base text-grape font-medium mb-7 px-4">Cloud Engineer based in Edinburgh, specialising in AWS, Linux and Python — building serverless &amp; EC2 projects. MSc Computing at Edinburgh Napier University, targeting Cloud Engineer / DevOps Engineer roles across Edinburgh and the UK.</p>
        <div className="flex space-x-4 justify-center">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grape hover:text-black"
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
