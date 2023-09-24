export enum IssueStatus {
  OPEN = "open",
  STARTED = "started",
  DONE = "done",
}

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

export type Data = {
  issues: Issue[];
  columns: Column;
};

export const data: Data = {
  columns: {
    open: {
      id: "open",
      ids: ["000", "001"],
    },
    started: {
      id: "started",
      ids: ["002"],
    },
    done: {
      id: "done",
      ids: ["003"],
    },
  },
  issues: [
    {
      id: "000",
      title: "QA Functional Test",
      shortDesc: "Welcome Treat - (Unique Promo Code)",
      code: "VOY-628",
    },
    {
      id: "001",
      title: "Create Sidebar UI",
      code: "VOY-629",
    },
    {
      id: "002",
      title: "Utility Cleanup",
      code: "VOY-630",
    },
    {
      id: "003",
      title: "Greenwich Logo",
      code: "VOY-631",
    },
    {
      id: "004",
      title: "Header Section",
      code: "VOY-632",
    },
  ],
};
