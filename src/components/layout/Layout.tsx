import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from '../sections/footer/Footer';
import ScrollProgress from '../ui/ScrollProgress';
import BackToTop from '../ui/BackToTop';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function Layout() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgress />
      <BackToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}