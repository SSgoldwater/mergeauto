import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles';

const Home = ({ ...props }) => {
  console.log(props.responsive);
  const _styles = styles[props.responsive];
  console.log(_styles);

  return (
    <div style={ _styles.container }>
      <div style={ _styles.usedCars }>
        <h1 style={ _styles.title }>
          <span style={ _styles.thin }>
            Buy a used car from the auctions at 
          </span>
          <span style={ _styles.bold }> our cost</span>
        </h1>
        <div style={ _styles.usedButtons }>
          <RaisedButton
            primary
            style={ _styles.button }
            buttonStyle={ _styles.usedButtonBtn }
            label={ `I know what car I want` }
            labelStyle={ _styles.buttonLabel }
          />
          <RaisedButton
            primary
            style={ _styles.button }
            buttonStyle={ _styles.usedButtonBtn }
            label={ `Help me choose!` }
            labelStyle={ _styles.buttonLabel }
          />
        </div>
      </div>
      <div style={ _styles.newCars }>
        <h1 style={ _styles.title }>
          <span style={ _styles.thin }>
            Buy a new car through us at 
          </span>
          <span style={ _styles.bold }> dealership cost</span>
        </h1>
        <div style={ _styles.newButtons }>
          <RaisedButton
            secondary
            style={ _styles.button }
            buttonStyle={ _styles.newButtonBtn }
            label={ `I know what car I want` }
            labelStyle={ _styles.buttonLabel }
          />
          <RaisedButton
            secondary
            style={ _styles.button }
            buttonStyle={ _styles.newButtonBtn }
            label={ `Help me choose!` }
            labelStyle={ _styles.buttonLabel }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
