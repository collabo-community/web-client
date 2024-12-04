import Image from 'next/image';
import styles from '../styles/app_404.module.css';

interface errorProps {
  img: string,
  errorMesssage: string,

}

export default function ErrorComponent({img, errorMesssage}: errorProps) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <Image
          src={img}
          className={styles.errorImage}
          alt="404 Illustration"
          width={485}
          height={323}
        />
        <p className={styles.errorMessage}>
          {errorMesssage}
        </p>
      </div>
    </div>
  );
}