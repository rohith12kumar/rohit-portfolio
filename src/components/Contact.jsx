import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-queen-pink p-8 text-grape flex justify-center items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">CONTACT</h2>
        <p className="text-lg font-semibold mb-5">| I AM OPEN TO WORK AND NETWORK |</p>
        <p className="mb-6">
          Open to Cloud Engineer / DevOps roles in Edinburgh &amp; the UK — Graduate Cloud Engineer, Junior DevOps, Cloud Support and IT Support, Edinburgh / London / Manchester / remote.
        </p>
        <div className="flex items-center justify-center gap-5 mb-6">
          <a href="mailto:rohithkumarmamindla12@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className='hover:text-black'/>
          </a>
          <a href="tel:+447352702155" aria-label="Phone">
            <FontAwesomeIcon icon={faPhone} size="lg" className='hover:text-black'/>
          </a>
          <a href="https://www.linkedin.com/in/rohith12kumar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className='hover:text-black'/>
          </a>
          <a href="https://github.com/rohith12kumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="lg" className='hover:text-black'/>
          </a>
        </div>
        <p className="font-medium">rohithkumarmamindla12@gmail.com</p>
        <p className="font-medium">07352 702155</p>
        <p className="font-medium">
          <FontAwesomeIcon icon={faLocationDot} className="mr-2" />Edinburgh, UK
        </p>
      </div>
    </section>
  );
}

export default Contact;