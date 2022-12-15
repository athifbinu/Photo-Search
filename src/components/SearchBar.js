import React, { Component } from 'react'

export class SearchBar extends Component {
 
   state ={term:''};

   onFormSubmit=(event) =>{
    event.preventDefault();
    console.log(this.state.term)

      
   }


  render() {
    return (
        <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                  <div className="field">
                    <label>Image Search</label>
                    <input type="text"
                     value={this.state.term}
                     onChange={ e=>this.setState({term:e.target.value.toUpperCase})}/>
                  </div>
                </form>
              </div> 
    )
  }
}

export default SearchBar


//what is onsubmit


