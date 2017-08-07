"use strict";
import * as React from "react"
import {Component} from "react"

// TODO replace "../../package" with "package" when IDE can trace webpack.config.resolve.alias
import {Wrapper} from "../../package"
import "./styles.css"


export interface AppProps {
  children: string;
}

export class App extends Component<AppProps, undefined> {

  render(): JSX.Element {
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
