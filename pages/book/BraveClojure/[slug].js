import React from 'react';
import fs from "fs";
import path from 'path';
import Head from 'next/head';

import matter from 'gray-matter';
import marked from "marked";
import BookAgenda from "../BookAgenda";
import Layout from "../../../components/Layout";


import { Container, Row, Col, Badge, Image } from "react-bootstrap";

const Posts = ({ htmlString, data }) => {
    return (<>
        <Head>
            <title>{data.title}</title>
            <meta title='description' content={data.description}></meta>
        </Head>
        <Layout />
        <Container >

            <Row>
                <Col style={{"border-left-style": "outset",
    "margin-left": "15px"}}>
                    <BookAgenda />
                </Col>
                <Col xs={8} style={{ "font-size": "25px", "float": "right !important" }}>
                    <Row>
                                                <div className="container">
                            <div className="post">
                            <div dangerouslySetInnerHTML={{ __html: htmlString }} />



                            </div>

                        </div>

                    </Row>
                </Col>
            </Row>
        </Container>

        <style jsx>{`
      body {
    margin: 0;
    font-family: BYekan, 'BYekan', tahoma;
}

nav {
    background-color: #0f94e9;
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 15px;
    color: white;
}

.container {
    display: flex;
}

aside {
    border-left: 1px solid;
    width: 300px;
    min-height: 250px;
    flex-shrink: 0;
    direction: rtl;
    text-align: right;
}

.section {
    padding: 15px 0;
    border-bottom: 1px solid #aaa;
}

.avatar {
    width: 250px;
    height: 100px;
    margin: 0 auto;
    border: 1px solid;
}

.lead {
    width: 250px;
    margin: 5px auto;
}

img {
    width: 100%;
}

.mainContent {
    display: none;
}

.title {
    width: 250px;
    margin: 5px auto;
    font-size: 20px;
    color: royalblue;
    font-family: tahoma;
    cursor: pointer;
}

.post {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 30px;
    padding: 5px 25px;
    direction: rtl;
    text-align: right;
    width: 850px;
    margin: 5px auto;
}

#postImage {
    min-height: 330px;
}

.chapter {
    cursor: pointer;
}

.sections {
    position: fixed;
}
  `}</style>



    </>);
}

// `getStaticPaths` allows the user to return a list of parameters to
// render to HTML at build time.
export const getStaticPaths = async () => {
    const files = fs.readdirSync("book");

    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace(".md", "")
        }
    }));

    return {
        paths,
        fallback: false
    };
}

// getStaticProps is only called server-side
// In theory you could do direct database queries

// Unlike `getInitialProps` the props are returned under a props key
// The reasoning behind this is that there's potentially more options
// that will be introduced in the future.
// For example to allow you to further control behavior per-page.
export const getStaticProps = async ({ params: { slug } }) => {

    const markdownWithMetadata = fs.readFileSync(path.join("book", slug + ".md")).toString();

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

export default Posts;