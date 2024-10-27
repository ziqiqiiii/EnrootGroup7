'use client';

import { useEffect, useState, ReactNode } from 'react';
import Loader from './Loader';

interface ClientWrapperProps {
  children: ReactNode;
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return <div>
      <Loader />
    </div>;
  }

  return <>{children}</>;
};

export default ClientWrapper;

