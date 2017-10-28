import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import history from 'utils/history';
import Description from 'components/Description';
import InterestForm from 'components/InterestForm';
import styles from './styles';

const Home = ({ ...props }) => {
  const _styles = styles[props.responsive];

  return (
    <div style={ _styles.container }>
      <Description responsive={ props.responsive }/>
      <InterestForm responsive={ props.responsive }/>
    </div>
  );
}

export default Home;
