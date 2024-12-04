import Image from 'next/image';
import styles from '../styles/no_content.module.css';
import Button from './Button';

interface errorProps {
  img: string,
  subtext: string,
  title: string,
  cta: string
}

export default function NoContent({img, subtext, title, cta}: errorProps) {
  return (
    <div className={styles.noContentContainer}>
      <div className={styles.noContentContent}>
        <Image
          src={img}
          className={styles.noContentImage}
          alt="404 Illustration"
          width={485}
          height={323}
        />
        <p className={styles.title}>
          {title}
        </p>
        <span className={styles.subText}>{subtext}</span>
        { cta && <Button text={cta} />}
      </div>
    </div>
  );
}