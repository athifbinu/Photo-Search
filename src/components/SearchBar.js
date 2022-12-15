import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <div  className='ui-segment'>
        <form action="ui-form">
            <div className="field">
                <label >image Search</label>
                <input type="text" />
            </div>
        </form>
        
      </div>
    )
  }
}

export default SearchBar

