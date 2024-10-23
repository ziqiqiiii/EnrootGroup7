'use client';

import { useEffect, useState, ReactNode } from 'react';

interface ClientWrapperProps {
  children: ReactNode; // Accepts any React component as children
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ClientWrapper;
