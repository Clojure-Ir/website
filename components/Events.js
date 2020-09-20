import { Container, Row, Col, CardDeck, Badge } from "react-bootstrap"
import Card from "./Card"
const Events = () => {
  const cards = [
    {
      id: 1,
      title: "بزودی...",
      text: "ما که هستیم و چه میکنیم.",
      linkTitle: "مرامنامه",
      linkUrl: "",
      fontAwsom: "fas fa-mug-hot"
    },
    {
      id: 3,
      title: "بزودی...",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      linkTitle: "Card Link",
      linkUrl: "",
      fontAwsom: "far fa-coffee-pot"
    },
    {
      id: 4,
      title: "بزودی...",
      text: "لیستی از منابع آموزشی",
      linkTitle: "Card Link",
      linkUrl: "",
      fontAwsom: "fas fa-glass-cheers"
    },
  ];

  return (<Container style={
    {
      "margin-top": "20px",
      "margin-bottom": "20px"
    }
  }>
    <Row  >
      <h2 style={
        {
          "float": "right"
        }} >
        <Badge variant="success">
          برنامه‌های پیش‌رو
                </Badge>
      </h2></Row>
    <Row  >

      {cards.map(c =>
        <Col key={c.id}>
          <Card cardInfo={c} />
        </Col>
      )}
    </Row>

  </Container >
  )
}

export default Events;