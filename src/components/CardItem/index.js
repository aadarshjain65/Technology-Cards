import './index.css'

const CardItem = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <li className={`technology-card-container ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}

export default CardItem
