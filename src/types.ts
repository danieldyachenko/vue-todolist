export interface IItem {
  id: string;
  text: string;
}

export type Items = Array<IItem>;

export interface Data {
  value: string;
  items: Items;
}
