import React from 'react'
import ClientWrapper from "@/components/ClientWrapper";
import Countdown from "@/components/Countdown";

const launchDate = '2024-11-20T19:00:00';

const EventDetails = () => {
    return (
        <div className="flex flex-col flexCenter justify-center text-center items-center lg:max-w-5xl mx-auto font-serif px-4 lg:px-8 h-full">
          <h1 className="lg:text-9xl text-5xl font-bold py-3 text-green-900">Soft Toy Workshop</h1>
          <p className="mt-6 lg:text-2xl sm:text-sm text-dark-brown">
            Think Tank 26 | 20 November | 7:00 p.m.
          </p>
          <ClientWrapper>
            <Countdown targetDate={launchDate} />
          </ClientWrapper>

        </div>
    );
  };
  
  export default EventDetails;