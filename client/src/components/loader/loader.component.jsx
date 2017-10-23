import React from 'react';
import PropTypes  from 'prop-types';

import styles from './loader.component.scss';

export default class Loader extends React.Component {

  static propTypes = {
    isVisible : PropTypes.bool.isRequired
  }

  static defaultProps = {
    isVisible: false
  }

  render() {
    return <div className={styles['loader']}>
      {
        this.props.isVisible
        ? <div  className={styles['inner']}>Loading ...</div>
        : <span></span>
      }
    </div>
  }
}
