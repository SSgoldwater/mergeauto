import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { NavLink } from 'react-router-dom';
import Logo from 'assets/logo.jpg';
import AppStore from 'stores/AppStore';
import history from 'utils/history';
import styles from './styles';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _styles = styles;

    const _logo = (
      <img
        src={ Logo }
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

    return (
      <div>
        <AppBar
          style={ styles.appBar }
          title={ `Don't go broke, go broker` }
          titleStyle={ _styles.title }
          iconElementLeft={ _logo }
          onLeftIconButtonTouchTap={ () => history.push(`/`) }
          iconElementRight={ _myMerge }
        />
        { this.props.children }
      </div>
    )
  }
}

export default Navigation;
