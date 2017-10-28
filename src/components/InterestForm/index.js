import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Tab, Tabs } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Close from 'material-ui/svg-icons/navigation/close';
import { Element } from 'react-scroll';
import emailTemplate from 'utils/emailTemplate';
import LookingFor from './LookingFor';
import Details from './Details';
import ContactInfo from './ContactInfo';
import styles from './styles';

class InterestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lookingFor: {},
      details: {},
      contactInfo: {},
      emailSending: false,
      emailSent: false
    };
  }

  _submitForm = (formInfo) => {
    const _emailHtml = emailTemplate(this.state);
    const _emailSent = () =>
      this.setState({
        emailSending: false,
        emailSent: true
      });

    this.setState({ emailSending: true });

    emailjs.send("dennis_gmail","template_fDzwVMCR", {
      "message_html": _emailHtml,
      "reply_to": this.state.contactInfo.emailTextField
    })
      .then(response =>
        _emailSent()
      ), err =>
        console.error("FAILED. error=", err)
  }

  setLookingFor = (lookingFor) => {
    this.setState({ lookingFor: lookingFor });
  }

  setDetails = (details) => {
    this.setState({ details: details });
  }

  setContactInfo = (contactInfo) => {
    this.setState({ contactInfo: contactInfo });
  }

  _closeEmailConfirmation = () => {
    this.setState({ emailSent: false });
  }

  render() {
    const _styles = styles[this.props.responsive];

    return (
      <Element name={ `form` }>
        {
          this.state.emailSent ? (
            <div
              style={ _styles.emailConfirmationLayover }
              onTouchTap={ this._closeEmailConfirmation }
            >
              <Paper style={ _styles.emailConfirmationPaper }>
                <div>
                  <Close
                    style={ _styles.closeIcon }
                    onTouchTap={ this._closeEmailConfirmation }
                  />
                </div>
                <h1>Thank you!</h1>
                <h3>Your request has been sent</h3>
                <p>
                  We appreciate the time you've taken to fill out
                  our form. All of the information you left has been
                  sent to us, and we will be contacting you as
                  soon as possible witihin your requested
                  contact times!
                </p>
              </Paper>
            </div>
          ) : null
        }
        <Tabs
          style={ _styles.tabs }
          inkBarStyle={ _styles.inkBar }
        >
          <Tab
            label={ `Looking For` }
          >
            <LookingFor
              responsive={ this.props.responsive }
              setLookingFor={ this.setLookingFor }
            />
          </Tab>
          <Tab
            label={ `Details` }
          >
            <Details
              responsive={ this.props.responsive }
              setDetails={ this.setDetails }
            />
          </Tab>
          <Tab
            label={ `Contact Info` }
          >
            <ContactInfo
              responsive={ this.props.responsive }
              setContactInfo={ this.setContactInfo }
            />
          </Tab>
        </Tabs>
        <div style={ _styles.submitSection }>
          <h4>Satisfied with the criteria you've provided?</h4>
          <p>(All sections will be submitted together)</p>
          <RaisedButton
            primary
            fullWidth
            style={ _styles.submitButton }
            label={ `Submit Form` }
            labelStyle={ _styles.submitButtonLabel }
            onTouchTap={ this._submitForm }
          />
        </div>
      </Element>
    );
  }
}

export default InterestForm;
