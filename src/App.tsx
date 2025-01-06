import { Outlet } from 'react-router-dom';
import Footer from '@/Components/Footer';
import '@/CSS/Page.css';
import '@/CSS/Header.css';
import '@/CSS/Navigation.css'

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
