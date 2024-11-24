import React from "react";
import PortfolioCard from "./PortfolioCard";
import Button from "./Button";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description: "A complete redesign of a local business website.",
      image: "/path/to/project1.jpg",
      link: "/portfolio/project-1",
    },
    {
      title: "Project 2",
      description: "SEO optimization for an e-commerce store.",
      image: "/path/to/project2.jpg",
      link: "/portfolio/project-2",
    },
    {
      title: "Project 3",
      description: "Social media marketing campaign for a new product launch.",
      image: "/path/to/project3.jpg",
      link: "/portfolio/project-3",
    },
    {
      title: "Project 4",
      description: "Email marketing campaign with a high conversion rate.",
      image: "/path/to/project4.jpg",
      link: "/portfolio/project-4",
    },
  ];

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Explore our latest projects and see the results we’ve achieved for our clients.</p>
      </header>

      <section className="portfolio-section">
        <div className="portfolio-cards">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Want to Work With Us?</h2>
        <Button text="Contact Us" className="cta-button" link="/contact" />
      </section>
    </div>
  );
}

export default Portfolio;
