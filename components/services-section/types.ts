export type Pricing = {
  egp: { min: number; max: number };
  eur: { min: number; max: number };
  perMonth?: boolean;
};

export type ServiceOption = {
  title: string;
  pricing: Pricing;
  timeline: string;
  items: string[];
};

export type MainService = {
  id: string;
  title: string;
  icon: string;
  description: string;
  problemTitle: string;
  problemText: string;
  benefitsTitle: string;
  benefits: string[];
  optionsLabel: string;
  options: ServiceOption[];
};

export type SupportingService = {
  id: string;
  icon: string;
  title: string;
  description: string;
  detailsLabel: string;
  details: string[];
  note?: string;
  timelineLabel: string;
  timeline: string;
  investmentLabel: string;
  pricing: Pricing;
};

export type BundleData = {
  title: string;
  text: string;
};

export type CtaData = {
  title: string;
  text: string;
  buttonText: string;
};
