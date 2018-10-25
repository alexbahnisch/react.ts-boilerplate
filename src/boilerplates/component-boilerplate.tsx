"use strict";
import * as React from "react"
import {Component, ErrorInfo} from "react";


interface Props {
  children?: any
}


interface State {
}


type SnapShot = any


export class ComponentBoilerplate extends Component<Props, State> {
  static displayName = "ComponentBoilerplate";
  static defaultProps = {};

  _element: Element;

  /**
   * Called first when mounting.
   */
  constructor(props: Props) {
    super(props);
    console.log(`${ComponentBoilerplate.displayName}.constructor(props)`)
  }

  /**
   * Derives new state when mounting/updating,returns an object which is a subset of State or null.
   * Called second when mounting.
   * Called first when updating.
   */
  static getDerivedStateFromProps(props: Props, state: State): object | null {
    console.log(`${ComponentBoilerplate.displayName}.getDerivedStateFromProps(props, state)`);
    return null;
  }

  /**
   * Called forth/last when mounting.
   */
  componentDidMount(): void {
    console.log(`${ComponentBoilerplate.displayName}.componentDidMount()`)
  }

  /**
   * Called second when updating.
   * Return value dictates if further updating lifecycle hooks are called.
   */
  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    console.log(`${ComponentBoilerplate.displayName}.shouldComponentUpdate(nextProps, nextState)`);
    return true;
  }

  /**
   * Called forth when updating.
   */
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State): SnapShot {
    console.log(`${ComponentBoilerplate.displayName}.getSnapshotBeforeUpdate(nextProps, nextState)`);
    return {}
  }

  /**
   * Called fifth/last when updating.
   */
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: SnapShot): void {
    console.log(`${ComponentBoilerplate.displayName}.componentDidUpdate(nextProps, nextState, snapShot)`);
  }

  /**
   * Called when un-mounting.
   */
  componentWillUnmount(): void {
    console.log(`${ComponentBoilerplate.displayName}.componentWillUnmount(nextProps, nextState, snapShot)`);
  }

  /**
   * Called when there is an error during rendering, in a lifecycle hook, or in the constructor of any child component.
   */
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(`${ComponentBoilerplate.displayName}.componentDidCatch(error, info)`);
  }

  /**
   * Called third when mounting.
   * Called third when updating.
   */
  render(): any {
    const {children} = this.props;

    return (
      <div ref={(element) => {
        this._element = element
      }}>
        {children}
      </div>
    )
  }
}
