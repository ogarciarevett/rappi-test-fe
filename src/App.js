import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import store, { history } from "./configureStore";
import Main from "./layouts/Main";
import List from "./components/List";
import Details from "./layouts/Details";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Main>
              <Route exact path="/items" component={List} />
              <Route exact path="/items/:id" component={Details} />
            </Main>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
