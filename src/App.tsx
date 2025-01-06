import { Outlet } from 'react-router-dom';
import Footer from '@/Components/Footer';
import '@/CSS/Page.css';
import '@/CSS/Header.css';
import '@/CSS/Navigation.css'

export default function App() {

  return (

    <div>

      <div>

      <Outlet />

      </div>
      
      <Footer />

    </div>
  )
}
