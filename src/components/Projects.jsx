import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "AWS EC2 Nginx Web Server",
      skills: "AWS EC2 | Nginx | Linux | SSH | Security Groups",
      about: "Deployed a production-style web server on Amazon EC2 using Nginx in a Linux environment, with secure remote access and traffic management.",
      learning: "Configured secure SSH access with key pairs, managed inbound traffic with Security Groups (HTTP & SSH), diagnosed and resolved external connectivity issues from incorrect network configs, and optimised cost on the AWS Free Tier.",
      visitLink: "https://rohithkumarmamindla.vercel.app/",
      sourceLink: "https://github.com/rohith12kumar/aws-ec2-nginx-web-server",
    },
    {
      title: "Serverless REST API — Lambda + DynamoDB",
      skills: "AWS Lambda | API Gateway | DynamoDB | IAM | Python | Postman",
      about: "Designed and deployed a fully serverless backend on AWS with zero server management — handling user data storage, retrieval and API routing end-to-end.",
      learning: "Built a sub-50ms cold-start Lambda function in Python for POST/GET requests via API Gateway, modelled a DynamoDB table with a partition-key schema for O(1) lookups, and authored least-privilege IAM roles validated in Postman.",
      visitLink: "https://rohithkumarmamindla.vercel.app/",
      sourceLink: "https://github.com/rohith12kumar/AWS-Serverless-User-API",
    },
    {
      title: "CI/CD Pipeline — GitHub Actions & AWS",
      skills: "GitHub Actions | AWS IAM | CI/CD | DevOps",
      about: "Automated deployment pipeline connecting GitHub to AWS, focused on secure credential management and DevOps workflow automation.",
      learning: "Configured IAM access for secure GitHub to AWS integration, implemented environment secrets for credential management, and automated deployment workflows using GitHub Actions YAML pipelines.",
      visitLink: "https://rohithkumarmamindla.vercel.app/",
      sourceLink: "https://github.com/rohith12kumar/AWS-Serverless-CI-CD",
    },
    {
      title: "Green Basket — Vegetable Delivery Platform",
      skills: "Full-Stack Development | Python | Web Development",
      about: "Full-stack vegetable delivery platform built as a featured project (2024–2025), covering product browsing and ordering flows.",
      learning: "Built full-stack features end-to-end and strengthened Python and web development practice through a real delivery-platform use case.",
      visitLink: "https://github.com/rohith12kumar/Green-Basket",
      sourceLink: "https://github.com/rohith12kumar/Green-Basket",
    },
    {
      title: "Campus Connect — College Portal",
      skills: "Full-Stack Development | Web Development",
      about: "College portal built as a full-stack developer (2024), connecting students and campus services in one place.",
      learning: "Developed portal features end-to-end, from user-facing pages to the supporting backend logic.",
      visitLink: "https://github.com/rohith12kumar/Campus-connect",
      sourceLink: "https://github.com/rohith12kumar/Campus-connect",
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-blue-purple to-queen-pink p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">PROJECTS</h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map(({ title, skills, about, learning, visitLink, sourceLink }, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10 px-2">
              <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                <h3 className="text-[23px] font-archivo font-bold mb-2">{title}</h3>
                <p className="text-[13px] text-grape mb-2">{skills}</p>
                <div className="flex flex-col justify-between">
                  <p className="text-base mb-4 font-medium">{about}</p>
                  <p className="text-base mb-4 font-medium"><span className="font-bold">Learnings</span>: {learning}</p>
                </div>
                <div className="flex gap-4 text-grape mt-auto">
                  <a href={visitLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">Visit</a>
                  <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">View Source</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
