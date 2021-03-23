export interface Item {
  id: string;
  text: string;
}

export type Items = Array<Item>;

export interface Data {
  value: string;
  items: Items;
}
