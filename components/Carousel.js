import { Carousel as CarouselComponent } from "react-bootstrap";

const Carousel = () => {
  return (
    <CarouselComponent>
      <CarouselComponent.Item>
        <img
          className="d-block w-100"
          src="data:image/jpeg;base64,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"
          alt="First slide"
        />
        <CarouselComponent.Caption>
          <h1 style={{ "color": "#4165a2" }}>
            انجمن
            <span style={{
              "margin-right": "10px",
              "margin-left": "10px",
              "color": "#5cc70c"
            }}>
              Clojure
          </span>
          ایران
          </h1>

          <h4>
            محلی برای یادگیری، آموزش و به اشتراک گذاری
            تجربیات در مورد زبان برنامه نویسی
            Clojure
              </h4>
          <h4 style={{
            "color": "#4165a2"
            , "color": "#4165a2;",
            "font-weight": "bold !important;",
            "font-family": "cursive;"
          }}>
            We Are
            <span style={{
              "margin-right": "10px",
              "margin-left": "10px",
              "color": "#5cc70c"
            }}>
              Clojurists
              </span>
          </h4>
        </CarouselComponent.Caption>
      </CarouselComponent.Item>
    </CarouselComponent>

  )
}

export default Carousel;