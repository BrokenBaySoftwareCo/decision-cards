// @flow
import { h, hydrate, render } from "../web_modules/preact.js";
import App from "./App.js";
import { html } from "../web_modules/htm/preact.js";

hydrate(html` <${App} /> `, document.getElementById("goodthing"));

// Doesn't work on iPhone ~ https://caniuse.com/#feat=fullscreen
// Plus we only want fullscreen on touch devices
// $FlowFixMe
if (Modernizr.hasEvent("touchend") && screenfull.isEnabled) {
  // $FlowFixMe
  document.getElementById("goodthing").addEventListener(
    "touchend",
    () => {
      screenfull.request();
    },
    { once: true },
  );
}

// Fix for iOS not handling viewport height the same way as everyone else
if (
  typeof window !== "undefined" &&
  !!navigator.platform &&
  /iPad|iPhone|iPod/.test(navigator.platform)
) {
  // it's probably an iPhone
  window.onresize = function () {
    // $FlowFixMe
    document.body.style.height = window.innerHeight + "px";
    // $FlowFixMe
    document.body.parentNode.style.height = window.innerHeight + "px";
    // $FlowFixMe
    document.getElementById("goodthing").style.height =
      window.innerHeight + "px";
  };
  window.onresize(); // called to initially set the height.
}

// Cookie redirect
const name = "shift314-decision-cards";
const cDecoded = decodeURIComponent(document.cookie);
const cArr = cDecoded.split("; ");
let relocate = true;
cArr.forEach((val) => {
  if (val.indexOf(name) === 0) {
    relocate = false;
  }
});
if (relocate === true) {
  window.location.assign("https://shift314.com/decisioncards/#access-cards");
}
