import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import styles from './styles';

class Details extends Component {
  render() {
    const _styles = styles[this.props.responsive];

    return (
      <Paper style={ _styles.contentPaper }>
        <h3>Explain in your own words.</h3>
        <p>Don't feel like our pre-made form captures the essence of the vehicle you're looking for? Tell us exactly what you want, be as vague or specific as you please.</p>
        <Paper style={ _styles.textFieldPaper }>
          <TextField
            multiLine
            fullWidth
            rows={ 10 }
          />
        </Paper>
      </Paper>
    );
  }
}

export default Details;
