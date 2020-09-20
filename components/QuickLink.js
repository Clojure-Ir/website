import { Container, Row, Col, CardDeck } from "react-bootstrap"
import Card from "./Card"
const QuickLink = () => {
  const cards = [
    {
      id: 1,
      title: "اساسنامه انجمن",
      text: "ما که هستیم و چه میکنیم.",
      linkTitle: "مرامنامه",
      linkUrl: "/Statute",
      fontAwsom: "fa fa-university"
    },
    {
      id: 3,
      title: "ترجمه کتاب Clojure for the Brave and True",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      linkTitle: "Card Link",
      linkUrl: "book/BraveClojure",
      fontAwsom: "fa fa-book"
    },
    {
      id: 4,
      title: "منابع آموزشی",
      text: "لیستی از منابع آموزشی",
      linkTitle: "Card Link",
      linkUrl: "/Resources",
      fontAwsom: "fa fa-heart"
    },
  ];

  return (<Container style={
    {
      "margin-top": "20px",
      "margin-bottom": "20px"
    }
  }>
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

export default QuickLink;