import React from 'react'
import ClientWrapper from "@/components/ClientWrapper";
import Countdown from "@/components/Countdown";

const launchDate = '2024-11-20T19:00:00';

const EventDetails = () => {
    return (
        <div className="flex flex-col flexCenter justify-center text-center lg:max-w-5xl mx-auto font-serif px-4 sm:px-6 lg:px-8 h-full">
          <h1 className="text-3xl lg:text-4xl sm:text-4xl font-bold py-3">EnROOT Group 7 Soft Toy Workshop</h1>
          <ClientWrapper>
            <Countdown targetDate={launchDate} />
          </ClientWrapper>
          {/* <p className="text-base lg:text-lg sm:text-xs text-light-brown-green max-w-xl mt-4">
            Who does not love cute plushies?? Join us as we make adorable cats, snowmen, and koalas out of socks!! 
          </p> */}
          <p className="mt-2 lg:text-lg sm:text-sm text-light-brown-green">
            Think Tank 26 | 20 November | 7:00 p.m.
          </p>
        </div>
    );
  };
  
  export default EventDetails;