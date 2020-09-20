// pages/index.js

import Layout from "../components/Layout";
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ClojureIntro from "../components/ClojureIntro";
import QuickLink from "../components/QuickLink";
import Features from "../components/Features";
import Organizers from "../components/Organizers";
import Events from "../components/Events";
import SocialNetwork from "../components/SocialNetwork";


import Carousel from "../components/Carousel";
const navBarStyle = {
  direction: "rtl"
};

const Index = () => (
  <>
    <Layout />
    <Carousel />
      <SocialNetwork />
    <div className="organizers">
      <Events />
    </div>
    <ClojureIntro />

    <div className="organizers">
      <QuickLink />
    </div>
    <div >
      <Features /></div>
    <div className="organizers">
      <Organizers />
    </div>

    <Footer />
  </>
);

export default Index;