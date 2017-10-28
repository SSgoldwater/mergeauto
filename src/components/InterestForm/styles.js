import { palette } from 'utils/Theme';

const _desktop = {
  tabs: {
    width: `90%`,
    margin: `auto`,
    maxWidth: `724px`
  },
  inkBar: {
    fill: palette.primary1Color,
    backgroundColor: palette.primary1Color
  },
  submitSection: {
    width: `90%`,
    maxWidth: `724px`,
    margin: `auto`,
    paddingBottom: `5vw`,
    textAlign: `center`
  },
  submitButton: {
    marginTop: `24px`
  },
  emailConfirmationLayover: {
    width: `100%`,
    height: `100%`,
    position: `fixed`,
    top: `0px`,
    left: `0px`,
    backgroundColor: `rgba(0,0,0,0.5)`,
    zIndex: `98`
  },
  emailConfirmationPaper: {
    width: `50%`,
    height: `50%`,
    position: `fixed`,
    top: `25%`,
    left: `25%`,
    zIndex: `99`,
    padding: `24px`
  },
  closeIcon: {
    float: `right`,
    cursor: `pointer`
  }
};

const _mobile = {
  tabs: {
    width: `90%`,
    margin: `auto`
  },
  submitSection: {
    width: `90%`,
    maxWidth: `724px`,
    margin: `auto`,
    paddingBottom: `5vw`
  },
  emailConfirmationLayover: {
    width: `100%`,
    height: `100%`,
    position: `fixed`,
    top: `0px`,
    left: `0px`,
    backgroundColor: `rgba(0,0,0,0.5)`,
    zIndex: `98`
  },
  emailConfirmationPaper: {
    width: `80%`,
    height: `60%`,
    position: `fixed`,
    top: `20%`,
    left: `10%`,
    zIndex: `99`,
    padding: `24px`
  },
  closeIcon: {
    float: `right`,
    cursor: `pointer`
  }
};

export default {
  desktop: _desktop,
  mobile: _mobile
};
