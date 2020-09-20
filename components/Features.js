import { Container, Row, Col, Badge } from "react-bootstrap"
import Lisp from "./LanguageFeatures/Lisp"
import Concurrency from "./LanguageFeatures/Concurrency"
import Dynamic from "./LanguageFeatures/Dynamic"
import Hosted from "./LanguageFeatures/Hosted"
import Functional from "./LanguageFeatures/Functional"
import RuntimePolymorphism from "./LanguageFeatures/RuntimePolymorphism"


const Features = () => {
    return (<Container style={{
        "text-align": "right",
        "margin-top": "50px",
        "margin-bottom": "50px"
    }}>
        <h2>
            ویژگی‌ها
        </h2>
        <p>
            Clojure
            شامل مجموعه‌ای از ویژگیهایی است
            که در مجموع یک ابزار ساده، یکپارچه و
            قدرتمند را تشکیل می‌دهد.

        </p>
        <Container>
            <Row>
                <Col>
                    <Dynamic />
                </Col>
                <Col>
                    <Functional />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Lisp />
                </Col>
                <Col>
                    <Concurrency />
                </Col>
            </Row>
            <Row>
                <Col> <RuntimePolymorphism />
                </Col>
                <Col>
                    <Hosted />
                </Col>
            </Row>
        </Container>
    </Container>);
}

export default Features;