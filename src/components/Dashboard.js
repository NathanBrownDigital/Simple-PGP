import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';

@inject('appStore')
@observer
export default class Dashboard extends Component {

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }

}
