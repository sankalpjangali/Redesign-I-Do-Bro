
import Header from '../components/Layout/Header';

import Footer from '../components/Layout/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout(){
   return( <>
      <Header />
      <main>
        <Outlet />  {/* This is where the current page shows */}
      </main>
      <Footer />
    </>);
}