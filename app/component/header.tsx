"use client";
import Image from 'next/image';
import HeaderLogo from '../../public/headerlogo1.svg';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import "../../css folder/header.css";
import { FaBars, FaTimes, FaStar, FaBell, FaComment } from 'react-icons/fa';
import profileImage from '../../public/bro.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [showLogoutModal, setShowLogoutModal] = useState(false); 

  const handleClick = () => {
    window.location.href = '/login'; 
  };
  
  const handleClick2 = () => {
    window.location.href = '/register'; 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };
  
  const handleClose = () => {
    setIsOpen(false); 
  };

  const routes = [
   
    { id: 1, title: 'Биржа', link: '/birja' },
    { id: 2, title: 'Ворки', link: '/thieves' },
    { id: 3, title: 'Конкурсы', link: '/contests' },
    { id: 4, title: 'Создать ворк', link: '/create-work' },
    { id: 5, title: 'Создать заказ', link: '/create-order' },
  ];

  useEffect(() => {
    if (localStorage.getItem('Login')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <Link href="/">
            <Image src={HeaderLogo} className="img" alt="header logo" />
          </Link>
        </div>

        <div className="nav-desktop">
          <ul className="nav-links">
            {routes.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="nav-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* gygfuyf */}

        <div className="action-buttons">
          {isLoggedIn ? (
            
              <div className=" flex items-center gap-10 relative ">
                <div className="flex gap-5 items-center">
                  <FaStar size={19} color="#B0AAD0" />
                  <FaBell size={19} color="#B0AAD0" />
                  <FaComment size={19} color="#B0AAD0" />
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-[#222222] text-[16px] leading-[19px] font-light">Ернар Ибрагимов</h2>
                  <div>
                    <Image
                      src={profileImage}
                      alt="Profile"
                      className="w-[60px] h-[60px] cursor-pointer"
                      onClick={toggleMenu}
                    />
                    {isOpen && ( 
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                        <ul className="py-2">
                          {['Profile', 'Account', 'Dashboard', 'Logout'].map((item) => (
                            <li
                              key={item}
                              onClick={() => item === 'Logout' ? setShowLogoutModal(true) : handleClose()}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            
          ) : (
            <>
              <button className="register-btn btn01" onClick={handleClick2}>Регистрация</button>
              <button className="dw-btn btn02" onClick={handleClick}>Войти</button>
            </>
          )}
          <span 
            className="menu-toggle" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars size={24} />
          </span>
        </div>
      </nav>

      {menuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <div className={`mobile-menu ${menuOpen ? 'menu-open' : ''}`}>
        <div className="menu-top">
          <div className="logo-container">
            <Link href="/">
              <Image src={HeaderLogo} className="img" alt="header logo" />
            </Link>
          </div>
          <button className="close-menu" onClick={() => setMenuOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>
        
        <ul className="mobile-links">
          {routes.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        {isLoggedIn ? (
            <>
              <div className="flex items-center gap-10 relative">
                <div className="flex gap-5 items-center">
                  <FaStar size={19} color="#B0AAD0" />
                  <FaBell size={19} color="#B0AAD0" />
                  <FaComment size={19} color="#B0AAD0" />
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-[#222222] text-[16px] leading-[19px] font-light">Ернар Ибрагимов</h2>
                  <div>
                    <Image
                      src={profileImage}
                      alt="Profile"
                      className="w-[60px] h-[60px] cursor-pointer"
                      onClick={toggleMenu}
                    />
                    {isOpen && ( 
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                        <ul className="py-2">
                          {['Profile', 'Account', 'Dashboard', 'Logout'].map((item) => (
                            <li
                              key={item}
                              onClick={() => item === 'Logout' ? setShowLogoutModal(true) : handleClose()}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button className="register-btn btn01" onClick={handleClick2}>Регистрация</button>
              <button className="dw-btn btn02" onClick={handleClick}>Войти</button>
            </>
          )}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Are you sure you want to logout?</p>
            <button onClick={() => { setShowLogoutModal(false); window.location.href = '/register'; }} className="confirm-btn">Yes</button>
            <button onClick={() => setShowLogoutModal(false)} className="cancel-btn">No</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
