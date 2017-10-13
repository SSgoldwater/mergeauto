import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-scroll';
import styles from './styles';

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageHeight: window.innerHeight
    };
  }

  render() {
    const _styles = styles[this.props.responsive];

    return (
      <div style={ _styles.container }>
        <h1 style={ _styles.title }>
          Merge Motor Group brings you as
          close to dealer prices as possible.
        </h1>
        <h4 style={ _styles.description }>
          Submit a simple form telling us what you're
          interested in, and within 24 hours we will
          contact you with hand-selected vehicles at
          auctions and dealerships right now that
          match your search.
        </h4>
        <div style={ _styles.why }>
          <h3 style={ _styles.subheader }>
            Why broker?
          </h3>
          <p style={ _styles.description }>
            Going with a broker is the best way to know
            that you have someone on your side during a car
            buying experience. It's like having a friend
            in the business. Expect full transperency and
            a personal touch unparalleled in the auto-sales
            world.
          </p>
        </div>
        <Link
          to={ `form` }
          smooth
          duration={ 500 }
          offset={ -80 }
        >
          <RaisedButton
            primary
            style={ _styles.getStartedButton }
            label={ `Lets get started` }
          />
        </Link>
      </div>
    );
  }
};

export default Description;
