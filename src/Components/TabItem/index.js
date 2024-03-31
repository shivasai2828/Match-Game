import './index.css'

const TabItem = props => {
  const {changeTab, eachList} = props
  const {displayText, tabId} = eachList
  const clickBtn = event => {
    changeTab(tabId)
  }
  return (
    <li>
      <button onClick={clickBtn} className="tab-buttons">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
