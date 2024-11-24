import React, { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission (e.g., API call)
      // You can replace this with actual form submission code (e.g., using fetch or axios)
      setTimeout(() => {
        setStatusMessage("Your message has been sent successfully!");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
    } catch (error) {
      setStatusMessage("There was an error sending your message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactForm}>
      <h2 className={styles.heading}>Get In Touch</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </div>

        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {statusMessage && (
          <p className={styles.statusMessage}>
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
