import React from 'react';
import styles from '../styles/project_card.module.css';
import Image from 'next/image';

interface CardProps {
  title: string;
  projectsCount: number;
  buttonText: string;
  imageSrc: string;
  altText: string;
}

export default function ProjectCard({
  title,
  projectsCount,
  buttonText,
  imageSrc,
  altText,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image style={{ width: '100%'}} src={imageSrc} alt={altText} width={150} height={150} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.projectsCount}>{projectsCount} projects</p>
        </div>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>

  );
}