export type Story = {
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
  stories: Story[];
  columns: Column;
};
