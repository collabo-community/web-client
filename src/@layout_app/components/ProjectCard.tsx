import React from 'react';
import styles from '../styles/project_card.module.css';
import Image from 'next/image';
import Button from './Button';

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
        <Image className={styles.img} src={imageSrc} alt={altText} width={150} height={150} loading="lazy" />
        <div className={styles.contentMobile}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.projectsCount}>{projectsCount} projects</p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.projectsCount}>{projectsCount} projects</p>
        </div>
        <Button className={styles.button} text={buttonText}/>
      </div>
    </div>

  );
}