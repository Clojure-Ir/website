import { Container, Row, Col } from "react-bootstrap"

const blueTitle = {
    "margin-bottom": "10px !important",
    "margin-top": "25px",
    "margin-bottom": "25px",
    "color": "#4165a2",
    "font-size": "33px",
    "line-height": "50px",
    "font-weight": "400",
};

const contentStyle = {
    "text-align": "right",
    "font-size": "14px",
    "line-height": "2.5rem"
};

const autherStyle = {
    "font-style": "italic",
    "font-weight": "bolder",
};
const ClojureIntro = () => (

    <Container style={contentStyle}>
        <Row >
            <Col >
                <h2 style={blueTitle}>
                    زبان برنامه نویسی Clojure
</h2>
                <p>
                    Clojure زبان برنامه نویسی پویا و چند منظوره‌ای است که دسترس‌پذیری و توسعه تعاملی یک زبان اسکریپت نویسی را با زیرساختی کارا و قدرتمند جهت توسعه برنامه‌نویسی چند نخی به خدمت گرفته است. با وجود اینکه Clojure یک زبان کامپایل شونده است، کاملا داینامیک باقی‌ مانده است- تمامی ویژگی‌های پشتیبانی شده توسط Clojure در زمان اجرا نیز پشتیبانی می‌شوند. Clojure دسترسی آسان به
                    فریمورک‌های Java را با پیشنهاد نوع
                    (type hint) ها و تشخیص نوع (type inference)
                    های اختیاری ارائه می‌دهد تا اطمینان حاصل شود
                    که فراخواندن
                    Java
                    می‌تواند بدون reflection نیز انجام شود.
</p>
                <p>
                    Clojure
                    گویشی از زبان Lisp است،
                    و فلسفه code-as-data و
                    سیستم قدرتمند ماکرو را با
                    Lisp به
                    اشتراک می‌گذارد.
                    Clojure
                    غالبا یک زبان فانکشنال است، و
                    ویژگی‌های آن شامل مجموعه‌ی غنی
                    از ساختار داده‌های
                    غیر قابل تغییر(immutable)
                    و ماندگار(persistent)
                    
                    می‌باشد.
                    در صورت نیاز به ساختار داده 
قابل تغییر(mutable)                    ،
                    Clojure یک
سیستم مدیریت حافظه تراکنشی و سیستم واکنش‌گرا (reactive Agent system)
که طراحی‌های چند نخی، صحیح و تمیز را اطمینان می‌دهد، در اختیار قرار می دهد.
</p><p>
امیدوارم ترکیب امکانات و تسهیلاتی که Clojure ارائه می‌دهد، را 
جهت استفاده زیبا، قدرتمند، عملی و جذاب بیابید.
</p>
                <p style={autherStyle}>
                    <a href="">
                    Rich Hickey
                    </a>
                    <br />
                    نویسنده Clojure
</p>

            </Col>

        </Row>
    </Container>
);

export default ClojureIntro;