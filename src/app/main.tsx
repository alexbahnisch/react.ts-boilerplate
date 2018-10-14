"use strict";
import * as React from "react"
import * as ReactDOM from "react-dom"
import {Provider} from "react-redux"

import {store} from "./ducks"
import {App} from "./views/app"
import {createElement} from "./utils/development"
import "./main.css"


ReactDOM.render(
  <Provider store={store}>
    <App>
      Hello World!!
    </App>
  </Provider>,
  createElement("react.ts-boilerplate")
);
