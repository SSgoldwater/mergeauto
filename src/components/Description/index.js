import React, { Component } from 'react';
import styles from './styles';

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const _styles = styles[this.props.responsive];

    return (
      <div style={ _styles.container }>
        <h1>
          Merge Motor Group brings you as
          close to dealer prices as possible.
        </h1>
        <p>
          Submit a simple form telling us what you're
          interested in, and within 24 hours we will
          contact you with hand-selected vehicles at
          auctions and dealerships right now that
          match your search.
        </p>
      </div>
    );
  }
};

export default Description;
