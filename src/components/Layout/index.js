import React from 'react';
import MediaQuery from 'react-responsive';
import AppStore from 'stores/AppStore';
import history from 'utils/history';
import TopNav from './TopNav';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _desktopChildren = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        responsive: `desktop`
      })
    );

    const _mobileChildren = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        responsive: `mobile`
      })
    );

    return (
      <div>
        <MediaQuery minDeviceWidth={ 1024 }>
          <TopNav responsive={ `desktop` }/>
          { _desktopChildren }
        </MediaQuery>
        <MediaQuery maxDeviceWidth={ 667 }>
          <TopNav responsive={ `mobile` }/>
          { _mobileChildren }
        </MediaQuery>
      </div>
    )
  }
}

export default Layout;
