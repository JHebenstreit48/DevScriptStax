import { Outlet } from 'react-router-dom';
import Footer from '@/Components/Footer';
import '@/SCSS/Page.scss';
import '@/CSS/Header.css';
import '@/SCSS/Navigation.scss';
import '@/CSS/Footer.css';

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
