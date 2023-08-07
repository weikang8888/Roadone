import React, { createContext, useState, useContext, ReactNode } from "react";

export type Service = "tyre" | "guestbook" | "download";

interface ServiceContextData {
  activeService: Service | null;
  setActiveService: React.Dispatch<React.SetStateAction<Service | null>>;
}

const ServiceContext = createContext<ServiceContextData | undefined>(undefined);

export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServiceContext must be used within a ServiceProvider");
  }
  return context;
};

interface ServiceProviderProps {
  children: ReactNode;
}

export const ServiceProvider: React.FC<ServiceProviderProps> = ({
  children,
}) => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <ServiceContext.Provider value={{ activeService, setActiveService }}>
      {children}
    </ServiceContext.Provider>
  );
};
