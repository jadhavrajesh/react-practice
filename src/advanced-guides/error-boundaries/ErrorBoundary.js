import React from "react";

// this is Error Boundary component that catches the error in componentDidCatch & shows on the page.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // catch error here or send error to error logging/reporting service
    console.log(error);
    console.log(errorInfo);
  }

  static getDerivedStateFromError(error) {
    // invoked after an error has been thrown & it should return a value to update the state
    return error;
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="border-black text-color-red">
          <h1>Inside ErrorBoundary</h1>
          <p>{error.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// this is Buggy Component that throws a error & it is wrapped under Error Boundary component
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
        <button onClick={this.handleClick}>Click here</button>
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
