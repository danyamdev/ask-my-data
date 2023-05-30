export type THint = {
  query: string;
  goal: string;
};

export type TAsk = {
  answer: string;
  hints: THint[];
};
