import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null  };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <>
        <h1>Something went wrong.</h1>
        {this.state.error && this.state.error.toString()}
        <br />
        {this.state.errorInfo.componentStack}
      </>
    }
    return this.props.children;
  }
}
