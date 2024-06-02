import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { IoMdArrowUp } from 'react-icons/io';
import { useEffect, useState } from 'react';

const Root = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrolled);
    return () => {
      window.removeEventListener('scroll', handleScrolled);
    };
  }, []);
  // console.log(scrolled);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="bg-slate-800 min-h-screen text-slate-100">
      <div
        className={
          scrolled
            ? 'w-full fixed top-0 left-0 z-50 py-2 pb-4 bg-[#0b1625ca] shadow-xl shadow-[#343a4298] duration-300'
            : 'w-full fixed top-0 left-0 z-50 pt-5 sm:pt-6 pb-4 duration-300'
        }
      >
        <Nav />
      </div>
      <Outlet />
      <Footer />
      {/* GO to Up */}
      {scrolled && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-10 hover:scale-105 duration-300 right-6 p-3 bg-[#212428] cursor-pointer rounded-full hover:-translate-y-2 text-2xl text-rClr"
        >
          <IoMdArrowUp />
        </button>
      )}
    </div>
  );
};

export default Root;
