import React, { Component } from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';

class InterestForm extends Component {
  render() {
    return (
      <Tabs>
        <Tab
          label={ `Looking For` }
        >
          <h1>Whatchu need?</h1>
        </Tab>
        <Tab
          label={ `Details` }
        >
          <h1>Details</h1>
        </Tab>
        <Tab
          label={ `Contact Info` }
        >
          <h1>Contact Info</h1>
        </Tab>
      </Tabs>
    );
  }
}

export default InterestForm;
