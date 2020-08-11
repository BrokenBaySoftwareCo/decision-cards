// OFF:@flow
import { h, hydrate, render } from "../web_modules/preact.js";
import screenfull from "../web_modules/screenfull.js";
import App from "./App.js";
import htm from "../web_modules/htm.js";

// Flow
/*::
import typeof HtmType from "../web_modules/htm.js";
import typeof {
  h as HType,
  render as RenderType,
} from "../web_modules/preact.js";
import typeof AppType from "./App.js";
*/

const html = htm.bind(h);

// NOTE: `hydrate()` doesn't work with `simplestyle-js` - the
// class names don't match when the page is hydrated
hydrate(html` <${App} /> `, document.getElementById("goodthing"));

// Doesn't work on iPhone ~ https://caniuse.com/#feat=fullscreen
// Plus we only want fullscreen on touch devices
if (Modernizr.hasEvent("touchend") && screenfull.isEnabled) {
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
    document.body.style.height = window.innerHeight + "px";
    document.body.parentNode.style.height = window.innerHeight + "px";
    document.getElementById("goodthing").style.height =
      window.innerHeight + "px";
  };
  window.onresize(); // called to initially set the height.
}
