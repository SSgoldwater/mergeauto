const _desktop = {
  contentPaper: {
    padding: `6px 24px`,
    margin: `24px 0px 5vw`
  },
  subheader: {
    marginTop: `-12px`
  },
  checkbox: {
    display: `inline-block`,
    width: `50%`,
    height: `36px`
  },
  price: {
    position: `absolute`,
    right: `24px`
  },
  checkAll: {
    fontWeight: `400`,
    marginLeft: `4px`,
    fontSize: `14px`
  }
};

const _mobile = {
  contentPaper: {
    padding: `6px 24px 18px`,
    margin: `12px 0px 5vw`
  },
  subheader: {
    marginTop: `-12px`
  },
  checkbox: {
    height: `36px`
  },
  price: {
    position: `absolute`,
    right: `24px`
  },
  checkAll: {
    fontWeight: `400`,
    marginLeft: `4px`,
    fontSize: `14px`
  }
};

export default {
  desktop: _desktop,
  mobile: _mobile
};
