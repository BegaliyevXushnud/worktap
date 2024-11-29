"use client";
import React, { useState } from "react";
import person from "../../public/prof.svg";
import plus from "../../public/profileplus.svg";
import cardimg from "../../public/profileimg.svg";
import rating from "../../public/rating.svg";
import Image from "next/image";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-auto flex flex-col mt-[70px] gap-[50px]">
      <div className="w-full flex flex-col gap-5 p-3 md:flex-row md:p-10 xl:p-24">
        <div className="flex flex-col gap-3 2xl:gap-[35px]">
          <h2 className="text-[18px] leading-[30px] font-thin text-[#FBA457] md:text-[20px] 2xl:text-[30px]">
            Дизайнер
          </h2>
          <h1 className="text-[28px] leading-[30px] font-thin text-green-600 md:text-[32px] 2xl:text-[40px]">
            Ернар <span className="text-black">Ибрагимов</span>
          </h1>
          <p className="font-sans text-[12px] text-[#000000] leading-[16px] md:text-[13px] 2xl:text-[23px] 2xl:leading-[21px] 2xl:w-[80%]">
            Работаю дизайнером с 1999 года.
            Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах... Порядка 8 лет, занимаюсь логотипами и фирменными стилями.
          </p>
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-8 mt-4">
            <div className="category-wrapper flex flex-wrap gap-3 md:gap-4">
              {["Figma", "Adobe photoshop", "Adobe illustrator", "Corel draw", "Adobe After Effects", "HTML/CSS"].map(
                (category, index) => (
                  <div
                    key={index}
                    className={`px-3 sm:px-4 h-[30px] sm:h-[35px] md:h-[37px] rounded-full flex items-center justify-center ${
                      category === "Все категории" ? "border border-[#FBA457] text-[#FBA457]" : "bg-[#F2F0FE] text-[#222222]"
                    }`}
                  >
                    <h2 className="text-[12px] sm:text-[14px] md:text-[15px] font-normal">{category}</h2>
                  </div>
                )
              )}
            </div>

            {/* Down Arrow Section */}
            <div className="relative inline-block text-left 2xl:w-[500px]">
              <button
                onClick={toggleDropdown}
                className="px-4 py-2 bg-[#F2F0FE] text-[#000000] rounded hover:bg-[#F2F0FE] flex items-center gap-5"
              >
                <h2> Показать подробную информацию</h2>
                <h1>{isOpen ? <FaChevronDown /> : <FaChevronUp />}</h1>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Казахстан, КазНУ, Бакалавр
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Казахский
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Русский
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-[100%] lg:w-[60%] flex items-end justify-end">
          <Image src={person} alt="s" className="object-cover" width={500} />
        </div>
      </div>

      <div className="w-[90%] h-auto m-auto flex flex-col gap-5">
        <div className="parent grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-[#F6FAFD] flex flex-col gap-3">
              <Image src={cardimg} alt="plus" className="w-full" />
              <h2 className="text-[16px] text-[#222222] leading-[16px] ml-2"> Дизайн сайта</h2>
              <h2 className="text-[16px] text-[#1DBF73] leading-[16px] ml-2"> 50 000 тенге</h2>
            </div>
          ))}
        </div>
        <button className="w-[180px] h-[40px] md:w-[238px] md:h-[54px] m-auto bg-transparent border border-[#1DBF73] rounded-full text-[#1DBF73] text-[18px]">
          Загрузить еще
        </button>
      </div>

      <div className="w-[90%] h-auto m-auto flex flex-col gap-[30px]">
        <h2 className="text-[18px] leading-[20px] tracking-wider xl:text-[23px]">Отзывы</h2>
        <div className="parent grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-5 xl:gap-[100px]">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="w-[60px] h-[60px] rounded-full bg-[#C4C4C4] xl:w-[80px] xl:h-[80px]"></div>
                <div className="flex flex-col gap-2 xl:gap-3">
                  <h2 className="text-[15px] xl:text-[20px]">Никита Евреев</h2>
                  <Image src={rating} alt="ds" className="w-[120px] h-[20px] md:w-[140px] md:h-[25px] xl:w-[160px] object-cover" />
                </div>
              </div>
              <p className="text-[12px] leading-[17px] md:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
