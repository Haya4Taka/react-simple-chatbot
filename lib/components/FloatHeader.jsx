import React, { Component } from 'react';
import { Header,HeaderTitle } from '.';

class FloatHeader extends Component {
  render() {
    const { headerTitle } = this.props;
    return (
      <Header className="rsc-float-header">
        <HeaderTitle className="rsc-float-header-title">{headerTitle}</HeaderTitle>
      </Header>
    )
  }
}

export default FloatHeader;
