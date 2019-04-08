import BaseUapp from "@lskjs/uapp";

import IndexPage from "./IndexPage";

export default class Uapp extends BaseUapp {
  getRoutes() {
    return {
      // action: ({ page }) => page.component('Hello World')
      action: ({ page }) => page.component(IndexPage, { title: "Hello World" })
    };
  }
}
