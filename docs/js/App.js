// @flow
import { h } from "../web_modules/preact.js";
import Cards from "./Cards.js";
import Router from "../web_modules/preact-router.js";
import { html } from "../web_modules/htm/preact.js";
import { AppProvider } from "./AppContext.js";

/*::
type Props = {
  url: string
};
*/
const App /*: function */ = (props /*: Props */) => {
  return html`
    <${AppProvider} >
      <${Router} url="${props.url}">
        <${Cards} path="/" />
      </${Router}>
    </${AppProvider} >
  `;
};

export default App;
