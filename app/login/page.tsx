// pages/login.js
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/headerlogo1.svg';
import opa from '../../public/logingirlf.svg';
import googleIcon1 from '../../public/google.svg';
import "../../css folder/login.css";

const Page = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedFormData = JSON.parse(localStorage.getItem('register'));
    if (
      savedFormData &&
      savedFormData.email === loginData.email &&
      savedFormData.password === loginData.password
    ) {
      alert('Login successful!');

      if(typeof window !== undefined){
        localStorage.setItem('Login', JSON.stringify(loginData))
      }
      window.location.href = '/';
    } else {
      alert('Incorrect email or password.');
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center w-full max-w-xl p-8 mx-auto bg-white shadow-md md:w-1/2 xl:w-1/2 2xl:ml-[200px]">
        <div className="mb-8 text-center">
          <Image src={logo} alt="Logo" className="mx-auto w-24 h-24" />
          <h2 className="mt-6 text-[#1A202C] text-[30px] font-bold">Войдите в свой аккаунт</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-3">
            <label className="block text-[#222222] leading-[21px] text-[18px]">E-mail</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
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
              value={loginData.password}
              onChange={handleChange}
              placeholder="Пароль"
              className="in w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
              <span className="ml-2 text-[18px] text-[#000000] leading-[21px]">Запомнить меня</span>
            </label>
            <a href="#" className="text-[#FBA457] text-[18px] font-serif hover:underline">Забыли пароль?</a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-[18px] leading-[21px] font-medium text-[#FFFFFF] bg-[#04C35C] rounded-lg hover:bg-green-700"
          >
            Войти
          </button>
          <button
            type="button"
            className="w-full px-4 py-2 text-sm flex items-center justify-center font-medium text-[#FFFFFF] bg-[#2D3748] rounded-lg hover:bg-gray-300"
          >
            <Image src={googleIcon1} alt="Google Logo" className="inline w-5 h-5 mr-2" />
            Или войдите с помощью Google
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          У Вас еще нет аккаунта? <a href="/register" className="text-[orange] hover:underline">Зарегистрируйтесь бесплатно!</a>
        </p>
      </div>
      <div className="hidden xl:flex flex-1 relative md:w-1/2">
        <div className="relative w-full h-full">
          <Image src={opa} alt="Woman using laptop" className="ml-[0px]" />
        </div>
      </div>
    </div>
  );
};

export default Page;
