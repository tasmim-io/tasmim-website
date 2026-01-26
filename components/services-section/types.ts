export type ServiceOption = {
  title: string;
  price: string;
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
  icon: string;
  title: string;
  description: string;
  detailsLabel: string;
  details: string[];
  note?: string;
  timelineLabel: string;
  timeline: string;
  investmentLabel: string;
  investment: string;
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
