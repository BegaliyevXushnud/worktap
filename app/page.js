import Image from "next/image";
import bro from '../public/herobro.svg';
import firstperson from '../public/firstperson.svg';
import twoperson from '../public/berctka.svg';
import threeperson from '../public/threeperson.svg';
import fourperson from '../public/fourperson.svg';
import lastperson from '../public/lastperson.svg';
import icon1 from '../public/icon1.svg'
import icon2 from '../public/icon2.svg'
import icon3 from '../public/icon3.svg'
import fr from '../public/fr.svg'
import creditcarta1 from '../public/credit-card 1.svg'
import money from '../public/money (1) 1.svg'
import clock from '../public/clock 1.svg'
import StarRating from "../component/star";
export default function Home() {
  const cards = [
    {
      title: "Сделать дизайн интернет-магазина",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultricies mauris. Etiam vitae vulputate est nec arcu.",
      imageUrl: firstperson,
    },
    {
      title: "Верстка landing page",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultricies mauris. Etiam vitae vulputate est nec arcu.",
      imageUrl: twoperson,
    },
    {
      title: "Сделать дизайн сайта-каталога и посадить на какой-нибудь ко...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultricies mauris. Etiam vitae vulputate est nec arcu.",
      imageUrl: threeperson,
    },
    {
      title: "Продвижение instagram",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultricies mauris. Etiam vitae vulputate est nec arcu.",
      imageUrl: fourperson,
    },
    {
      title: "Срочно! Нужен веб дизайнер!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultricies mauris. Etiam vitae vulputate est nec arcu.",
      imageUrl: lastperson,
    },
  ];
  const cardstop = [
    {
      name: "Марина Королёва",
      jobs: "Разработчик PHP  ",
      proyect:"Выполено проектов: 65",
      personImage: firstperson,
      rating:<StarRating/>
    },
    {
      name: "Семён Сергеев",
      jobs: "Копирайтер  ",
      proyect:"Выполено проектов: 104",
      personImage: twoperson,
      rating:<StarRating/>
    },
    {
      name: "Ангелина Сорокина",
      jobs: "Дизайнер сайтов  ",
      proyect:"Выполено проектов: 25",
      personImage: threeperson,
      rating:<StarRating/>
    },
    {
      name: "Никита Зайцев",
      jobs: "Маркетолог  ",
      proyect:"Выполено проектов: 144",
      personImage: fourperson,
      rating:<StarRating/>
    },
    {
      name: "Наталья Захарова",
      jobs: "Motion дизайнер   ",
      proyect:"Выполено проектов: 71",
      personImage: lastperson,
      rating:<StarRating/>
    },
  ];
  const minicard = [
    {
      IconImg: icon1,
      title: "Выберите услугу ",
     desc:"В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов."
    },
    {
      IconImg: icon2,
      title: "Оплатите",
     desc:"Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите. "
    },
    {
      IconImg: icon3,
      title: "Получите результат ",
     desc:"Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа."
    },
  ];
  const layout = [
    {
      layoutImg: fr,
      creditcardimg:creditcarta1,
      moneyimg:money,
     clockimg:clock,
     creditcarta1text:"Оплачивайте с р/с или карты компании",
      moneytext:"Экономьте до 87% бюджета на фрилансе",
      clocktext:"Экономьте до 75% времени на решении фриланс задач"
    },
  ];
  return (
    <div className="w-full h-auto flex flex-col gap-20 justify-center mt-32 sm:mt-20 px-4 p-2  sm:p-10 lg:p-16 lg:mt-32">
      <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-8">
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start gap-6 sm:gap-8 md:gap-10 text-center lg:text-left">
          <h1 className="text-[#222222] font-montserrat text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px] font-bold leading-tight tracking-[0.05em]">
            Покупайте фриланс-услуги в <span className="text-[green]">два клика</span>
          </h1>
          <h3 className="text-[#000000] font-montserrat text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] xl:text-[35px] leading-snug">
            Ворк — единица работы продавца, которую можно купить как товар в магазине
          </h3>

          <div className="w-full max-w-[500px] h-[50px] sm:h-[55px] md:h-[60px] flex items-center rounded-full bg-[#f4f4fb] justify-between mt-2 md:mt-4 lg:mt-6">
            <input
              type="text"
              placeholder="Что нужно сделать?"
              className="flex-grow bg-transparent outline-none px-4 text-gray-600 placeholder-gray-500 text-[14px] sm:text-[16px] md:text-[17px] font-montserrat"
            />
            <button className="w-[120px] md:w-[140px] lg:w-[154px] h-full bg-[#ffa54f] font-bold rounded-full ml-2 text-[#F6FAFD] text-[14px] sm:text-[15px] md:text-[16px]">
              Найти
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-8 mt-4">
            <h1 className="font-montserrat text-sm md:text-base font-medium">
              Выберите рубрику, чтобы начать
            </h1>
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
      className={`px-3 sm:px-4 h-[30px] sm:h-[35px] md:h-[37px] rounded-full flex items-center justify-center ${
        category === "Все категории" ? "border border-[#FBA457] text-[#FBA457]" : "bg-[#F2F0FE] text-[#222222]"
      }`}
    >
      <h2 className="text-[12px] sm:text-[14px] md:text-[15px] font-normal">{category}</h2>
    </div>
  ))}
