import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import styles from './styles';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: ``
    };
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      this.props.setDetails(nextState);
    }
  }

  _updateDetails = (e, value) => {
    this.setState({ details: e.target.value });
  }

  render() {
    const _styles = styles[this.props.responsive];

    return (
      <Paper style={ _styles.contentPaper }>
        <h4>Explain in your own words.</h4>
        <p>Don't feel like our pre-made form captures the essence of the vehicle you're looking for? Tell us exactly what you want, be as vague or specific as you please.</p>
        <Paper style={ _styles.textFieldPaper }>
          <TextField
            name={ `description` }
            multiLine
            fullWidth
            rows={ 10 }
            value={ this.state.details }
            onChange={ this._updateDetails }
          />
        </Paper>
      </Paper>
    );
  }
}

export default Details;
