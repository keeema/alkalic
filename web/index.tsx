import * as b from "bobril";
import "bobrilstrap";
import { mainRoute, searchRoute } from "./src/routes";
import { initGlobalization } from "bobril-g11n";

initGlobalization({ defaultLocale: "cs-CZ" }).then(() => {
  b.routes(
    b.route(mainRoute, [b.route(searchRoute), b.routeDefault(searchRoute)])
  );
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(b.asset("project:../serviceWorker"))
    .then(() => console.log("BB Service Worker Registered"));
}
