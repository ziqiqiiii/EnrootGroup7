'use client';
import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex space-x-8 text-center">
      <div className="flex flex-col">
        <span className="text-6xl font-bold">{timeLeft.days || '0'}</span>
        <span className="text-lg">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-6xl font-bold">{timeLeft.hours || '0'}</span>
        <span className="text-lg">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="text-6xl font-bold">{timeLeft.minutes || '0'}</span>
        <span className="text-lg">Minutes</span>
      </div>
      <div className="flex flex-col">
        <span className="text-6xl font-bold">{timeLeft.seconds || '0'}</span>
        <span className="text-lg">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
