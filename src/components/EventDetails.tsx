import React from 'react'
import ClientWrapper from "@/components/ClientWrapper";
import Countdown from "@/components/Countdown";

const launchDate = '2024-11-20T19:00:00';

const EventDetails = () => {
    return (
        <div className="flex flex-col flexCenter text-center max-w-5xl mx-auto font-serif">
          <h1 className="text-5xl font-bold py-3 italic ">EnROOT Group 7 Soft Toy Workshop</h1>
          <ClientWrapper>
            <Countdown targetDate={launchDate} />
          </ClientWrapper>
          <p className="text-lg text-gray-700 max-w-xl">
            Who does not love cute plushies?? Join us as we make adorable cats, snowmen, and koalas out of socks!! Come down to learn a new skill and relax while making new friends.  
          </p>
          <p className="mt-2 text-gray-500">
            Location: Think Tank 26 | Day: 20 November | Time: 7:00 PM SGT
          </p>
        </div>
    );
  };
  
  export default EventDetails;