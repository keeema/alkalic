import * as b from "bobril";
import { observable } from "bobx";

interface IFoodJson {
  items: IFood[];
}

export interface IFood {
  name: string;
  pH: number;
}

class Data {
  @observable
  items: IFood[] = [];

  async init(): Promise<void> {
    const jsonContent = await (await fetch(b.asset("./food.json"))).text();
    this.items = (JSON.parse(jsonContent) as IFoodJson).items;
  }
}

export const data = new Data();
data.init();
