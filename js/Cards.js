// @flow
import { h, render } from "../web_modules/preact.js";
import {
  useContext,
  useEffect,
  useState,
} from "../web_modules/preact/hooks.js";
import htm from "../web_modules/htm.js";
import {
  rawStyles,
  createStyles,
  setSeed,
  keyframes,
} from "../web_modules/simplestyle-js.js";
import { AppContext } from "./AppContext.js";

const html = htm.bind(h);
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
  },
  li: {
    lineHeight: "1.5rem",
    paddingBottom: "1rem",
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
    width: "700vw",
    display: "grid",
    gridTemplate: '"a a a a a a a"',
  },
  cardContainer: {
    height: "100%",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    scrollSnapAlign: "start",
    scrollSnapStop: "normal",
    fontSize: "1rem",
    color: "#333",
    position: "relative",
  },
  card: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "95%",
    maxWidth: "400px",
    borderRadius: "17px",
    boxShadow: "5px 5px 5px #00000040",
  },
  hide: {
    display: "none",
  },
  titleCard: {
    "& > h1": {
      display: "none",
    },
    "& > h2": {
      display: "none",
    },
    backgroundImage: 'url("/img/cover.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  cardBox: {
    height: "0",
    overflow: "hidden",
    backgroundColor: "white",
    paddingTop: "calc(2073/1448 * 92.5%)",
    position: "relative",
  },
  cardBoxInside: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    paddingRight: "1.5rem",
  },
  instructionCardBoxInside: {
    paddingRight: "1.5rem",
  },
  pointer: {
    position: "absolute",
    top: "15px",
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
  count: number | typeof undefined
};
*/
const Counter = (props /*: Props */) => {
  // console.log(props.count.isInteger());
  return html`
    <div className="${styles.container}">
      <div className="${styles.cardContainer}">
        <div className="${styles.card} ${styles.cardBox} ${styles.titleCard}">
          <div className="${styles.cardBoxInside}">
            <h1 className="${styles.hide}">Agilitrix Decision Cards</h1>
            <h2 className="${styles.hide}">
              Unlocking high performance one decision at a time
            </h2>
          </div>
          <img
            class="${styles.pointer}"
            src="./img/hand-pointing.png"
            title=""
          />
        </div>
      </div>
      <div className="${styles.cardContainer}">
        <div
          className="${styles.card} ${styles.cardBox} ${styles.instructionCard}"
        >
          <div
            className="${styles.card} ${styles.cardBoxInside} ${styles.instructionCardBoxInside}"
          >
            <ol>
              <h3>Instructions:</h3>
              <li>Pick a decision that needs to be made. Explain it</li>
              <li>
                Make sure everyone has a hand of 5 decision cards or this URL
              </li>
              <li>
                Everyone secretly picks a card indicating their role in the
                decision
              </li>
              <li>When everyone is ready, reveal the cards</li>
              <li>
                If there is agreement about who the owners are, wonderful!
              </li>
              <li>
                If there is disagreement, have everyone share their thinking.
                Then repeat card selection.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="${styles.cardContainer}">
        <img
          class="${styles.card}"
          src="./img/001-i-decide.png"
          title="I decide"
        />
      </div>
      <div className="${styles.cardContainer}">
        <img
          class="${styles.card}"
          src="./img/002-i-decide-after-seeking-advice.png"
          title="I decide after seeing advice"
        />
      </div>
      <div className="${styles.cardContainer}">
        <img
          class="${styles.card}"
          src="./img/003-we-decide-together.png"
          title="We decide together"
        />
      </div>
      <div className="${styles.cardContainer}">
        <img
          class="${styles.card}"
          src="./img/004-i-advise.png"
          title="I advise"
        />
      </div>
      <div className="${styles.cardContainer}">
        <img
          class="${styles.card}"
          src="./img/005-please-let-me-know.png"
          title="Please let me know"
        />
      </div>
    </div>
  `;
};

export default Counter;
