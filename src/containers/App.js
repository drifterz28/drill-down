import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchedItems, addCount } from '../actions';

import Item from '../components/item';

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchedItems: (data) => dispatch(fetchedItems(data)),
      addCount: () => dispatch(addCount())
    }
  }
}

@connect(state => ({
    ...state
  }),
  mapDispatchToProps
)

export default class Items extends Component {

  // static fetchData({ params, store, url }) {
  //   return store.dispatch( fetchedItems(data) )
  // }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchedItems(data);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }
  testClick = () => {
    const { actions } = this.props;
    console.log(actions);
    actions.addCount();
  }
  render() {
    return (
      <div className="sscontents dill_down">
        <button onClick={this.testClick}>test button</button>
        {this.props.items.map((item) => {
          return (<Item key={item.id} item={item} />);
        })}
      </div>
    )
  }
}
