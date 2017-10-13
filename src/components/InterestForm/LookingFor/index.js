import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Slider from 'material-ui/Slider';
import styles from './styles';

const _lifestyles = [
  {
    label: `Adventure`,
    value: `adventure`
  },
  {
    label: `Sport`,
    value: `sport`
  },
  {
    label: `Eco-Friendly`,
    value: `eco`
  },
  {
    label: `Family`,
    value: `family`
  },
  {
    label: `Luxury`,
    value: `luxury`
  },
  {
    label: `Commercial/Heavy-Duty`,
    value: `commercial`
  }
];

const _features = [
  {
    label: `4WD/AWD`,
    value: `awd`
  },
  {
    label: `Navigation`,
    value: `nav`
  },
  {
    label: `Sun/Moon Roof`,
    value: `sunroof`
  },
  {
    label: `Convertible`,
    value: `convertible`
  },
  {
    label: `Leather Interior`,
    value: `leather`
  },
  {
    label: `Auxillary Audio Input`,
    value: `aux`
  },
];

class LookingFor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 17500,
      lifestyles: [],
      features: []
    }
  }

  _lifestyleCheckboxUpdate = (value) => {
    if (this.state.lifestyles.includes(value)) {
      const _checked = this.state.lifestyles.filter(lifestyle =>
        lifestyle !== value
      );

      this.setState({ lifestyles: _checked });
    } else {
      const _checked = this.state.lifestyles;

      _checked.push(value);

      this.setState({ lifestyles: _checked });
    }
  }

  _featureCheckboxUpdate = (value) => {
    if (this.state.features.includes(value)) {
      const _checked = this.state.features.filter(feature =>
        feature !== value
      );

      this.setState({ features: _checked });
    } else {
      const _checked = this.state.features;

      _checked.push(value);

      this.setState({ features: _checked });
    }
  }

  _priceUpdate = (e, value) => {
    this.setState({ price: value });
  }

  render() {
    const _styles = styles[this.props.responsive];

    const _lifestyleCheckboxes = _lifestyles.map((lifestyle) => {
      return (
        <Checkbox
          style={ _styles.checkbox }
          key={ lifestyle.value }
          label={ lifestyle.label }
          checked={ this.state.lifestyles.includes(lifestyle.value) }
          onCheck={ () => this._lifestyleCheckboxUpdate(lifestyle.value) }
        />
      );
    });

    const _featureCheckboxes = _features.map((feature) => {
      return (
        <Checkbox
          style={ _styles.checkbox }
          key={ feature.value }
          label={ feature.label }
          checked={ this.state.features.includes(feature.value) }
          onCheck={ () => this._featureCheckboxUpdate(feature.value) }
        />
      );
    });

    return (
      <Paper style={ _styles.contentPaper }>
        <h3>Help us get an idea for what kind of vehicle suits your needs.</h3>
        <p style={ _styles.subheader }>
          Feel free to fill out as little or as much as you'd like.
        </p>
        <h4>
          What is your budget?
          <span style={ _styles.price }>
            { `$${this.state.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`)}` }
          </span>
        </h4>
        <Slider
          min={ 1000 }
          max={ 35000 }
          step={ 500 }
          value={ this.state.price }
          onChange={ this._priceUpdate }
        />
        <h4>
          What is your lifestyle?
          <span style={ _styles.checkAll }>
            (Check all that apply)
          </span>
        </h4>
        <div style={ _styles.lifestyleCheckboxes }>
          { _lifestyleCheckboxes }
        </div>
        <h4>
          Desired features
          <span style={ _styles.checkAll }>
            (Check all that apply)
          </span>
        </h4>
        <div style={ _styles.lifestyleCheckboxes }>
          { _featureCheckboxes }
        </div>
      </Paper>
    );
  }
}

export default LookingFor;
