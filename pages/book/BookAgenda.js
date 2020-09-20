import React from 'react';
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Chapters = [
    {
        name: "",
        title: "مقدمه"
    },
    {
        name: "/chapter1",
        title: "فصل اول - ایجاد، اجرا و REPL(read-evaluate-process-loop"
    },
    {
        name: "/chapter2",
        title: "فصل اول - استفاده از Emacs، ویرایشگری عالی برای Clojure"
    }
];

const BookAgenda = () => {

    return (
        <Container>

            <ul>
                {
                    Chapters.map(slug => {
                        return (
                            <li> <Link key={slug.name} href={'/book/BraveClojure' + slug.name}>
                                <a>{slug.title}</a>
                            </Link></li>)
                    })}
            </ul>

        </Container>

    );
}


export default BookAgenda;