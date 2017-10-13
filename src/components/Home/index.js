import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import history from 'utils/history';
import Description from 'components/Description';
import InterestForm from 'components/InterestForm';
import styles from './styles';

const Home = ({ ...props }) => {
  const _styles = styles[props.responsive];

  const _toDescription = (e) => {
    e.preventDefault();

    history.push(`/description/`);
  };

  return (
    <div style={ _styles.container }>
      <Description responsive={ props.responsive }/>
      <InterestForm responsive={ props.responsive }/>
      <div style={ _styles.submitSection }>
        <h4>Satisfied with the criteria you've provided?</h4>
        <p>(All sections will be submitted together)</p>
        <RaisedButton
          primary
          fullWidth
          style={ _styles.submitButton }
          label={ `Submit Form` }
          labelStyle={ _styles.submitButtonLabel }
        />
      </div>
    </div>
  );
}

export default Home;
