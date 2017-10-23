import React from 'react';
import PropTypes from 'prop-types';

import styles from './ants-list.component.scss';

import { AntsListItem } from '../'

export default class AntsList extends React.Component {

  static propTypes = {
    ants: PropTypes.array.isRequired,
    stats: PropTypes.object.isRequired
  }

  static defaultProps = {
    ants: [],
    stats: {}
  }

  render() {
    return <div className={styles['list']}>
      <div className={styles['ants-grid']}>
        {
          this.props.ants.map(
          (ant) => <AntsListItem
            color={ant.color}
            id={ant.id}
            key={ant.id}
            length={ant.length}
            name={ant.name}
            statistics={this.props.stats[ant.id] ? this.props.stats[ant.id].result : null}
            statisticsStatus={this.props.stats[ant.id] ? this.props.stats[ant.id].status : 'Wating'}
            weight={ant.weight}/>
          )
        }
      </div>
    </div>
  }
}