</div>

          </div>
        </div>

        <div className="w-full lg:w-[50%] h-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <Image src={bro} alt="bro" priority className="max-w-[80%] sm:max-w-[60%] lg:max-w-full h-auto" />
        </div>
      </div>

      <div className="w-full   flex flex-col gap-6 ">
      <h1 className="text-[24px] font-semibold  leading-[29px] tracking-[0.02em]">Актуальные ворки</h1>
      <div className="cards w-full b- grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[50px] ">
      {cards.map((card) => (
        <div key={card.id} className="w-[335px] h-auto bg-[white] shadow-custom-light rounded-lg p-5 flex flex-col gap-6 lg:gap-8 lg:w-[350px] 2xl:w-[480px] ">
         <div  className="flex flex-col items-center gap-3 md:flex-row ">
              <Image src={card.imageUrl} priority alt="Card image" className="w-[120px] h-[80px] lg:w-[80px] lg:h-[50px] "/>
                <h2 className="text-[#222222] text-[18px] font-semibold leading-[21px] lg:text-[22px]">{card.title}</h2>
          </div>
          <div className="flex flex-col gap-5 text-center lg:text-start lg:gap-10">
          <h3 className="text-[#000000] text-[14px] leading-[17px] lg:text-[18px] lg:leading-[27px]">{card.text}</h3>
          <button className="w-full h-[41px] rounded-[50px] bg-transparent border border-[#1DBF73] text-[14px] leading-[18px] text-center text-[#1DBF73] transition-all duration-300 hover:bg-[#1DBF73] hover:text-[#F6FAFD] transition:2s">
          Посмотреть
          </button>
          </div>
        </div>
         ))
         }
        <div className="w-full h-[60px] bg-[#F2F0FE] flex items-center justify-center rounded-[20px] md:h-[240px] md:mt-[10px] md:w-[335px] xl:w-[350px] xl:h-[290px] 2xl:w-[480px] transition-all duration-300 hover:scale-105 cursor-pointer">

        <h2 className="text-[#1DBF73] text-[18px] leading-[21px]">Смотреть все ворки</h2>
        </div>
      </div>
      </div>
      <div>
        
      </div>
      <div className="w-full   flex flex-col gap-6 ">
      <h1 className="text-[24px] font-semibold  leading-[29px] tracking-[0.02em]">Актуальные ворки</h1>
      <div className="cards w-full b- grid  grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 2xl:gap-[50px] ">
      {cardstop.map((card) => (
        <div key={card.id} className="w-[335px] h-auto bg-[white] shadow-custom-light rounded-lg p-5 flex flex-col gap-6 lg:gap-8 lg:w-[350px] 2xl:w-[480px] ">
         <div  className="flex  items-center gap-5">
              <Image src={card.personImage} alt="Card image" className="w-[130px] h-[140px] 2xl:w-[180px] 2xl:h-[160px] "/>
               <div className="flex flex-col gap-3 2xl:gap-5">
               <h2 className="text-[#222222] text-[16px] font-semibold leading-[19px] lg:text-[22px]">{card.name}</h2>
               <h2 className="text-[#FBA457] text-[18px] font-semibold leading-[20px] lg:text-[22px]">{card.jobs}</h2>
               <h2 className="text-[#222222] text-[13px] font-semibold leading-[17px] lg:text-[22px]">{card.proyect}</h2>
               <h2 className="text-[#222222] text-[18px] font-semibold leading-[21px] lg:text-[22px]">{card.rating}</h2>
               </div>
          </div>
          <div className="flex flex-col gap-5 text-center lg:text-start lg:gap-10">
          <button className="w-full h-[41px] rounded-[50px] bg-transparent border border-[#1DBF73] text-[14px] leading-[18px] text-center text-[#1DBF73] transition-all duration-300 hover:bg-[#1DBF73] hover:text-[#F6FAFD] transition:2s">
          Посмотреть
          </button>
          </div>
        </div>
         ))
         }
        <div className="w-full h-[60px] bg-[#F2F0FE] flex items-center justify-center rounded-[20px] md:h-[240px] md:mt-[10px] md:w-[335px] xl:w-[350px] xl:h-[290px] 2xl:w-[480px] 2xl:h-[240px] transition-all duration-300 hover:scale-105 cursor-pointer">
          
        <h2 className="text-[#1DBF73] text-[18px] leading-[21px]">Посмотреть всех ТОП фрилансеров</h2>
        </div>
      </div>
      </div>
      <div>
      </div>
      <div className="flex flex-col gap-5  ">
  <h1 className="text-[#000000] text-[21px] leading-[29px]">Как решать задачи на WorkTap?</h1>
  <h2 className="text-[#000000] text-[14px] leading-[19px]">Идеально подходит для бизнеса и частных лиц</h2>
  <div className="flex flex-wrap gap-4 p-6">
    {minicard.map((item, index) => (
      <div key={index} className=" flex flex-col  rounded-lg shadow-lg p-4 w-full sm:w-80 md:w-96 lg:w-1/4">
        <Image priority src={item.IconImg} alt={item.IconImg} className="w-30 h-26 " />
        <h3 className="text-[#000000] text-[18px] font-semibold  mt-4">{item.title}</h3>
        <p className="text-[#333333] text-[14px] leading-[20px] mt-2">{item.desc}</p>
      </div>
    ))}
  </div>
