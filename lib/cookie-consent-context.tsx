"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";

export type CookiePreferences = {
  necessary: boolean; // Always true, required for site function
  functional: boolean; // Location detection, preferences
  marketing: boolean; // Analytics, third-party embeds like Cal.com
};

type CookieConsentContextType = {
  preferences: CookiePreferences;
  hasConsented: boolean;
  isLoading: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  resetConsent: () => void;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  // Basic functionality such as location-based pricing is treated as essential.
  functional: true,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType>({
  preferences: defaultPreferences,
  hasConsented: false,
  isLoading: true,
  acceptAll: () => {},
  acceptNecessary: () => {},
  updatePreferences: () => {},
  resetConsent: () => {},
});

const CONSENT_STORAGE_KEY = "tasmim_cookie_consent";
const PREFERENCES_STORAGE_KEY = "tasmim_cookie_preferences";

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load saved preferences on mount
  useEffect(() => {
    // Read from storage synchronously, then update state in a microtask
    const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    const savedPreferences = localStorage.getItem(PREFERENCES_STORAGE_KEY);

    queueMicrotask(() => {
      if (savedConsent === "true" && savedPreferences) {
        try {
          const parsed = JSON.parse(savedPreferences) as CookiePreferences;
          setPreferences({
            ...defaultPreferences,
            ...parsed,
            necessary: true,
          });
          setHasConsented(true);
        } catch {
          // Invalid stored data, reset
          localStorage.removeItem(CONSENT_STORAGE_KEY);
          localStorage.removeItem(PREFERENCES_STORAGE_KEY);
        }
      }
      setIsLoading(false);
    });
  }, []);

  const savePreferences = useCallback((prefs: CookiePreferences) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, "true");
    localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setHasConsented(true);
  }, []);

  const acceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  }, [savePreferences]);

  const acceptNecessary = useCallback(() => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      functional: true,
      marketing: false,
    };
    savePreferences(necessaryOnly);
  }, [savePreferences]);

  const updatePreferences = useCallback(
    (prefs: Partial<CookiePreferences>) => {
      const newPrefs = { ...preferences, ...prefs, necessary: true };
      savePreferences(newPrefs);
    },
    [preferences, savePreferences],
  );

  const resetConsent = useCallback(() => {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    localStorage.removeItem(PREFERENCES_STORAGE_KEY);
    setPreferences(defaultPreferences);
    setHasConsented(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasConsented,
        isLoading,
        acceptAll,
        acceptNecessary,
        updatePreferences,
        resetConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
};
