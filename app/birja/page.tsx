import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "../../css folder/birja.css"; // Sizning CSS faylingiz
import birjapersonimage from "../../public/birjaperson.png"; 
import Image from 'next/image';
import StarRating from '../../component/star';

const Page = () => {
  const projects = [
    {
      title: "Нужно сделать Дизайн сайта по тематике авто",
      name: "Екатерина Иванова",
      personimage: birjapersonimage,
      rating: <StarRating />,
      reviews: 15,
      budget: "50 000 тенге",
      timeAgo: "4 часа 28 минут назад",
      offers: 50,
      projectsCount: 25,
    },
  ];

  return (
    <div className="w-full flex flex-col mt-32 items-center p-2">
      <div className="hero p-4 text-center flex flex-col gap-9 items-center">
        <h1 className="text-[30px] text-[#000000] leading-[43px] font-semibold sm:text-[24px] lg:text-[50px] lg:leading-[43px] xl:w-[1250px] xl:leading-[60px]">
          Ищите и находите подходящую работу среди 
          <span className="text-green-600"> 10,000+</span> проектов и покажите на что Вы способны!
        </h1>

        {/* Search Input */}
        <div className="w-full max-w-[500px] h-[50px] sm:h-[55px] md:h-[60px] flex items-center rounded-full bg-[#f4f4fb] justify-between mt-2 md:mt-4 lg:mt-6 xl:max-w-[700px]">
          <input
            type="text"
            placeholder="Что нужно сделать?"
            className="flex-grow bg-transparent outline-none px-4 text-gray-600 placeholder-gray-500 text-[14px] sm:text-[16px] md:text-[17px] font-montserrat "
          />
          <button className="w-[120px] md:w-[140px] lg:w-[154px] h-full bg-[#ffa54f] font-bold rounded-full ml-2 text-[#F6FAFD] text-[14px] sm:text-[15px] md:text-[16px]">
            Найти
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-8 mt-4">
          <div className="category-wrapper flex flex-wrap gap-3 md:gap-4">
            {[
              "Тексты и переводы",
              "Разработка",
              "Дизайн",
              "Аудио, видео монтаж",
              "SEO и оптимизация",
              "Бизнес и жизнь",
              "Соцсети и реклама",
              "Все категории",
            ].map((category, index) => (
              <div
                key={index}
                className={` px-3 sm:px-4 h-[30px] sm:h-[35px] md:h-[37px] rounded-full flex items-center justify-center ${category === "Все категории" ? "border border-[#FBA457] text-[#FBA457]" : "bg-[#F2F0FE] text-[#222222]"}`}
              >
                <h2 className="text-[12px] sm:text-[14px] md:text-[15px] font-normal">{category}</h2>
              </div>
            ))}
          </div>

          {/* Down Arrow Section */}
          <div className="flex flex-col items-center justify-center gap-6 text-[green]">
            <h1 className="text-[24px] text-[#000000] leading-[30px]">Ниже все заказы по <span className="text-green-400">дизайну</span></h1>
            <FaChevronDown size={18} />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-6">
        <div className='flex flex-col items-center justify-between xl:flex-row'>
          <h2 className="text-[22px] text-[#000000] leading-[30px] tracking-[2%] font-sans mb-4 xl:text-[24px]">65 проектов по дизайну</h2>
          <div className="mb-4 flex justify-end gap-[10px]">
            <button className="border border-[#F2F0FE] p-2 rounded-[20px] text-[12px] text-[#656084] leading-[13px] font-sans xl:text-[14px] xl:leading-[17.07px] ">Минимальная цена</button>
            <h2 className='p-2 rounded-[20px] text-[14px] text-[#656084] leading-[17.07px] font-sans'>-</h2>
            <button className="border border-[#F2F0FE] p-2 rounded-[20px] text-[12px] text-[#656084] leading-[13px] font-sans xl:text-[14px] xl:leading-[17.07px]">Максимальная цена</button>
            <button className="border border-[#F2F0FE] p-2 rounded-[20px] text-[12px] text-[#222222] leading-[13px] font-semibold flex items-center gap-5 xl:text-[18px] xl:leading-[22px]">По возрастанию цены <FaChevronDown /></button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Repeat the div 10 times manually */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="shadowdiv flex flex-col gap-5 justify-between bg-white p-4 border border-[#F6FAFD] xl:flex-row"
            >
              <div className="flex flex-col gap-9">
                <h3 className="text-[#000000] text-[24px] leading-[29px] tracking-[2%]">{projects[0].title}</h3>
                <div className="flex items-center gap-3">
                  <Image
                    src={projects[0].personimage}
                    alt={projects[0].name}
                    className="w-[90px] h-[90px] rounded-full mr-4 xl:w-[120px] xl:h-[120px]"
                  />
                  <div className='flex flex-col gap-2 xl:gap-6'>
                    <p className="text-[16px] text-[#000000] leading-[21px] font-sans xl:text-[18px]">{projects[0].name}</p>
                    <p className="text-[16px] text-[#000000] leading-[21px] font-sans xl:text-[18px]">Размещено проектов на бирже: {projects[0].projectsCount}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center text-yellow-500 mr-2">
                        {projects[0].rating}
                      </div>
                      <span className="text-[12px] text-[#000000] leading-[17px] font-mono xl:text-[14px]">{projects[0].reviews} отзывов</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right flex gap-[100px] items-end xl:flex-col">
                <div className='flex flex-col gap-2 items-start'>
                  <p className="text-[#1DBF73] text-[12px] leading-[30px] tracking-[2%] font-semibold xl:text-[22px]">Бюджет: {projects[0].budget}</p>
                  <p className="text-[#656084] text-[10px] leading-[17px] font-thin xl:text-[14px]">{projects[0].timeAgo}</p>
                </div>
                <p className="text-[#656084] text-[10px] leading-[21px] font-thin xl:text-[18px]">Предложений: {projects[0].offers}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
