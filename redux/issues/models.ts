export type Issue = {
  id: string;
  title: string;
  shortDesc?: string;
  code: string;
};

export type Column = {
  [key: string]: {
    id: string;
    ids: string[];
  };
};

export type InitialState = {
  issues: Issue[];
  columns: Column;
};
