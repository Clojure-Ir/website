import { Badge } from "react-bootstrap"

const Functional = () => {
    return (<>
        <h2>
            <Badge variant="success"> برنامه نویسی Functional</Badge>{' '}
        </h2>

        <p>
             Clojure بر پارادایم برنامه‌نویسی فانکشنال تاکید دارد و 
             جهت اجتناب 
            از داده‌ها و وضعیت‌های قابل تغییر(mutable states)
            ابزارهایی و مکانیزم‌های مفیدی را فراهم می‌کند، 
            Clojure توابع را به عنوان ورودی و یا خروجی متدها
            می‌پذیرد (first-class function)
            
            و بر تکرارهای بازگشتی
            (recursive iteration)
             نسبت به 
             حلقه‌های تکراری 
             که بر تغییر 
             وضعیت مبتنی هستند (side-effect based looping)
             تاکید دارد.
            هر چند Clojure یک زبان صرفا فانکشنال (impure)  نیست 
            و پارادایم‌های 
            مختلف برنامه نویسی را پشتیبانی می‌کند،
            
            است، با اینحال بر این فلسفه استوار است
             که برنامه‌هایی که بیشتر فانکشنال هستند،  قدرت ترمیم پذیری بالاتری نسبت به خطا دارند.
                </p>
    </>);
}

export default Functional;