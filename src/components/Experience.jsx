import React from 'react';

const experiences = [
  {
    role: 'Python Development Intern',
    company: 'Slash Mark IT Solutions (OPC) Pvt Ltd',
    duration: 'Dec 2024 - Apr 2025',
    points: [
      'Worked as a Python Development Intern, building and practising Python programming on real project tasks.',
      'Strengthened software development fundamentals including clean code, debugging and problem-solving.',
      'Gained professional experience working to deadlines in a software company environment.',
    ],
  },
  {
    role: 'Cloud Engineer — AWS Projects (Self-Directed)',
    company: 'AWS · Edinburgh, UK',
    duration: '2025 - Present',
    points: [
      'Architected and deployed a production-style EC2 + Nginx web server with secure SSH and Security Groups.',
      'Built a fully serverless REST API with Lambda, API Gateway and DynamoDB, with least-privilege IAM roles.',
      'Completed structured AWS Cloud Practitioner self-study (EC2, S3, Lambda, IAM, VPC, CloudWatch) — CLF-C02 in progress.',
      'Built a CI/CD pipeline with GitHub Actions connected to AWS, using environment secrets and IAM.',
    ],
  },
  {
    role: 'MSc Computing Student',
    company: 'Edinburgh Napier University',
    duration: 'In Progress — Edinburgh, UK',
    points: [
      'Specialising in cloud computing, distributed systems and software engineering.',
      'BTech from Parul University prior to the MSc.',
      'Certifications: Python Programming, Java Programming Language, SQL Programming, and Git and GitHub (Google Career Certificates).',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-gradient-to-r from-blue-purple to-queen-pink px-8 py-20 text-grape">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center mb-14">EXPERIENCE & EDUCATION</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="bg-cream/60 border-2 border-grape rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-lg font-medium">{exp.company}</p>
                </div>
                <span className="font-semibold text-sm md:text-base">{exp.duration}</span>
              </div>
              <ul className="space-y-2 text-base font-medium">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3"><span>•</span><span>{point}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
