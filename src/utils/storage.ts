import { Items } from "@/types";

class Storage<Data> {
  constructor(private readonly key: string) {}

  public setData(items: Data): void {
    localStorage.setItem(this.key, JSON.stringify(items));
  }

  public getData(): Data {
    return JSON.parse(<string>localStorage.getItem(this.key)) || [];
  }
}

const storage = new Storage<Items>("to-do-list");

export default storage;
