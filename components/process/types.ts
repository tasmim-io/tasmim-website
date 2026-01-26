export type ClarityVisual = {
  type: "clarity";
  title: string;
  meta: string;
  statusText: string;
};

export type ProposalVisual = {
  type: "proposal";
  fileName: string;
  timelineLabel: string;
  timelineValue: string;
  investmentLabel: string;
  investmentValue: string;
  buttonText: string;
};

export type SprintTask = {
  text: string;
  done: boolean;
};

export type SprintVisual = {
  type: "sprint";
  title: string;
  statusText: string;
  tasks: SprintTask[];
  commentAuthor: string;
  commentText: string;
};

export type LaunchVisual = {
  type: "launch";
  title: string;
  subtitle: string;
};

export type StepVisual =
  | ClarityVisual
  | ProposalVisual
  | SprintVisual
  | LaunchVisual;

export type ProcessStep = {
  id: string;
  title: string;
  duration: string;
  description: string;
  requirement: string;
  visual: StepVisual;
};

export type ProcessData = {
  headline: string;
  steps: ProcessStep[];
  philosophyStatement: string;
};
