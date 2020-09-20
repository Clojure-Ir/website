import { Container, Row, Button, Col } from "react-bootstrap"
import ALink from "./ALink";

const SocialNetwork = () => {
  const cards = [
    {
      id: 1,
      title: "توئیتر",

      linkTitle: "توئیتر",
      linkUrl: "http://twitter.com/clojurist_ir",
      fontAwsom: "fab fa-twitter"
    },


    {
      id: 2,
      title: "گیت‌هاب",
      linkUrl: "https://github.com/Clojure-Ir",
      fontAwsom: "fab fa-github"
    }
  ];

  return (<Container style={
    {
      "margin-top": "25px",
      "margin-bottom": "20px",
      "margin": "auto",
      "width": "50%",
      "text-align": "center",
      "padding": "1px"
    }
  }>
    <div  >

      <h5  >
        ما را در شبکه‌های اجتماعی دنبال کنید

      </h5>
    </div>
    <div style={{ "padding": "5px" }}>
      {cards.map(c =>

        <Button style={{ "margin": "5px", "border-radius": "50px" }} variant="primary">

          <ALink ctx={c} />
        </Button>
      )}
    </div>

  </Container >
  )
}

export default SocialNetwork;