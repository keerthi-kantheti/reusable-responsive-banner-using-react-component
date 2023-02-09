// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props

  const {headerText, description, className} = cardDetails
  return (
    <li className={className}>
      <h1 className="title">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="req-button">Show More</button>
    </li>
  )
}
export default BannerCardItem
