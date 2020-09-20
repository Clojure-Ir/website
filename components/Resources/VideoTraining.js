import {  Badge } from "react-bootstrap"

const LINKS = [
    {
        url: "http://www.purelyfunctional.tv/intro-to-clojure",
        title: "Introduction to Clojure",
        postfix: " - Eric Normand(LispCast)"
    },
    {
        url: "https://purelyfunctional.tv/courses/web-dev-in-clojure/",
        title: "Web Development in Clojure",
        postfix: " - Eric Normand(LispCast)"
    },
    {
        url: "http://shop.oreilly.com/product/0636920030409.do",
        title: "Clojure Inside Out",
        postfix: " - Stuart Halloway, Neal Ford(O’Reilly)"
    },
    {
        url: "http://shop.oreilly.com/product/0636920041474.do",
        title: "Communicating Sequential Processes with core.async",
        postfix: " - Timothy Baldridge(O’Reilly)"
    },
    {
        url: "http://www.infiniteskills.com/training/building-microservices-with-clojure.html",
        title: "Building Microservices with Clojure",
        postfix: " - Scott Rehorn(O’Reilly)"
    },
    {
        url: "http://www.infiniteskills.com/training/learning-clojure.html",
        title: "Learning Clojure",
        postfix: " - Adam Bard"
    },
    {
        url: "http://www.infiniteskills.com/training/learning-clojurescript.html",
        title: "Learning ClojureScript",
        postfix: " - David Eisenberg"
    },
    {
        url: "https://www.pluralsight.com/courses/clojure-fundamentals-part-one",
        title: "Clojure Fundamentals",
        postfix: " - Alan Dipert(PluralSight)"
    }
    ,
    {
        url: "https://www.pluralsight.com/courses/clojure-concurrency-tutorial",
        title: "Clojure Concurrency",
        postfix: " - Craig Andera(PluralSight)"
    },
    {
        url: "https://www.packtpub.com/web-development/building-web-applications-clojure-video",
        title: "Building Web Applications with Clojure",
        postfix: " - Tomek Lipski(Packt)"
    },
    {
        url: "https://lambdaisland.com/",
        title: "Lambda Island",
        postfix: " - Screencast series about ClojureScript and Clojure"
    },
    {
        url: "https://lambdaisland.com/",
        title: "Learn Reagent",
        postfix: " - Jacek Schae"
    }
    ,
    {
        url: "https://www.learnreframe.com/",
        title: "Learn re - frame",
        postfix: " - Jacek Schae"
    }
]



const VideoTraining = () => {
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

export default VideoTraining;