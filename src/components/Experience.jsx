import React from 'react';

const experiences = [
  {
    role: 'Python Development Intern',
    company: 'Slash Mark IT Solutions (OPC) Pvt Ltd',
    duration: 'Dec 2024 - Apr 2025',
    points: [],
  },
  {
    role: 'Cloud Engineer — AWS Projects (Self-Directed)',
    company: 'Edinburgh',
    duration: '2025 - Present',
    points: [
      'Built and deployed an EC2 + Nginx web server and a serverless REST API on AWS.',
      'Set up a GitHub Actions CI/CD pipeline deploying to AWS.',
      'Self-studying for AWS Cloud Practitioner (CLF-C02 in progress).',
    ],
  },
  {
    role: 'MSc Computing Student',
    company: 'Edinburgh Napier University',
    duration: 'In progress',
    points: [
      'Studying cloud computing and distributed systems.',
      'BTech from Parul University before the MSc.',
      'Certifications in Python, Java, SQL, and Git & GitHub (Google).',
    ],
  },
  {
    role: 'Volunteer',
    company: 'ENSA (Edinburgh Napier Students\' Association), Edinburgh Napier University',
    duration: '',
    points: [],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-r from-blue-purple to-queen-pink px-8 py-20 text-grape"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center mb-14">
          EXPERIENCE
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="bg-cream/60 border-2 border-grape rounded-xl p-6"
            >
              <div className={`flex flex-col md:flex-row md:justify-between md:items-start gap-2 ${exp.points.length > 0 ? "mb-4" : ""}`}>
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-lg font-medium">{exp.company}</p>
                </div>

                {exp.duration && (
                  <span className="font-semibold text-sm md:text-base">
                    {exp.duration}
                  </span>
                )}
              </div>

              {exp.points.length > 0 && (
              <ul className="space-y-2 text-base font-medium">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;