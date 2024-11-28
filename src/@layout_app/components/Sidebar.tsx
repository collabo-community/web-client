import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/sidebar.module.css';
import Image from 'next/image';
import useScreenDimensions from '@/@library_external/hooks/useScreenDimensions';

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar?: () => void }) {
  const { is_midAndUp_screens, is_sm_screen }  = useScreenDimensions();
  const router = useRouter();
  const menuItems = [
    { path: '/overview', label: 'Overview', icon: '/@images_app/dashboard.png' },
    { path: '/', label: 'Projects', icon: '/@images_app/project-icon.png' },
    { path: '/careers', label: 'Careers', icon:'/@images_app/career-icon.png' },
    { path: '/donates', label: 'Donate', icon:'/@images_app/donate.png' },
  ];

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
      {/* close icon for mobile screens */}
      {is_sm_screen && <button className={styles.sidebar_toggleclose} onClick={toggleSidebar}>
        <Image src='/@images_app/close-icon.svg' alt='close-icon' width={25} height={25}/>
      </button>}
      <Link href='/' onClick={toggleSidebar}>
        <Image className={styles.logo} src={is_midAndUp_screens ? '/@images_app/logo.png' : '/@images_app/mobile-logo.svg'} width={is_midAndUp_screens ? 207 : 172} height={is_midAndUp_screens ? 55 : 40} alt='logo'/>
      </Link>
      <nav className={styles.menuitems}>
        {menuItems.map((item) => (
          <Link href={item.path} key={item.path} className={
            router.asPath === item.path ||
            (item.path === '/' && router.asPath === '/')
              ? styles.active
              : styles.navlink
          }
          onClick={toggleSidebar}
          >
            <div className={styles.navlinkitems}>
              <Image src={item.icon as string} alt={`${item.label}-icon`} width='20' height='20' /> {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
