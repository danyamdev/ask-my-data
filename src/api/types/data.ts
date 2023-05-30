export type TFile = {
  chat: string[];
  columns: number;
  datetime: string;
  description: string;
  file_extension: string;
  filename: string;
  headers: string[];
  invalid: number;
  missing: number;
  outliers: number;
  rows: number;
  target: number;
};

export type TTablePage = {
  data: any[];
  pages: number;
};
