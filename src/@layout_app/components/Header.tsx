// import styles from './styles/app_page.module.module.css';

import { getPage } from '@/@layout_shared/helpers/meta';
import { useRouter } from 'next/router';


export default function Header() {
  const { pathname } = useRouter();
  const { pageTitle } = getPage({ pathname });
  return (
    <header>
      <h1>{pageTitle}</h1>
    </header>
  );
}
