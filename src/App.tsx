import { Outlet } from 'react-router-dom';

// Components
import Footer from '@/Components/Shared/Footer';

// Styles
import '@/SCSS/PageStyles/Page.scss';
import '@/SCSS/PageStyles/Header/Header.scss';
import '@/SCSS/PageStyles/Footer.scss';
import '@/SCSS/NavigationStyles/Navigation.scss';
import '@/SCSS/NavigationStyles/SearchModal.scss';
import '@/SCSS/PageStyles/Error.scss';

export default function App() {
  return (
    <div className="appContainer">
      <div className="contentWrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}