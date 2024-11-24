import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServiceCard from "./ServiceCard";
import TestimonialCard from "./TestimonialCard";
import Button from "./Button";
import Modal from "./Modal";
import Footer from "./Footer";

import "./Home.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: "📈",
      title: "SEO Optimization",
      description: "Improve your search engine rankings and online visibility.",
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Build powerful websites that engage your audience and drive results.",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Expand your reach and build a loyal audience on social platforms.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "SPdigitalMarketing helped our company grow exponentially. Their strategies are top-notch!",
      company: "XYZ Corp.",
    },
    {
      name: "Jane Smith",
      feedback:
        "I saw a significant increase in my online presence after working with SPdigitalMarketing. Highly recommend!",
      company: "ABC Ltd.",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              feedback={testimonial.feedback}
              company={testimonial.company}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <Button text="Contact Us" onClick={openModal} className="button--large" />
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Get in Touch with Us</h2>
        <p>We will respond to your inquiry as soon as possible.</p>
        <Button text="Close" onClick={closeModal} />
      </Modal>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
