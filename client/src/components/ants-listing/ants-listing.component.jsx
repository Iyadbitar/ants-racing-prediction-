import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import { Loader, AntsList } from '../'

import styles from './ants-listing.component.scss';

class AntsListing extends React.Component {

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
    this.props.actions.loadAntsListAction();
  }

  handleStatisticsStart = () => {
    console.log('start');
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
