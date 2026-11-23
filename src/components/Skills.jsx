import React from "react";

const Skills = () => {
  const skillCategories = {
    "Cloud Platforms": ["AWS", "Amazon EC2", "AWS Lambda", "DynamoDB", "API Gateway", "IAM", "Security Groups", "S3", "VPC", "CloudWatch"],
    "DevOps & Tools": ["Git", "GitHub", "GitHub Actions", "CI/CD", "Docker", "Postman", "Vercel"],
    Languages: ["Python", "Java", "SQL", "Bash / Scripting", "JavaScript", "HTML", "CSS"],
    "Systems & Networking": ["Linux (CLI)", "Nginx", "SSH", "HTTP Protocols", "Networking Basics", "REST APIs"],
  };

  return (
    <section id="skills" className="min-h-screen px-8 py-20 text-grape">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center mb-10">SKILLS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-cream/60 border-2 border-grape rounded-xl p-6">
              <h3 className="text-2xl font-medium mb-5 font-archivo">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 border-2 border-grape rounded-full text-base font-semibold">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 font-medium">
          Currently learning: GitHub Actions (CI/CD), AWS IAM &amp; Security Best Practices,
          Infrastructure as Code, and Cloud Cost Optimisation. Preparing for AWS Cloud Practitioner (CLF-C02).
        </p>
      </div>
    </section>
  );
};
export default Skills;
