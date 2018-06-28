import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import createHistory from "history/createHashHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

import rootReducer from "../reducers/index";
import MatchProps from "./MatchProps";

const App = () => {
  const history = createHistory();
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(routerMiddleware(history)))
  );
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={MatchProps} />
      </ConnectedRouter>
    </Provider>
  );
};

export { App };
