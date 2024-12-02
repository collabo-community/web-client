import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/sidebar.module.css';
import Image from 'next/image';
import useScreenDimensions from '@/@library_external/hooks/useScreenDimensions';
import SM_Screen_HamburgerComponent from './SM_Screen_Hamburger';
import { useRef } from 'react';
import useCloseSidebarOnClickOutside from '../hooks/useCloseSidebarOnCLickOutside';
import useCloseSidebarOnTabOut from '../hooks/useCloseSidebarOnTabOut';

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar?: () => void }) {
  const { is_midAndUp_screens }  = useScreenDimensions();
  const router = useRouter();
  const menuItems = [
    { path: '/overview', label: 'Overview', icon: '/@images_app/dashboard.png' },
    { path: '/', label: 'Projects', icon: '/@images_app/project-icon.png' },
    { path: '/careers', label: 'Careers', icon:'/@images_app/career-icon.png' },
    { path: '/donates', label: 'Donate', icon:'/@images_app/donate.png' },
  ];

  const sidebarRef = useRef<HTMLDivElement>(null);

  useCloseSidebarOnClickOutside(sidebarRef, toggleSidebar);

  useCloseSidebarOnTabOut(!!toggleSidebar, toggleSidebar as () => void);

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
      {/* close icon for mobile screens */}
      <SM_Screen_HamburgerComponent
        isCloseBtn={true}
        toggleSidebar={toggleSidebar}
      />
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
