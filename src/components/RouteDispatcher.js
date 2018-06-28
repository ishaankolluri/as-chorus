import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import SingleView from "./SingleView";

class RouteDispatcher extends React.Component {
  componentWillMount() {
    console.log("Should fetch data here");
    this.props.fetchData();
    console.log("fetched?");
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Switch {...this.props}>
          <Route exact path="/" render={() => <Dashboard {...this.props} />} />
          <Route
            exact
            path="/:graphId"
            render={() => <SingleView {...this.props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default RouteDispatcher;
