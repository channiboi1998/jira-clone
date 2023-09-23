export enum IssueStatus {
  OPEN = "open",
  STARTED = "started",
  DONE = "done",
}

export type Issue = {
  id: string;
  position: number;
  title: string;
  status: IssueStatus;
  shortDesc?: string;
  code: string;
};

export type Data = {
  issues: Issue[];
};

export const data: Data = {
  issues: [
    {
      id: "0",
      position: 0,
      title: "QA Functional Test",
      status: IssueStatus.OPEN,
      shortDesc: "Welcome Treat - (Unique Promo Code)",
      code: "VOY-628",
    },
    {
      id: "1",
      position: 1,
      title: "Create Sidebar UI",
      status: IssueStatus.OPEN,
      code: "VOY-629",
    },
  ],
};
