import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const socialMediaLinks = [
  { href: 'https://www.linkedin.com/in/rohith12kumar/', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/rohith12kumar', icon: faGithub, label: 'GitHub' },
  { href: 'https://rohithkumarmamindla.vercel.app/', icon: faGlobe, label: 'Portfolio website' },
  { href: 'mailto:rohithkumarmamindla12@gmail.com', icon: faEnvelope, label: 'Email' },
];

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center px-6">
      <div className="max-w-3xl mx-auto text-center bg-opacity-70">
        <p className="font-bold text-grape text-4xl">Hello, I'm</p>
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight my-5 text-black font-dancing-script">Rohith Kumar Mamindla</h1>
        <p className="text-lg text-grape font-medium mb-4 capitalize">CLOUD ENGINEER | AWS | LINUX | PYTHON</p>
        <p className="text-base text-grape font-medium mb-7 max-w-2xl mx-auto">
          Cloud Engineer based in Edinburgh, specialising in AWS, Linux and Python — building
          serverless &amp; EC2 projects. MSc Computing at Edinburgh Napier University, targeting
          Cloud Engineer / DevOps Engineer roles across Edinburgh and the UK.
        </p>
        <div className="flex space-x-4 justify-center">
          {socialMediaLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-grape hover:text-black">
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Home;
