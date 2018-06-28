import { render } from "react-dom";

// components
import { App } from "./components/App";

// helper functions, CSS
import registerServiceWorker from "./registerServiceWorker";

render(App(), document.getElementById("root"));
registerServiceWorker();
