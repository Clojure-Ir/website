import {Badge } from "react-bootstrap"

const LINKS = [
    {
        url: "https://ask.clojure.org/",
        title: "Q&A Forum",
        postfix: "(رسمی)",
        prefix: ""
    },
    {
        url: "https://groups.google.com/group/clojure",
        title: "Clojure Google Group",
        postfix: "(رسمی)",
        prefix: ""
    },
    {
        url: "http://clojurians.net/",
        title: "Clojurians Slack Chat"
    },
    {
        url: "https://clojurians.zulipchat.com/",
        title: "Clojurians Zulip Chat"
    },
    {
        url: "https://clojureverse.org/",
        title: "Clojureverse"
    },
    {
        url: "https://clojure.org/community/user_groups",
        title: " Clojure User Groups"
    },
    {
        url: "http://planet.clojure.in/",
        title: " Planet Clojure blog aggregator",
        postfix: "- مقالات و نوشته موجود در وب در مورد Clojure را تجمیع می‌کند",
        prefix: ""
    },
    {
        url: "https://freenode.net/",
        title: "freenode.net",
        postfix: "",
        prefix: "#clojure IRC channel on "
    }
]



const Discutions = () => {
    return (
        <>
            <h2>
                <Badge variant="success">
                    انجمن‌های بحث و تبادل نظر                </Badge>{' '}
            </h2>

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

export default Discutions;