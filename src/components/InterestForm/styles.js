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
  }
};

const _mobile = {
  tabs: {
    width: `90%`,
    margin: `auto`
  }
};

export default {
  desktop: _desktop,
  mobile: _mobile
};
