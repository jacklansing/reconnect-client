import React, { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return (
        <section className="ErrorBoundary">
          <h2>Uff! A serious error occurred.</h2>
          <p>
            Sorry about that. Please try navigating to a different page or
            refresh your browser.
          </p>
        </section>
      );
    } else return this.props.children;
  }
}
export default ErrorBoundary;
