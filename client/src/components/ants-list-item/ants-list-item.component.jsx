import React from 'react';
import PropTypes from 'prop-types';

import styles from './ants-list-item.component.scss';

export default class AntsListItem extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    id: PropTypes.number.isRequired,
    length: PropTypes.number,
    name: PropTypes.string,
    statistics: PropTypes.number,
    statisticsStatus: PropTypes.string,
    weight: PropTypes.number
  }

  defaultProps = {
    statistics: null,
    statisticsStatus: 'Waiting'
  }

  render() {
    return <div className={styles['ant']}>
      <img className={styles['image']} src="http://dreamicus.com/data/ant/ant-05.jpg" alt={this.props.name} />
      <div className={styles['content']}>
        <h4 className={styles['heading']}>{this.props.name}</h4>
        <p className={styles['text']}>
          <strong>Color: </strong>{this.props.color}<br/>
          <strong>Weight: </strong>{this.props.weight}<br/>
          <strong>Length: </strong>{this.props.length}
        </p>
        {
          null !== this.props.statistics
          ? <span><strong>Statistics: </strong> {this.props.statistics}</span>
          : <span className={styles['status']}>{this.props.statisticsStatus}</span>
        }
      </div>
    </div>
  }
}
