// @flow
import { h, hydrate, render } from "../web_modules/preact.js";
import App from "./App.js";
import { html } from "../web_modules/htm/preact.js";

hydrate(html` <${App} /> `, document.getElementById("goodthing"));

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
if (relocate === true && window.location.hostname !== "localhost") {
  window.location.assign("https://shift314.com/decisioncards/#access-cards");
}

// Alternative to load event
// $FlowFixMe
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      const cardPleaseLetMeKnow = document.getElementById(
        "card-please-let-me-know",
      );
      if (cardPleaseLetMeKnow !== null) {
        cardPleaseLetMeKnow.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
      setTimeout(() => {
        const cardInstructions = document.getElementById("card-cover");
        if (cardInstructions !== null) {
          cardInstructions.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }
      }, 2000);
    }, 1000);
    // window.scrollBy({
    //   top: 0,
    //   left: window.innerWidth * 3,
    //   behavior: "smooth",
    // });
  }
};
