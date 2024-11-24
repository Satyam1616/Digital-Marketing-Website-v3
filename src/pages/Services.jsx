import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "../components/Button";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "📈",
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and online visibility to attract more traffic to your website.",
      link: "/services/seo",
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Build powerful and responsive websites that engage users and drive conversions for your business.",
      link: "/services/web-development",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Expand your reach and build a loyal audience on social media platforms like Facebook, Instagram, and LinkedIn.",
      link: "/services/social-media-marketing",
    },
    {
      icon: "📧",
      title: "Email Marketing",
      description:
        "Create personalized email campaigns that drive sales, improve customer engagement, and increase conversions.",
      link: "/services/email-marketing",
    },
  ];

  return (
    <div className="services-page">
      <h1 className="services-header">Our Services</h1>
      <section className="services-list">
        <div className="service-cards">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Need a Custom Solution?</h2>
        <Button text="Get in Touch" className="cta-button" link="/contact" />
      </section>
    </div>
  );
}

export default Services;
