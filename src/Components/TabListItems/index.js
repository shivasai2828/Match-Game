import './index.css'

const TabListItems = props => {
  const {checkIsMatchedOr, eachList} = props
  const {id, imageUrl, thumbnailUrl} = eachList
  const clickedBtn = () => {
    checkIsMatchedOr(thumbnailUrl)
  }
  return (
    <li>
      <button onClick={clickedBtn}>
        <img className="list-img-items" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default TabListItems
