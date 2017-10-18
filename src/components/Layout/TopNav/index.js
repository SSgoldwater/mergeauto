import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Logo from 'assets/logo.jpg';
import styles from './styles';

class TopNav extends Component {
  render() {
    const _styles = styles[this.props.responsive];

    const _logo = (
      <img
        src={ `http://mergemotorgroup.s3-website-us-west-1.amazonaws.com/merge_brokers_logo.jpg` }
        style={ _styles.logo }
      />
    );

    const _myMerge = (
      <Paper
        style={ _styles.myMergeContainer }
        zDepth={ 2 }
      >
        <div>MyMerge</div>
        <div style={ _styles.signInContainer }>
          <p style={ _styles.myMergeLink }>
            Sign-in | Register
          </p>
          <p style={ _styles.myMergeLink }>
            Make a payment
          </p>
        </div>
      </Paper>
    );

    return this.props.responsive === `desktop` ? (
      <AppBar
        style={ _styles.appBar }
        title={ `Don't go broke, go broker` }
        titleStyle={ _styles.title }
        iconElementLeft={ _logo }
        onLeftIconButtonTouchTap={ () => history.push(`/`) }
        iconElementRight={ _myMerge }
      />
    ) : (
      <div>
        <AppBar
          style={ _styles.appBar }
          title={ _logo }
          titleStyle={ _styles.title }
          showMenuIconButton={ false }
          onLeftIconButtonTouchTap={ () => history.push(`/`) }
        />
        <h3 style={ _styles.subTitle }>
          Dont go broke, go broker.
        </h3>
      </div>
    );
  }
};

export default TopNav
