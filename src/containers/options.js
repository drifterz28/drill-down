import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchedItems, selectedOptions } from '../actions'

import Selected from '../components/selected';

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

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }

  renderOptionList = () => {

  }

  handleClick = (e) => {
    e.preventDefault();
    const target = e.target;
    const cat = target.getAttribute('data-cat');
    const value = target.getAttribute('data-value');
    selectedOptions({cat, value});
  }

  render() {
    const {options, selected} = this.props;
    return (
      <div className="drillDownOptions">
        {!!selected.length && <Selected selected={selected} />}
        <div className="">
          {options.map((option, i) => {
            return (
              <div key={i}>
                <h2>{option.label}</h2>
                <div className="optionList">
                  {option.list.map((list, i) => {
                    return (<a key={i} href="#" onClick={this.handleClick} data-cat={option.id} data-value={list}>{list} (1)</a>);
                  })}
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    )
  }
}
