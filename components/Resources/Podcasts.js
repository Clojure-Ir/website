import {  Badge } from "react-bootstrap"



const LINKS = [
    {
        url: "https://soundcloud.com/defn-771544745",
        title: "defn",
        postfix:" - The world’s greatest vegetarian Clojure podcast hosted by Vijay Kiran and Ray McDermott"
    },
    {
        url: "https://www.therepl.net/episodes/",
        title: "The REPL",
        postfix:" - A podcast diving into Clojure programs and libraries by Daniel Compton"
    },
    {
        url: "https://clojurescriptpodcast.com/",
        title: "ClojureScript Podcast",
        postfix:" - Join Jacek Schae and explore an unusually expressive programming language with Lisp roots"
    },
    {
        url: "https://lispcast.com/category/podcast/",
        title: "Thoughts on Functional Programming by Eric Normand",
        postfix:" - An off-the-cuff stream of Functional Programming ideas, skills, patterns, and news from Functional Programming expert Eric Normand"
    },
    {
        url: "https://clojuredesign.club/",
        title: "Functional Design in Clojure",
        postfix:" - Christoph and Nate discuss software design problems and how they might be solved using functional principles and the Clojure programming language."
    },
    {
        url: "http://blog.cognitect.com/cognicast",
        title: "Audio - Cognitect Blog",
        postfix:" - A podcast by Cognitect, Inc. about software and the people that create it"
    },
    {
        url: "https://anchor.fm/dosync-radio",
        title: "(dosync radio)",
        postfix:" - A podcast to discuss Clojure matters in Japanese."
    }
]




const Podcasts = () => {
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

export default Podcasts;