import {  Badge } from "react-bootstrap"

const LINKS = [
    {
        url: "https://ask.clojure.org/",
        title: "Books"
    },
    {
        url: "https://groups.google.com/group/clojure",
        title: "Clojure for the Brave and True - a beginner book by Daniel Higginbotham"
    },
    {
        url: "http://clojurians.net/",
        title: "Clojure from the ground up - a series of intro articles by Kyle Kingsbury"
    },
    {
        url: "https://clojurians.zulipchat.com/",
        title: "Clojure By Example"
    },
    {
        url: "https://clojureverse.org/",
        title: "Practicalli - books and video tutorials on developing with Clojure, it’s tooling and workflow"
    },
    {
        url: "https://clojure.org/community/user_groups",
        title: "ClojureBridge Curriculum"
    },
    {
        url: "http://planet.clojure.in/",
        title: "ClojureDocs - community provided example repository"
    },
    {
        url: "http://clojure-doc.org/",
        title: "Clojure Documentation - community-driven documentation site"
    },
    {
        url: "http://clojurescriptkoans.com/",
        title: "Clojure Koans (online)"
    },
    {
        url: "http://www.4clojure.com/",
        title: "4clojure - Clojure practice problems"
    },
    {
        url: "https://exercism.io/",
        title: "exercism.io - crowd-source code reviews (supports Clojure)"
    },
    {
        url: "https://clojurecademy.com/",
        title: "Clojurecademy - interactive Clojure learning"
    },
    {
        url: "https://github.com/bbatsov/clojure-style-guide",
        title: "Clojure Style Guide"
    }
]




const CommunityTutorials = () => {
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

export default CommunityTutorials;