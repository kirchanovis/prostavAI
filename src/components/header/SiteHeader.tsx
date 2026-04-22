import styles from './SiteHeader.module.scss';
import logo from '../../assets/brand/logo.jpg';
import { MenuContainer } from '../../containers/MenuContainer';

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <img className={styles.logo} src={logo} alt="Логотип" />
      </div>
      <div className={styles.bottom}>
        <MenuContainer />
      </div>
    </header>
  );
}
