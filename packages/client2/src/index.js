import "./polyfill";
import ready from "@lskjs/utils/polyfill";
import Loadable from "react-loadable";
import Uapp from "./Uapp";
import ReactApp from "@lskjs/reactapp";
import "./index.css";
ready();

const config = {
  i18: {}
};

const app = new ReactApp({
  Uapp,
  config
});
global.app = app;
app.start();

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
