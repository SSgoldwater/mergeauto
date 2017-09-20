import Background from 'assets/HomepageBackground.png';

export default {
  container: {
    background: `url(${Background}) no-repeat`,
    backgroundSize: `100% 100%`,
    height: `calc(100vh - 72px)`,
  },
  usedCars: {
    position: `absolute`,
    fontSize: `48px`,
    textAlign: `center`,
    lineHeight: `64px`,
    right: `0px`,
    width: `60vw`,
    margin: `24px`
  },
  newCars: {
    position: `absolute`,
    textAlign: `center`,
    fontSize: `48px`,
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
