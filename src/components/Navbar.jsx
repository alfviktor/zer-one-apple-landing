import React, { useState, useEffect, useRef } from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage navbar visibility
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    // Throttled scroll handler to improve performance
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollPos > 50) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          lastScrollY.current = currentScrollPos;
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP(() => {
    if (isVisible) {
      gsap.to('#navbar', {
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        opacity: 1
      });
    } else {
      gsap.to('#navbar', {
        y: -10,
        duration: 0.4,
        ease: 'power2.out',
        opacity: 0.95
      });
    }
  }, [isVisible]);

  return (
    <header id="navbar" className={`w-full h-[70px] sm:px-10 px-5 flex justify-between items-center z-50 fixed top-0 left-0 right-0 transition-colors duration-300 ${isVisible ? 'bg-black/75 backdrop-blur-xl border-b border-b-gray-300' : 'bg-black/90'}`}>
      <nav className='flex w-full screen-max-width justify-between'>
        <img src={appleImg} alt="Apple" width={25} height={18} />

        <div className='md:flex flex-1 justify-center hidden'>
          {navLists.map((nav, i) => (
            <div key={i} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
