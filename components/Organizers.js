import { Container, Card, Button, Row, Col } from "react-bootstrap";


const contentStyle = {
    "margin-bottom": "10px !important",
    "margin-top": "25px",
    "margin-bottom": "25px",
    "line-height": "50px",
    "direction": "rtl"
};
const headerStyle = {
    "text-align": "right",
};

const cardNameStyle = {
    "text-align": "center"
}
const cardTitleStyle = {
    "text-align": "center",
    "font-size": "17px"
}
const people = [
    {
        name: "مسعود بهرامی",
        title: "توسعه‌دهنده",
        image: "data:image/jpeg;base64,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",
        twiiter: "https://twitter.com/masodbahrami",

        linkedin: "https://www.linkedin.com/in/masoud-bahrami-3041306a/",
        web: "http://refactor.ir"
    }
    
]
const Organizers = () => {
    return (
        <Container style={contentStyle}>


            <h3 style={headerStyle}>هماهنگ کنندگان</h3>
            <Row>
                {
                    people.map(p =>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title style={cardNameStyle}>
                                        {p.name}
                                    </Card.Title>
                                    <Card.Title style={cardTitleStyle}>
                                        {p.title}
                                    </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Card.Img variant="top"
                                        src={p.image} />

                                    <Row style={{ "padding-left": "18px" }}>
                                        <Col >
                                            <Button variant="primary">
                                                <a href={p.web}>
                                                    <i class="fab fa-blogger-b"></i>
                                                </a>
                                            </Button>

                                        </Col>
                                        <Col>
                                            <Button variant="primary">
                                                <a href={p.linkedin}>
                                                    <i class="fab fa-linkedin"></i>
                                                </a>
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button variant="primary">

                                                <a href={p.twiiter} >
                                                    <i class="fab fa-twitter"></i>
                                                </a>
                                            </Button>
                                        </Col>
                                    </Row>


                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }

            </Row>

        </Container>

    );
}

export default Organizers;