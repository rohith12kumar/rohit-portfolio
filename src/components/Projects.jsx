import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "AWS EC2 Nginx Web Server",
      skills: "EC2 | Nginx | Linux | SSH | Security Groups",
      about:
        "Nginx web server deployed on an AWS EC2 instance, accessed over SSH and secured with Security Groups.",
      sourceLink: "https://github.com/rohith12kumar/aws-ec2-nginx-web-server",
    },
    {
      title: "Serverless REST API — Lambda + DynamoDB",
      skills: "Lambda | API Gateway | DynamoDB | IAM | Python | Postman",
      about:
        "Serverless REST API built on AWS Lambda, API Gateway and DynamoDB, tested with Postman.",
      learning:
        "Sub-50ms cold start and O(1) DynamoDB lookups.",
      learningLabel: "Highlights",
      sourceLink: "https://github.com/rohith12kumar/AWS-Serverless-User-API",
    },
    {
      title: "CI/CD Pipeline — GitHub Actions & AWS",
      skills: "GitHub Actions | AWS IAM | CI/CD",
      about:
        "Automated CI/CD pipeline using GitHub Actions to deploy to AWS with IAM-based access.",
      sourceLink: "https://github.com/rohith12kumar/AWS-Serverless-CI-CD",
    },
    {
      title: "Green Basket — Vegetable Delivery Platform",
      skills: "Full-stack | 2024–2025",
      about:
        "Full-stack vegetable delivery platform.",
      sourceLink: "https://github.com/rohith12kumar/Green-Basket",
    },
    {
      title: "Campus Connect — College Portal",
      skills: "Full-stack | 2024",
      about:
        "Full-stack college portal.",
      sourceLink: "https://github.com/rohith12kumar/Campus-connect",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-blue-purple to-queen-pink p-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">
          PROJECTS
        </h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map(
            (
              { title, skills, about, learning, learningLabel, visitLink, sourceLink },
              index,
            ) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10"
              >
                <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                  <h3 className="text-[23px] font-archivo font-bold mb-2">
                    {title}
                  </h3>
                  <p className="text-[13px] text-grape mb-2">{skills}</p>
                  <div className="flex flex-col justify-between">
                    <p className="text-base mb-4 font-medium">{about}</p>
                    {learning && (
                      <p className="text-base mb-4 font-medium">
                        <span className="font-bold">{learningLabel || "Learnings"}</span>: {learning}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-4 text-grape">
                    {visitLink && (
                    <a
                      href={visitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:opacity-60"
                    >
                      Visit
                    </a>
                    )}
                    <a
                      href={sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:opacity-60"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
