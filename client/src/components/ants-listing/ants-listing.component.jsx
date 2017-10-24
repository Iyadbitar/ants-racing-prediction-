import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import { Loader, AntsList } from '../'

import { statisticsWorker } from '../../services/statistics.service';

import styles from './ants-listing.component.scss';

class AntsListing extends React.Component {

  statisticsWorker = null;

  static propTypes = {
    isDataLoading: PropTypes.bool.isRequired,
    antsList: PropTypes.array.isRequired,
    antsStats: PropTypes.object,
  }

  static defaultProps = {
    isDataLoading: true,
    antsList: [],
    antsStats: {}
  }

  componentDidMount() {
    this.statisticsWorker = statisticsWorker(this.props.actions);
    this.props.actions.loadAntsListAction();
  }

  componentWillUnmount() {
    this.statisticsWorker.terminate();
  }

  handleStatisticsStart = () => {
    this.props.antsList.forEach(
      (ant) => this.props.actions.updateAntStatsAction(ant.id, { status: 'In Progress', result: null})
    )
    this.statisticsWorker.start(this.props.antsList);
  }

  isButtonDisabled() {
    return Object.keys(this.props.antsStats).reduce( (acc, antId) => acc || this.props.antsStats[antId].status === 'In Progress', false)
  }

  render() {
    return <div className={styles['videos']}>
      <h1>List</h1>
      <div className={styles['button']}>
        <button className="btn btn-primary" disabled={this.isButtonDisabled()} onClick={this.handleStatisticsStart}>Start Statistics Callculations</button>
      </div>
      <AntsList ants={this.props.antsList} stats={this.props.antsStats}/>
      <Loader isVisible={this.props.isDataLoading}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    isDataLoading: state.uiState.isDataLoading,
    antsList: state.appState.antsList,
    antsStats: state.uiState.antsStats
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AntsListing)
