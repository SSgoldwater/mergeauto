const _desktop = {
  container: {
    height: `calc(100vh - 72px)`,
    width: `90%`,
    maxWidth: `724px`,
    margin: `auto`,
    paddingTop: `24px`
  },
  description: {
    color: `#333333`,
    padding: `12px`,
    lineHeight: `24px`
  },
  why: {
    backgroundColor: `D3D3D3`,
    marginTop: `36px`,
    padding: `0px 18px`,
    border: `1px solid #999999`,
    borderRadius: `5px`
  },
  getStartedButton: {
    position: `absolute`,
    width: `90%`,
    bottom: `5vh`,
    left: `5vw`
  }
}

const _mobile = {
  container: {
    height: `calc(100vh - 72px)`,
    width: `90%`,
    margin: `auto`,
    paddingTop: `24px`
  },
  title: {
    marginTop: `0px`,
    fontSize: `24px`
  },
  why: {
    backgroundColor: `D3D3D3`,
    marginTop: `24px`,
    padding: `0px 18px`,
    border: `1px solid #999999`,
    borderRadius: `5px`
  },
  description: {
    color: `#333333`
  },
  getStartedButton: {
    position: `absolute`,
    width: `90%`,
    bottom: `5vh`,
    left: `5vw`
  }
}

export default {
  desktop: _desktop,
  mobile: _mobile
}
