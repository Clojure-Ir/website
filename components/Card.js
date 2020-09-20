import { Card as CardComponent } from "react-bootstrap"

const Card = (cardInfo) => {
  return (
    <CardComponent >
      <CardComponent.Body style={{ "text-align": "center" }}>

        <i style={{ "font-size": "150px", "color": "#5cc70c", "margin-bottom": "20px" }} className={cardInfo.cardInfo.fontAwsom} aria-hidden="true"></i>

        <CardComponent.Link href= {cardInfo.cardInfo.linkUrl}>
          <CardComponent.Title>
            {cardInfo.cardInfo.title}
          </CardComponent.Title>
        </CardComponent.Link>
      </CardComponent.Body>
    </CardComponent>
  )
}

export default Card;