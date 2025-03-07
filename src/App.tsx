import { Outlet } from 'react-router-dom';
import Footer from '@/Components/Footer';
import '@/SCSS/Page.scss';
import '@/SCSS/Header.scss';
import '@/SCSS/Navigation.scss';
import '@/SCSS/Footer.scss';
import '@/SCSS/Error.scss';
import '@/SCSS/BackToTop.scss';

export default function App() {

  return (

    <div className="appContainer">

      <div className="contentWrapper">

      <Outlet />

      </div >
      
      <Footer />

    </div>
  )
}
