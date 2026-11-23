import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-queen-pink p-8 text-grape flex justify-center items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">CONTACT</h2>
        <p className="text-lg font-semibold mb-5">| OPEN TO CLOUD ENGINEER / DEVOPS ROLES IN EDINBURGH &amp; THE UK |</p>
        <p className="mb-6">
          Open to Graduate Cloud Engineer, Junior DevOps, Cloud Support and IT Support roles
          across the UK — Edinburgh, London, Manchester, or remote. If you have an exciting
          opportunity in mind, want to collaborate on a cloud project, or simply wish to
          connect, let's start a conversation.
        </p>
        <p className="mb-2 font-semibold">rohithkumarmamindla12@gmail.com</p>
        <p className="mb-6 font-semibold">07352 702155 · Edinburgh, UK</p>
        <div className="flex items-center justify-center gap-5">
          <a href="mailto:rohithkumarmamindla12@gmail.com" aria-label="Email Rohith" className="hover:text-black"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
          <a href="tel:+447352702155" aria-label="Call Rohith" className="hover:text-black"><FontAwesomeIcon icon={faPhone} size="lg" /></a>
          <a href="https://www.linkedin.com/in/rohith12kumar/" target="_blank" rel="noopener noreferrer" aria-label="Rohith on LinkedIn" className="hover:text-black"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          <a href="https://github.com/rohith12kumar" target="_blank" rel="noopener noreferrer" aria-label="Rohith on GitHub" className="hover:text-black"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
