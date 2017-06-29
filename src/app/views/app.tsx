"use strict";
import * as React from "react"
import {Component} from "react"

import {Wrapper} from "../../package"
import "./views.css";


export interface AppProps {
  children: string;
}

export class App extends Component<AppProps, undefined> {

  render() {
    const {children} = this.props;

    return (
      <Wrapper className="app">
        <div>
          {children}
        </div>
      </Wrapper>
    )
  }
}
