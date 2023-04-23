import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSelectionItem = id => {
    const {suggestionsList} = this.props

    const filteredSuggestionItem = suggestionsList.filter(
      eachItem => eachItem.id === id,
    )

    this.setState({searchInput: filteredSuggestionItem})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput, inputList} = this.state
    console.log(inputList)
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    console.log(searchInput)

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="card-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.onchangeSearchInput}
              value={searchInput}
              className="input"
            />
          </div>
          <ul className="ul-container">
            {searchResults.map(eachItem => (
              <SuggestionItem
                eachItemDetails={eachItem}
                key={eachItem.id}
                onSelectionItem={this.onSelectionItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
