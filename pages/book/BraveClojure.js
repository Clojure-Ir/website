import React from 'react';
import Link from "next/link";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import BookAgenda from "./BookAgenda";

import fs from "fs";
import path from 'path';
import Head from 'next/head';

import matter from 'gray-matter';
import marked from "marked";

import { Container, Row, Col,Badge,Image } from "react-bootstrap";

const Chapters = [
        {
        name: "intro",
        title: "مقدمه"
    },
    {
        name: "chapter1",
        title: "فصل اول - شروع به کار"
    },
    {
        name: "chapter2",
        title: "فصل اول - اتمام به کار"
    }
];

const BraveClojure = ({ htmlString, data }) => {

    return (
    <>
    <Head>
            <title>{data.title}</title>
            <meta title='description' content={data.description}></meta>
        </Head>
    <div>

        <Layout />
        <Container >
            
            <Row>
                <Col style={{"border-left-style": "outset",
    "margin-left": "15px"}}>
                    <BookAgenda />
                </Col>
                <Col xs={8} style={{"font-size":"25px", "float":"right !important"}}>
                <Row>
                <h4>
                        <Badge variant="success">
                        ترجمه کتاب
                            Clojure for the Brave and True
                            
                            
                    </Badge>{' '}
                    </h4>
</Row>
 <Row>
                    <Image 
                    style={{"float":"right !important"}} src="https://www.braveclojure.com/assets/images/home/book-cover.jpg" />
                </Row>
               
                <Row
                style={{"float": "right",
    "text-align": "right",
    "margin-top": "30px",
    }}
                >
                
                <div 
                
                 dangerouslySetInnerHTML={{ __html: htmlString }} />

            </Row> 
            </Col>
            </Row>
           
        </Container>

        <Footer />

    </div >
</>
    );
}

export const getStaticProps = async () => {

    const markdownWithMetadata = fs.readFileSync(path.join("book", "intro.md")).toString();

    const parsedMarkdown = matter(markdownWithMetadata);
    const htmlString = marked(parsedMarkdown.content);

    return {
        props:
        {
            htmlString: htmlString,
            data: parsedMarkdown.data
        }
    }
}
export default BraveClojure;