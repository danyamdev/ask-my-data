export type THint = {
  goal: string;
  hint: string;
};

export type TAsk = {
  answer: string;
  hints: THint[];
};
