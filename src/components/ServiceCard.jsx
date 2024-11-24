import React from "react";
import styles from "./ServiceCard.module.css";

function ServiceCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={title} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
