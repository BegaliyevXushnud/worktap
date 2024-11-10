import React from 'react';
import Image from 'next/image';
import facebook from '../public/facebook.svg';
import twitter from '../public/twiter.svg';
import instagram from '../public/instagam.svg';
import linkedin from '../public/lenkedin.svg';

const Footer = () => {
  const footerData = {
    topCategories: [
      "Тексты и переводы",
      "Разработка",
      "Дизайн",
      "Аудио, видео монтаж",
      "Соцсети и реклама",
      "Бизнес и жизнь",
      "SEO и оптимизация",
    ],
    aboutProject: [
      "О Нас",
      "Как Это Работает",
      "Политика Приватности",
      "Правила Пользования",
      "Пресса о нас",
    ],
    support: ["Контакты", "Политика Безопасности", "FAQ"],
    socialIcons: [
      { icon: facebook, alt: "Facebook", link: "#" },
      { icon: twitter, alt: "Twitter", link: "#" },
      { icon: instagram, alt: "Instagram", link: "#" },
      { icon: linkedin, alt: "LinkedIn", link: "#" },
    ],
  };

  return (
    <footer className="bg-[#F2F0FE] text-gray-700 p-10 w-full ">
      <div className="w-[95%] mx-auto grid gap-8 grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
    
        <div>
          <h3 className="text-[19px] md:text-[24px] text-[#222222] leading-[29px] font-bold mb-4">Топ категории</h3>
          <ul>
            {footerData.topCategories.map((category, index) => (
              <li key={index} className="mb-2 text-[#222222] text-[14px] font-light">
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[19px] md:text-[24px] text-[#222222] leading-[29px] font-bold mb-4">О Проекте</h3>
          <ul>
            {footerData.aboutProject.map((item, index) => (
              <li key={index} className="mb-2 text-[#222222] text-[14px] font-light">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-[19px] md:text-[24px] text-[#222222] leading-[29px] font-bold mb-4">Поддержка</h3>
          <ul>
            {footerData.support.map((supportItem, index) => (
              <li key={index} className="mb-2 text-[#222222] text-[14px] font-light">
                {supportItem}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[19px] md:text-[24px] text-[#222222] leading-[29px] font-bold mb-4">Follow</h3>
          <div className="flex space-x-4">
            {footerData.socialIcons.map((social, index) => (
              <a href={social.link} key={index} target="_blank" rel="noopener noreferrer">
                <Image src={social.icon} alt={social.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-[16px] leading-[19.5px] font-serif">
        © 2021 | WorkTap – Worktap.KZ. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
