import { palette } from 'utils/Theme';

const _desktop = {
  container: {
    minHeight: `calc(100vh - 72px)`,
    backgroundColor: `#E6E6E6`
  },
  usedCars: {
    position: `absolute`,
    textAlign: `center`,
    lineHeight: `64px`,
    right: `0px`,
    width: `60vw`,
    margin: `24px`
  },
  newCars: {
    position: `absolute`,
    textAlign: `center`,
    lineHeight: `64px`,
    bottom: `0px`,
    width: `60vw`,
    margin: `24px`
  },
  thin: {
    textShadow: `1px 1px 4px rgba(0,0,0,.3)`,
    fontWeight: `400`
  },
  bold: {
    textShadow: `1px 1px 4px rgba(0,0,0,.3)`,
    fontStyle: `italic`,
    fontWeight: `800`
  },
  usedButtons: {
    textAlign: `right`,
    margin: `18px`
  },
  newButtons: {
    textAlign: `center`,
    margin: `18px`
  },
  button: {
    margin: `12px`
  },
  buttonLabel: {
    textTransform: `none`
  }
}

const _mobile = {
  title: {
    width: `85%`,
    margin: `0px auto 18px`
  },
  thin: {
    marginTop: `0px`,
    fontSize: `24px`,
    textShadow: `1px 1px 4px rgba(0,0,0,.3)`,
    fontWeight: `400`
  },
  bold: {
    fontSize: `24px`,
    textShadow: `1px 1px 4px rgba(0,0,0,.3)`,
    fontStyle: `italic`,
    fontWeight: `800`
  },
  usedCars: {
    textAlign: `center`,
    margin: `0px`,
    padding: `24px`,
    maxHeight: `calc(50vh - 102px)`
  },
  newCars: {
    textAlign: `center`,
    padding: `24px`,
    maxHeight: `calc(50vh - 102px)`,
    backgroundColor: palette.primary1Color
  },
  button: {
    margin: `12px 0px`,
    height: `48px`,
    width: `70%`
  },
  buttonLabel: {
    textTransform: `none`,
    lineHeight: `48px`
  }
}

export default {
  desktop: _desktop,
  mobile: _mobile
}
