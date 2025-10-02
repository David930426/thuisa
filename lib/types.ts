export type EventData = {
  name: string;
  img?: string;
  day?: number;
  month: string;
  year: number;
  subInfo: string;
  type: string;
  who: string;
  location: string;
  about: string;
  activities?: string[];
  reasons?: string[];
  note?: string;
  noTicket?: boolean;
};

export type Member = {
  name: string;
  role: string;
  img?: string;
  head?: boolean;
}