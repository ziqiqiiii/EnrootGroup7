'use client';
import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    const handleResize = (() => {
      setIsMobile(window.innerWidth <= 768);
    })

    window.addEventListener('resize', handleResize);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ].filter(unit => !(isMobile && unit.label === 'Seconds'));

  return (
    <div className="bg-emerald-900 bg-opacity-10 rounded-5xl my-8 lg:mt-20 mt-14 hover:bg-opacity-20">
      <div className="flex flex-wrap justify-center lg:space-x-8 space-x-5 items-center lg:my-10 my-5 lg:mx-8 mx-3">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col lg:w-40 w-20  text-green-900 text-center items-center">
            <span className={`text-7xl md:text-9xl font-bold font-serif`}>{unit.value}</span>
            <span className="text-lg mt-6">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Countdown;

