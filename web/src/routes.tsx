import * as b from "bobril";
import { Main } from "./main";
import { Search } from "./search/search";

export const mainRoute: b.IRouteConfig = {
  handler: data => <Main {...data} />
};

export const searchRoute: b.IRouteConfig = {
  url: "search",
  name: "search",
  handler: data => <Search {...data} />
};
