import {  Badge } from "react-bootstrap"


const LINKS = [
    {
        url: "https://clojure.github.io/clojure/",
        title: "Clojure API Docs"
    },
    {
        url: "https://clojure.github.io/",
        title: "Clojure Contrib Library API Docs"
    },
    {
        url: "https://clojure.org/reference/documentation",
        title: "Clojure Reference Docs - official reference information"
    },
    {
        url: "https://clojure.org/api/cheatsheet",
        title: "Clojure Cheatsheet - helpful categorization of most core functions"
    },
    {
        url: "https://clojureverse.org/",
        title: "Source - Clojure, ClojureScript, ClojureCLR"
    },
    {
        url: "https://clojure.org/community/user_groups",
        title: "Issues - Clojure, ClojureScript, ClojureCLR"
    },
    {
        url: "http://planet.clojure.in/",
        title: "Design wiki archive"
    }
]


const OfficialTutorials = () => {
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

export default OfficialTutorials;