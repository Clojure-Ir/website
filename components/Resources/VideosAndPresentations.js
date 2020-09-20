import { Badge } from "react-bootstrap"


const LINKS = [
    {
        url: "https://www.youtube.com/user/ClojureTV/videos",
        title: "ClojureTV",
        postfix: " - talks by Rich Hickey and presentations from Clojure/conj and Clojure/west"
    },
    {
        url: "http://www.infoq.com/Clojure/presentations/",
        title: "InfoQ Clojure Presentations",
        postfix: " - from a variety of conferences"
    },
    {
        url: "https://github.com/matthiasn/talk-transcripts",
        title: "Talk transcripts",
        postfix: " - Rich Hickey, David Nolen, Stuart Sierra, and others"
    },
    {
        url: "http://www.parens-of-the-dead.com/",
        title: "Parens of the Dead",
        postfix: " - a screencast series writing a game from scratch with Clojure and ClojureScript"
    },
    {
        url: "https://www.youtube.com/c/+practicalli",
        title: "Practicalli Clojure Study Guide",
        postfix: " - weekly live broadcasts on developing with Clojure and ClojureScript"
    }
]




const VideosAndPresentations = () => {
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

export default VideosAndPresentations;