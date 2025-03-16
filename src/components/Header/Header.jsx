import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { MdCurrencyExchange } from 'react-icons/md';

import styles from './Header.module.css';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import SelectRates from '../SelectRates/SelectRates';
import { selectBaseCurrency } from '../../reduxState/selector';

const Header = () => {
  const baseCurrency = useSelector(selectBaseCurrency)
  const addActive = ({ isActive }) => (isActive ? styles.active : styles.link);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <MdCurrencyExchange className={styles.logo} />
          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink to="/" className={addActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/rates" className={addActive}>
                  Rates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      {baseCurrency && <SelectRates baseCurrency={baseCurrency}/>}
      </header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;