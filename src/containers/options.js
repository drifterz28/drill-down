import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchedItems } from '../actions'
//import CSSModules from 'react-css-modules'

import Item from '../components/item';

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchedItems: (data) => dispatch(fetchedItems(data)),
    }
  }
}

@connect(state => ({
    ...state
  }),
  mapDispatchToProps
)

export default class Options extends Component {

  static fetchData({ params, store, url }) {
    // return store.dispatch( fetchedItems(data) )
  }

  componentDidMount() {
    // const { actions } = this.props
    // actions.fetchedItems(data);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }

  render() {
    console.log(this.props)
    return (
      <div className="">
        {this.props.count}
      </div>
    )
  }
}
