import React from "react";
import "../pages/";

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about who we are and what we do.</p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At SPdigitalMarketing, our mission is to help businesses grow and
            succeed online by providing cutting-edge digital marketing solutions.
            We focus on delivering results through SEO, web development, social
            media marketing, and more.
          </p>
        </div>

        <div className="about-content">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity: We are honest, transparent, and trustworthy in everything we do.</li>
            <li>Innovation: We stay ahead of industry trends to provide innovative solutions.</li>
            <li>Customer Focus: We prioritize our clients' needs and ensure their success.</li>
            <li>Excellence: We strive for the highest standards in everything we create.</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/path/to/team-member-1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/path/to/team-member-2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Lead Marketing Strategist</p>
          </div>
          <div className="team-member">
            <img src="/path/to/team-member-3.jpg" alt="Team Member 3" />
            <h3>Mark Johnson</h3>
            <p>Head of Development</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
