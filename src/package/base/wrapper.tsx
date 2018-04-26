"use strict";
import * as React from "react"
import {Children, PureComponent} from "react"

import {pureAssign} from "../utils"
import "./styles.css"


export interface WrapperProps {
  children: any,
  className?: string,
  style?: object
}


export class Wrapper extends PureComponent<WrapperProps, undefined> {

  concatClassNames(...classNames: string[]) : string {
    return [this.props.className, ...classNames].filter((className) => (className !== undefined)).join(" ") || undefined
  }

  mergeStyles(...styles: object[]) {
    return pureAssign(this.props.style, ...styles);
  }

  render() {
    const {className, style, ...other} = this.props.children.props;

    return React.cloneElement(Children.only(this.props.children),
      {
        className: this.concatClassNames(className),
        style: this.mergeStyles(style),
        ...other
      }
    )
  }
}
