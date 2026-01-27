type Currency = "EGP" | "EUR";

type Pricing = {
  egp: { min: number; max: number };
  eur: { min: number; max: number };
  perMonth?: boolean;
};

/**
 * Formats a number with thousand separators
 */
const formatNumber = (num: number): string => {
  return num.toLocaleString("en-US");
};

/**
 * Formats a price range with the currency on the right side
 * Example: "15,000 - 25,000 EGP" or "5,000 - 25,000 EGP / month"
 */
export const formatPrice = (pricing: Pricing, currency: Currency): string => {
  const { min, max } = currency === "EGP" ? pricing.egp : pricing.eur;
  const suffix = pricing.perMonth ? ` / month` : "";

  return `${formatNumber(min)} - ${formatNumber(max)} ${currency}${suffix}`;
};
