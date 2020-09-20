import {Badge } from "react-bootstrap"


const LINKS = [
    {
        url: "http://clojure-conj.org/",
        title: "Clojure/conj",
        postfix:" (usually in November)"
    },
    {
        url: "http://www.clojurebridge.org/",
        title: "ClojureBridge",
        postfix:" - beginner workshops for women"
    },
    {
        url: "https://clojutre.org/2020/",
        title: "ClojuTRE",
        postfix:" - A Clojure conference in Tampere/Helsinki, Finland"
    },
    {
        url: "https://skillsmatter.com/conferences/10459-clojure-exchange-2018",
        title: "Clojure eXchange",
        postfix:" - A Clojure conference in London, UK"
    },
    {
        url: "https://clojured.de/",
        title: "clojureD",
        postfix:" - A Clojure conference in Berlin, Germany"
    },
    {
        url: "https://heartofclojure.eu/",
        title: "Heart of Clojure",
        postfix:" - A Clojure conference in Leuven, Belgium"
    },
    {
        url: "https://clojuredays.org/",
        title: "Dutch Clojure Days",
        postfix:" - A Clojure conference in Amsterdam, the Netherlands"
    },
    {
        url: "https://clojure-south.com/",
        title: "Clojure/South",
        postfix:" - A Clojure conference in Sao Paulo, Brazil"
    }
]



const Conferences = () => {
    return (
        <>
            <ul>

                {LINKS.map(c =>
                    <li>
                        {c.prefix}
                        <a href={c.url}>
                            {c.title}
                        </a>
                        {c.postfix}
                    </li>

                )}
            </ul>

        </>
    );
}

export default Conferences;