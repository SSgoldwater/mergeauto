import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500, cyan700, pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

export const palette = { 
  primary1Color: `#FFE600`,
  primary2Color: cyan700,
  primary3Color: grey400,
  accent1Color: `#CCC`,
  accent2Color: grey100,
  accent3Color: grey500,
  textColor: darkBlack,
  alternateTextColor: darkBlack,
  canvasColor: white,
  borderColor: grey300,
  disabledColor: fade(darkBlack, 0.3),
  pickerHeaderColor: cyan500,
  clockCircleColor: fade(darkBlack, 0.07),
  shadowColor: fullBlack,
  yellow: `#FFE600`
};

const theme = getMuiTheme({
  palette: palette,
  appBar: {
    color: `#FFF`
  },
  tabs: {
    backgroundColor: `#FFF`
  }
});

export default theme;
