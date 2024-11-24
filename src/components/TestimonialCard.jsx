import React from "react";
import styles from "./TestimonialCard.module.css";

function TestimonialCard({ name, image, testimonial, position }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <p className={styles.testimonial}>“{testimonial}”</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
