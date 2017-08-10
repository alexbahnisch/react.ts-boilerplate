"use strict";
import * as React from "react"
import * as ReactDOM from "react-dom"

import {App} from "./views/app"
import {createElement} from "./utils/development"


ReactDOM.render(
  <App>
    Hello World!!
  </App>,
  createElement("react.ts-boilerplate")
);
