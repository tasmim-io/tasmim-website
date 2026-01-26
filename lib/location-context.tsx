"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Currency = "EGP" | "EUR";

type LocationContextType = {
  isEgyptian: boolean;
  currency: Currency;
  isLoading: boolean;
};

const LocationContext = createContext<LocationContextType>({
  isEgyptian: true,
  currency: "EGP",
  isLoading: true,
});

const STORAGE_KEY = "tasmim_user_country";

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [isEgyptian, setIsEgyptian] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      // Check localStorage first
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        setIsEgyptian(cached === "EG");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch("http://ip-api.com/json/?fields=countryCode");
        if (!response.ok) throw new Error("Failed to fetch location");
        
        const data = await response.json();
        const countryCode = data.countryCode || "EG";
        
        // Cache the result
        localStorage.setItem(STORAGE_KEY, countryCode);
        setIsEgyptian(countryCode === "EG");
      } catch {
        // Default to Egypt on error
        setIsEgyptian(true);
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  const currency: Currency = isEgyptian ? "EGP" : "EUR";

  return (
    <LocationContext.Provider value={{ isEgyptian, currency, isLoading }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
