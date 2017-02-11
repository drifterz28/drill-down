import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchedItems, selected } from '../actions';

import Item from '../components/item';

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchedItems: (data) => dispatch(fetchedItems(data)),
      selected: () => dispatch(selected())
    }
  }
}

@connect(state => ({
    ...state
  }),
  mapDispatchToProps
)

export default class Items extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchedItems(data);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }
  render() {
    return (
      <div className="sscontents dill_down">
        {this.props.items.map((item) => {
          return (<Item key={item.id} item={item} />);
        })}
      </div>
    )
  }
}
