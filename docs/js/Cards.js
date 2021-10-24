// @flow
import { h, render } from "../web_modules/preact.js";
import {
  useContext,
  useEffect,
  useState,
} from "../web_modules/preact/hooks.js";
import { html } from "../web_modules/htm/preact.js";
import {
  rawStyles,
  createStyles,
  setSeed,
  keyframes,
} from "../web_modules/simplestyle-js.js";
import { AppContext } from "./AppContext.js";

const seed /*: number */ = parseInt(
  "cards".split("").reduce(
    (acc /*: string */, letter /*: string */) /*: string */ => {
      const letterCode = letter.toLowerCase().charCodeAt(0) - 97 + 1;
      return acc + letterCode.toString();
    },
    "",
  ),
);
setSeed(seed);

rawStyles({
  ol: {
    listStylePosition: "inside",
    paddingInlineStart: "0px",
  },
  li: {
    lineHeight: "1.1rem",
    paddingBottom: ".7rem",
  },
});

const [blink] = keyframes({
  "0%": {
    opacity: "0",
  },
  "50%": {
    opacity: "1",
  },
  "100%": {
    opacity: "0",
  },
});

const [styles] = createStyles({
  container: {
    height: "100%",
    width: "900vw",
    display: "grid",
    gridTemplate: '"a a a a a a a a a"',
  },
  cardContainer1: {
    height: "100%",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    scrollSnapAlign: "start",
    scrollSnapStop: "normal",
    position: "relative",
  },
  cardContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "1rem",
    color: "#333",
  },
  cardBox: {
    width: "95%",
    maxWidth: "400px",
    borderRadius: "21px",
    boxShadow: "5px 5px 5px #00000040",
    backgroundColor: "white",
    overflow: "hidden",
  },
  card: {
    width: "100%",
  },
  heightMachine: {
    height: "0",
    paddingTop: "139.3%",
    position: "relative",
  },
  hide: {
    display: "none",
  },
  cardBoxInside: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    padding: "1.5rem",
    paddingTop: "0.5rem",
  },
  pointer: {
    position: "absolute",
    bottom: "15px",
    right: "15px",
    zIndex: "10",
    maxWidth: "10%",
    filter: "invert(1)",
    animation: `${blink} normal 3s infinite ease-in-out`,
  },
  title: {
    display: "none",
  },
});

/*::
type Props = {
};
*/
const Counter = (props /*: Props */) /*: string */ => {
  // console.log(props.count.isInteger());
  return html`
    <div className="${styles.container}">
      <div className="${styles.cardContainer1}">
        <img class="${styles.pointer}" src="./img/hand-pointing.png" title="" />
        <div className="${styles.cardContainer2}">
          <div className="${styles.cardBox}">
            <img
              class="${styles.card}"
              src="./img/000-1-cover.png"
              title="Cover"
            />
          </div>
        </div>
      </div>
      <div className="${styles.cardContainer1}">
        <div className="${styles.cardContainer2}">
          <div className="${styles.cardBox}">
            <img
              class="${styles.card}"
              src="./img/000-2-instructions.png"
              title="Cover"
            />
          </div>
        </div>
      </div>
      <div className="${styles.cardContainer1}">
        <div className="${styles.cardContainer2}">
          <div className="${styles.cardBox}">
            <img
              class="${styles.card}"
              src="./img/001-i-decide.png"
              title="I decide"
            />
          </div>
        </div>
      </div>
      <div className="${styles.cardContainer1}">
        <div className="${styles.cardContainer2}">
          <div className="${styles.cardBox}">
            <img
              class="${styles.card}"
              src="./img/002-i-decide-after-seeking-advice.png"
              title="I decide after seeing advice"
            />
          </div>
        </div>
      </div>
      <div className="${styles.cardContainer1}">
        <div className="${styles.cardContainer2}">
          <div className="${styles.cardBox}">
            <img
              class="${styles.card}"
              src="./img/003-we-decide-together.png"
              title="We decide together"
            />
          </div>
        </div>
      </div>
      <div className="${styles.cardContainer1}">
        <div className="${styles.cardContainer2}">
          <div className="${styles.cardBox}">
            <img
              class="${styles.card}"
              src="./img/004-i-advise.png"
              title="I advise"
            />
          </div>
        </div>
      </div>
      <div className="${styles.cardContainer1}">
        <div className="${styles.cardContainer2}">
          <div className="${styles.cardBox}">
            <img
              class="${styles.card}"
              src="./img/005-please-let-me-know.png"
              title="Please let me know"
            />
          </div>
        </div>
      </div>
      <div className="${styles.cardContainer1}">
        <div className="${styles.cardContainer2}">
          <div className="${styles.cardBox}">
            <img
              class="${styles.card}"
              src="./img/100-1-SELF Information.png"
              title="SELF Information"
            />
          </div>
        </div>
      </div>
      <div className="${styles.cardContainer1}">
        <div className="${styles.cardContainer2}">
          <div className="${styles.cardBox}">
            <img
              class="${styles.card}"
              src="./img/100-2_More Information.png"
              title="More Information"
            />
          </div>
        </div>
      </div>
    </div>
  `;
};

export default Counter;
