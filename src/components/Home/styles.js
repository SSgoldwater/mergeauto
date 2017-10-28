import { palette } from 'utils/Theme';

const _desktop = {
  container: {
    minHeight: `calc(100vh - 72px)`,
    backgroundColor: `#EDEDED`,
    textAlign: `center`
  }
}

const _mobile = {
  container: {
    minHeight: `calc(100vh - 72px)`,
    textAlign: `center`,
    backgroundColor: `#EDEDED`
  }
}

export default {
  desktop: _desktop,
  mobile: _mobile
}
