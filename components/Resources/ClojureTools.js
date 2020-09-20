import {Badge } from "react-bootstrap"


const LINKS = [
    {
        url: "https://clojure.org/guides/deps_and_cli",
        title: "Clojure tools"
    },
    {
        url: "https://leiningen.org/",
        title: "Leiningen",
        prefix:"- an extensible build tool that provides dependency management, REPL support, testing, packaging, deployment, and many other capabilities."
    },
    {
        url: "https://boot-clj.com/",
        title: "Boot",
        prefix:" - build tooling for Clojure: instead of a special-purpose DSL, Boot supplies abstractions and libraries you can use to automate nearly any build scenario with the full power of the Clojure language"
    },
    {
        url: "https://clojars.org/",
        title: "Clojars",
        prefix:" - Clojure-focused Maven repository"
    },
    {
        url: "https://github.com/clojure-emacs/cider",
        title: "Emacs",
        prefix:"CIDER for "
    },
    {
        url: "https://github.com/tpope/vim-fireplace",
        title: "Vim ",
        prefix:"CIDER for "
    },
    {
        url: "https://cursiveclojure.com/",
        title: "IntelliJ",
        prefix:"Cursive for "
    },
    {
        url: "https://github.com/mauricioszabo/atom-chlorine",
        title: "Atom",
        prefix:"Chlorine for "
    },
    {
        url: "https://github.com/BetterThanTomorrow/calva",
        title: "Visual Studio Code",
        prefix:"Calva for "
    },
    {
        url: "https://sekao.net/nightcode/",
        title: "Nightcode"
    },
    {
        url: "http://www.lighttable.com/",
        title: "Light Table"
    },
    {
        url: "https://github.com/wuub/SublimeREPL",
        title: "Sublime Text  ",
        prefix:"SublimeREPL for "
    },
    {
        url: "https://doc.ccw-ide.org/",
        title: "Eclipse Counterclockwise",
        postfix:" (inactive)"
    }
]


const ClojureTools = () => {
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

export default ClojureTools;