import { Badge } from "react-bootstrap"


const LINKS = [
    {
        url: "http://therepl.net/",
        title: "The REPL"
    },
    {
        url: "http://insideclojure.org/",
        title: "Inside Clojure",
        postfix:" - weekly journals about development of Clojure"
    },
    {
        url: "https://purelyfunctional.tv/newsletter/",
        title: "PurelyFunctional.tv Newsletter"
    },
    {
        url: "https://us19.campaign-archive.com/home/?u=f5dea183eae58baf7428a4425&id=ef5512dc35",
        title: "Clojure Weekly",
        postfix:" - curated links from various sources about all things Clojure and ClojureScript"
    }
]


const Newsletters = () => {
    return (
      
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

    );
}

export default Newsletters;