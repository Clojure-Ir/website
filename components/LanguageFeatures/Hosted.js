import { Badge } from "react-bootstrap"

const Hosted = () => {
    return (<>
        <h2>
            <Badge variant="success">
                میزبانی شده بر روی JVM
                </Badge>{' '}
        </h2>

        <p>Clojure به عنوان یک زبان میزبان شونده که سیستم نوع داده JVM، GC، نخ‌ها و ویژگی‌های دیگر را به اشتراک می‌گذارد، طراحی شده است، تمام توابع به بایت کد JVM کامپایل می‌شوند. Clojure یکی از استفاده کنندگان مهم کتاباخانه Java است، و جهت صدا زدن Java نشانه گذاری dot-target-notation را پیشنهاد می‌دهد. Clojure پیاده‌سازی داینامیک اینترفیس‌ها و کلاس‌های Java را پشتیبانی می‌کند. </p>

    </>);
}

export default Hosted;