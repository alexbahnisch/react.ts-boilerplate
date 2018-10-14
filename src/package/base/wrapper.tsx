"use strict";
import * as React from "react"
import {Children, PureComponent} from "react"
import * as _ from "lodash"

const {wrapper} = require("./wrapper.css");


export interface WrapperProps {
  children: any,
  className?: string,
  style?: object
}


export class Wrapper extends PureComponent<WrapperProps, undefined> {

  concatClassNames(...classNames: string[]) : string {
    return _.join(_.filter([this.props.className, ...classNames], (className: string) => (
      className !== undefined)
    ), " ") || undefined;
  }

  mergeStyles(...styles: object[]) {
    return _.assign({}, this.props.style, ...styles);
  }

  render() {
    const {className, style, ...other} = this.props.children.props;

    return React.cloneElement(Children.only(this.props.children),
      {
        className: this.concatClassNames(className, wrapper),
        style: this.mergeStyles(style),
        ...other
      }
    )
  }
}
