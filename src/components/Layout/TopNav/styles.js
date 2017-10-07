import { palette } from 'utils/Theme';

const _desktop = {
  appBar: {
    position: `fixed`,
    height: `72px`,
    top: `0px`
  },
  logo: {
    height: `72px`,
    margin: `-8px 8px`
  },
  title: {
    color: `#000`,
    fontStyle: `italic`,
    marginTop: `6px`,
    fontSize: `16px`
  },
  myMergeContainer: {
    textAlign: `center`,
    position: `absolute`,
    top: `0px`,
    right: `24px`,
    padding: `12px 12px 0px`,
    backgroundColor: palette.yellow
  },
  myMergeLink: {
    fontSize: `10px`
  }
}

const _mobile = {
  appBar: {
    position: `fixed`,
    textAlign: `center`,
    height: `72px`,
    top: `0px`
  },
  logo: {
    height: `72px`,
  },
  subTitle: {
    padding: `6px`,
    margin: `0px`,
    fontStyle: `italic`,
    textAlign: `center`,
    borderTop: `1px solid #000`,
    borderBottom: `1px solid #000`
  }
}

export default {
  desktop: _desktop,
  mobile: _mobile
}
