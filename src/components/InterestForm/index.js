import React, { Component } from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';
import { Element } from 'react-scroll';
import LookingFor from './LookingFor';
import Details from './Details';
import ContactInfo from './ContactInfo';
import styles from './styles';

class InterestForm extends Component {
  render() {
    const _styles = styles[this.props.responsive];

    return (
      <Element name={ `form` }>
        <Tabs
          style={ _styles.tabs }
          inkBarStyle={ _styles.inkBar }
        >
          <Tab
            label={ `Looking For` }
          >
            <LookingFor responsive={ this.props.responsive }/>
          </Tab>
          <Tab
            label={ `Details` }
          >
            <Details responsive={ this.props.responsive }/>
          </Tab>
          <Tab
            label={ `Contact Info` }
          >
            <ContactInfo responsive={ this.props.responsive }/>
          </Tab>
        </Tabs>
      </Element>
    );
  }
}

export default InterestForm;
