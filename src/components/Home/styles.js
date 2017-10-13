import { palette } from 'utils/Theme';

const _desktop = {
  container: {
    minHeight: `calc(100vh - 72px)`,
    backgroundColor: `#EDEDED`,
    textAlign: `center`
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
  }
}

const _mobile = {
  container: {
    minHeight: `calc(100vh - 72px)`,
    textAlign: `center`,
    backgroundColor: `#EDEDED`
  },
  submitSection: {
    width: `90%`,
    maxWidth: `724px`,
    margin: `auto`,
    paddingBottom: `5vw`
  }
}

export default {
  desktop: _desktop,
  mobile: _mobile
}