</div>
<div>
</div>
<div className="relative min-h-screen p-10 flex flex-col md:flex-row items-center justify-between">
  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <Image
    priority
      src={layout[0].layoutImg}
      alt="Background"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="text-white flex flex-col gap-[40px] md:mb-[300px] md:ml-[120px] lg:ml-[240px] 2xl:mb-0">
    <h2 className="text-[24px] text-[#FFFFFF] leading-[29px] md:text-[40px] md:leading:[38px]">
      Как WorkTap помогает бизнесу?
    </h2>

    {layout.map((item, index) => (
      <div key={index} className="flex flex-col gap-5 md:gap-10">
        <div className="bg-white text-[#222222] w-full h-[70px] rounded-[20px] flex items-center pl-[10px] gap-3">
          <Image  priority src={item.creditcardimg} alt="Оплата" className="w-[40px] h-[40px]" />
          <p className="text-[12px] leading-[17px]">{item.creditcarta1text}</p>
        </div>

        <div className="bg-white text-[#222222] w-full h-[70px] rounded-[20px] flex items-center pl-[10px] gap-3">
          <Image priority src={item.moneyimg} alt="Экономия бюджета" className="w-8 h-8 mr-3" />
          <p>{item.moneytext}</p>
        </div>

        <div className="bg-white text-[#222222] w-full h-[70px] rounded-[20px] flex items-center pl-[10px] gap-3">
          <Image priority  src={item.clockimg} alt="Экономия времени" className="w-8 h-8 mr-3" />
          <p>{item.clocktext}</p>
        </div>
      </div>
    ))}

    <p className="text-[20px] text-[#F6FAFD] leading-[24.38px]">WorkTap — быстро, просто и безопасно!</p>

    <button className="mt-5 bg-purple-600 text-white py-2 px-4 rounded-lg text-lg">
      Начать!
    </button>
  </div>
</div>

    </div>
  );
}
