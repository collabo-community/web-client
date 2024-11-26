import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/sidebar.module.css';
import Image from 'next/image';

export default function Sidebar() {
  const router = useRouter();
  const menuItems = [
    { path: '/overview', label: 'Overview', icon: '/@images_app/dashboard.png' },
    { path: '/', label: 'Projects', icon: '/@images_app/project-icon.png' },
    { path: '/careers', label: 'Careers', icon:'/@images_app/career-icon.png' },
    { path: '/donates', label: 'Donate', icon:'/@images_app/donate.png' },
  ];

  return (
    <aside className={styles.sidebar}>
      <Link href='/'>
        <Image className={styles.logo} src='/@images_app/logo.png' width='207' height='55' alt='logo'/>
      </Link>
      <nav className={styles.menuitems}>
        {menuItems.map((item) => (
          <Link href={item.path} key={item.path} className={
            router.asPath === item.path ||
            (item.path === '/' && router.asPath === '/')
              ? styles.active
              : styles.navlink
          }>
            <div className={styles.navlinkitems}>
              <Image src={item.icon as string} alt={`${item.label}-icon`} width='20' height='20' /> {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
