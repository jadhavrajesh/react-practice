import React, { useState } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // catch error here or send error to error logging/reporting service
    this.setState({ error, errorInfo });
  }

  render() {
    const { error, errorInfo } = this.state;
    if (error) {
      return (
        <div className="border-black text-color-red">
          <h1>Inside ErrorBoundary</h1>
          <p>{error.toString()}</p>
          <p>{errorInfo.componentStack}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

class BuggyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ buttonClicked: true });
  }

  render() {
    if (this.state.buttonClicked) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }

    return (
      <div className="border-black">
        <h1 className="italic-text">Inside BuggyComponent</h1>
        <button
          onClick={this.handleClick}
          disabled={!!this.state.buttonClicked}
        >
          Click here
        </button>
      </div>
    );
  }
}
function Widget() {
  return (
    <ErrorBoundary>
      <h1>Inside Widget Component</h1>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default Widget;
