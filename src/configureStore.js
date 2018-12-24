import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import saga from "./saga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const composer = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools;
export const history = createBrowserHistory();

export default createStore(
  rootReducer(history),
  composer(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
);
sagaMiddleware.run(saga);
