import { Badge } from "react-bootstrap"

const Lisp = () => {
    return (<>
        <h2>
            <Badge variant="success">LISP</Badge>{' '}
        </h2>
        <p>Clojure عضوی
         از خانواده زبان‌های
          Lisp است. 
          هر چند بسیاری از ویژگی‌های 
          Lisp به زبان‌های دیگر
           راه یافته‌اند، 
          با این وجود رویکرد
           Lisp نسبت به فلسفه 
           code-as-data و سیستم ماکرو آن
           ، ویژگی‌های متمایزی به Lisp داده است
            Clojure
            نیز رویکرد مشابهی همانند Lisp
            نسبت به این دو فلسفه و سیستم در پیش گرفته است.

           علاوه بر این ساختارهای اصلی دیتا یعنی
           
            mapها، setها، و vectorها همانند listها در Lisp به عنوان بلاک‌های سازنده‌ی اصلی Clojure هستند.</p>
    </>)
}

export default Lisp;