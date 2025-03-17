import React, { useEffect, useState } from "react";
import s from "./Problems.module.css";

const allProblems = [
  "Бюджет на рекламу растет, а возврат инвестиций падает",
  "Проблемы с удержанием клиентов",
  "Хаос в процессах",
  "Клиенты выбирают конкурентов",
  "Низкая эффективность рекламных каналов",
  "Высокая стоимость привлечения клиента",
  "Проблемы с квалификацией лидов",
  "Недостаток данных для анализа",
  "Отсутствие персонализации в продажах",
  "Проблемы с квалификацией лидов",
  "Конкуренты предлагают лучше",
  "Долгий цикл сделки",
  "Конкуренты предлагают лучше",
  "Высокий процент оттока клиентов",
  "Эксперименты и новые подходы не приносят результатов",
];

const splitIntoRows = (items: string[], rowCount: number): string[][] => {
  return items.reduce<string[][]>(
    (acc, item, index) => {
      acc[index % rowCount].push(item);
      return acc;
    },
    Array.from({ length: rowCount }, () => [] as string[])
  );
};

const Problems: React.FC = () => {
  const [rows, setRows] = useState(3);

  useEffect(() => {
    const updateRows = () => {
      if (window.innerWidth < 768) {
        setRows(5);
      } else if (window.innerWidth < 1024) {
        setRows(4);
      } else {
        setRows(3);
      }
    };

    updateRows();
    window.addEventListener("resize", updateRows);
    return () => window.removeEventListener("resize", updateRows);
  }, []);

  const problemRows = splitIntoRows(allProblems, rows);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Знакомы проблемы?</h2>
      <div className={s.problemsWrapper}>
        {problemRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`${s.problemRow} ${
              rowIndex % 2 === 0 ? s.scrollRight : s.scrollLeft
            }`}
          >
            {[...row, ...row].map((problem, index) => (
              <div key={index} className={s.problemItem}>
                {problem}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;
