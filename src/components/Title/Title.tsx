import { IoLogoWhatsapp } from "react-icons/io";
import s from "./Title.module.css";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";

const Title = () => {
  return (
    <div className={s.titleContainer}>
      <h1 className={s.title}>
        ИИ⁠-⁠ассистент
        <br /> для бизнеса
      </h1>
      <h4 className={s.subtitle}>
        Привлекает потенциальных клиентов в воронку прогрева, обрабатывает
        входящие заявки и доводит их до покупки без участия менеджеров в чате
      </h4>
      <p className={s.feature}>
        <img
          src="/src/assets/diamond.svg"
          alt="diamond"
          className={s.diamond}
        />
        Сокращение расходов на зарплаты менеджеров до 80%
      </p>
      <p className={s.feature}>
        <img
          src="/src/assets/diamond.svg"
          alt="diamond"
          className={s.diamond}
        />
        Исключены человеческие ошибки, неточности и раздражение
      </p>
      <p className={s.feature}>
        <img
          src="/src/assets/diamond.svg"
          alt="diamond"
          className={s.diamond}
        />
        Увеличение конверсии в продажи или брони на 30%
      </p>
      <h5 className={s.useFor}>Используйте для:</h5>
      <ul className={s.buttonList}>
        <li className={s.item}>
          <button className={`${s.whatsappButton} ${s.button}`}>
            <IoLogoWhatsapp className={s.svg} />
            WhatsApp
          </button>
        </li>
        <li className={s.item}>
          <button className={`${s.telegramButton} ${s.button}`}>
            <RiTelegram2Fill className={s.svg} />
            Telegram
          </button>
        </li>
        <li className={s.item}>
          <button className={`${s.websiteButton} ${s.button}`}>
            <FaGlobe className={s.svg} />
            Веб-сайт
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Title;
