// pages/login.js
"use client"
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/headerlogo1.svg';
import opa from '../../public/logingirlf.svg';
import "../../css folder/register.css";

const Page = () => {  
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isExecutor: false,
    isCustomer: false
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

 
  const handleSubmit = (e:any) => {
    e.preventDefault();
    localStorage.setItem('register', JSON.stringify(formData));
    alert('Ma\'lumotlar saqlandi!');
    window.location.href='/login'
  };

  return (
    <div className="flex min-h-screen">
      {/* Form container */}
      <div className="flex flex-col justify-center w-full max-w-xl p-8 mx-auto bg-white shadow-md md:w-1/2 xl:w-1/2 2xl:ml-[200px]">
        <div className="mb-8 text-center">
          <Image src={logo} alt="Logo" className="mx-auto w-24 h-24" />
          <h2 className="mt-6 text-[#1A202C] text-[30px] font-bold">Заполните все поля</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-3">
            <label className="block text-[#222222] leading-[21px] text-[18px]">Ваше имя</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Имя"
              className="in w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="block text-[#222222] leading-[21px] text-[18px]">Ваше фамилия</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Фамилия"
              className="in w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="block text-[#222222] leading-[21px] text-[18px]">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="in w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль"
              className="in w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Повтарите пароль</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Пароль"
              className="in w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isExecutor"
                checked={formData.isExecutor}
                onChange={handleChange}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2 text-[18px] text-[#000000] leading-[21px]">Я исполнитель</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isCustomer"
                checked={formData.isCustomer}
                onChange={handleChange}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2 text-[18px] text-[#000000] leading-[21px]">Я заказчик</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-[18px] leading-[21px] font-medium text-[#FFFFFF] bg-[#04C35C] rounded-lg hover:bg-green-700"
          >
            Зарегестрироваться
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          У Вас есть аккаунт? <a href="/login" className="text-[orange] hover:underline"> Войдите</a>
        </p>
      </div>

      {/* Image container, hidden on screens smaller than 1280px */}
      <div className="hidden xl:flex flex-1 relative md:w-1/2">
        <div className="relative w-full h-full">
          <Image src={opa} alt="Woman using laptop" className="ml-[0px]" />
        </div>
      </div>
    </div>
  );
};

export default Page;
