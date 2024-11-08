"use client";
import Image from 'next/image';
import HeaderLogo from '../../public/headerlogo1.svg';
import Link from 'next/link';
import React, { useState } from 'react';
import "./header.css";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    window.location.href = '/login'; 
  };
  const routes = [
    { id: 1, title: 'Биржа', link: '/' },
    { id: 2, title: 'Ворки', link: '/thieves' },
    { id: 3, title: 'Конкурсы', link: '/contests' },
    { id: 4, title: 'Создать ворк', link: '/create-work' },
    { id: 5, title: 'Создать заказ', link: '/create-order' },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <Link href="/">
            <Image src={HeaderLogo} className='img' alt="header logo" />
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

        <div className="action-buttons">
          <button className="register-btn btn01">Регистрация</button>
          <button className="dw-btn btn02" onClick={handleClick}>Войти</button>
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

  <button className="register-btn btn2">Регистрация</button>
  <button className="dw-btn btn3">Войти</button>
</div>

    </header>
  );
};

export default Header;
