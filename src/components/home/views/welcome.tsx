import React, { FC, useEffect, useState } from "react";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  addYears,
  addMonths,
} from "date-fns";

interface WelcomeProps {
  prop?: string;
}

interface AgeCounterProps {
  startDate: string; // Fecha de inicio en formato YYYY-MM-DD
}

const AgeCounter: React.FC<AgeCounterProps> = ({ startDate }) => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const start = new Date(startDate);
      const now = new Date();

      const yearsDifference = differenceInYears(now, start);
      const monthsDifference = differenceInMonths(
        now,
        addYears(start, yearsDifference),
      );
      const daysDifference = differenceInDays(
        now,
        addYears(addMonths(start, monthsDifference), yearsDifference),
      );

      setYears(yearsDifference);
      setMonths(monthsDifference);
      setDays(daysDifference);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000 * 60 * 60 * 24); // Actualizar cada día

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div>
      <div className="font-serif text-4xl text-blue-700">
        {years > 0 && `${years} años, `}
        {months} meses, {days} días
      </div>
    </div>
  );
};

export const Welcome: FC<WelcomeProps> = () => {
  return (
    <div className="flex flex-col gap-8 bg-red-50 justify-center items-center h-[60vh] text-center">
      <p className="font-serif text-4xl">Tiempo que vamos juntos</p>
      <p className="font-extralight text-xl">
        <AgeCounter startDate="2023-08-25" />
      </p>
      <p className="font-serif text-2xl">Y espero que sean mucho más</p>
      <p className="font-bold text-2xl">Te Quiero</p>
      <p className="font-bold text-4xl text-red-800">MI MOSHITO!!!</p>
    </div>
  );
};

export default Welcome;
