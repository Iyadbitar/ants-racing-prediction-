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

  getCssClass(status) {
    let cssClass = [styles['status']];
    cssClass.push(
      {
        [status === 'Waiting']: styles['waiting'],
        [status === 'In Progress']: styles['progress'],
        [status === 'Done']: styles['done']
      }[true]
    );
    return cssClass.join(' ');
  }


  render() {
    //http://dreamicus.com/data/ant/ant-05.jpg
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
          ? <span className={this.getCssClass(this.props.statisticsStatus)}><strong>Likelihood To Win: </strong>{Math.round(this.props.statistics * 100)}%</span>
          : <span className={this.getCssClass(this.props.statisticsStatus)}>{this.props.statisticsStatus}</span>
        }
      </div>
    </div>
  }
}
