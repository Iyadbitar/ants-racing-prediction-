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

  constructor () {
    super();
    this.statisticsWorker = statisticsWorker();
  }

  componentDidMount() {
    this.props.actions.loadAntsListAction();
  }

  handleStatisticsStart = () => {
    console.log('start');
    this.statisticsWorker.start(this.props.antsList);
  }

  render() {
    return <div className={styles['videos']}>
      <h1>List</h1>
      <div>
        <button onClick={this.handleStatisticsStart}>Start Statistics Callculations</button>
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
