"use strict";
import * as React from "react"
import * as ReactDOM from "react-dom"

import {App} from "./views/app"
import {addLiveReloadSource, createElement} from "./utils/development"


addLiveReloadSource();
ReactDOM.render(
  <App>
    Hello World!!
  </App>,
  createElement("react.ts-boilerplate")
);
