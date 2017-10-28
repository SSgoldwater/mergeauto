import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import styles from './styles';

const _times = [
  {
    label: `Weekday mornings (8am-12pm)`,
    value: `weekday_am`
  },
  {
    label: `Weekday lunch hours (12pm-1pm)`,
    value: `weekday_lunch`
  },
  {
    label: `Weekday afternoons (1pm-5pm)`,
    value: `weekday_afternoon`
  },
  {
    label: `Weekday evenings (5pm-9pm)`,
    value: `weekday_evening`
  },
  {
    label: `Weekend AM (9am-1pm)`,
    value: `weekend_am`
  },
  {
    label: `Weekend PM (1pm-9pm)`,
    value: `weekend_pm`
  }
];

class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneChecked: false,
      emailChecked: false,
      phoneTextField: ``,
      emailTextField: ``,
      availableTimes: []
    };
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      this.props.setContactInfo(nextState);
    }
  }

  _updatePhoneCheck = () => {
    this.setState({
      phoneChecked: !this.state.phoneChecked
    });
  }

  _updatePhone = (e) => {
    this.setState({
      phoneTextField: e.target.value
    });
  }

  _updateEmailCheck = () => {
    this.setState({
      emailChecked: !this.state.emailChecked
    });
  }

  _updateEmail = (e) => {
    this.setState({
      emailTextField: e.target.value
    });
  }

  _timeCheckboxUpdate = (value) => {
    if (this.state.availableTimes.includes(value)) {
      const _checked = this.state.availableTimes.filter(time =>
        time !== value
      );

      this.setState({ availableTimes: _checked });
    } else {
      const _checked = this.state.availableTimes;

      _checked.push(value);

      this.setState({ availableTimes: _checked });
    }
  }

  render() {
    const _styles = styles[this.props.responsive];

    const _timeCheckboxes = _times.map((time) => {
      return (
        <Checkbox
          key={ time.value }
          style={ _styles.checkbox }
          label={ time.label }
          checked={ this.state.availableTimes.includes(time.value) }
          onCheck={ () => this._timeCheckboxUpdate(time.value) }
        />
      );
    });

    return (
      <Paper style={ _styles.contentPaper }>
        <h4>How would you like us to contact you?</h4>
        <p>We will NOT share your contact information with third parties.</p>
        <Checkbox
          style={ _styles.checkbox }
          label={
            `Contact me via phone call (we will leave
            a message if you are unable to answer)`
          }
          checked={ this.state.phoneChecked }
          onCheck={ this._updatePhoneCheck }
        />
        <Checkbox
          style={ _styles.checkbox }
          label={ `Contact me via email` }
          checked={ this.state.emailChecked }
          onCheck={ this._updateEmailCheck }
        />
        <TextField
          fullWidth
          disabled={ !this.state.phoneChecked }
          value={ this.state.phoneTextField }
          floatingLabelText={ `Phone Number` }
          onChange={ this._updatePhone }
        />
        <TextField
          fullWidth
          disabled={ !this.state.emailChecked }
          value={ this.state.emailTextField }
          floatingLabelText={ `Email Address` }
          onChange={ this._updateEmail }
        />
        <h4>
          When would you like to be contacted?
          <span style={ _styles.checkAll }>
            (Check all that apply)
          </span>
        </h4>
        { _timeCheckboxes }
      </Paper>
    );
  }
}

export default ContactInfo;
