import './index.css'

const SuggestionItem = props => {
  const {eachItemDetails, onSelectionItem} = props
  const {suggestion} = eachItemDetails
  const onSelect = () => {
    onSelectionItem(suggestion)
  }

  return (
    <li className="li-container">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onSelect}
      />
    </li>
  )
}

export default SuggestionItem
