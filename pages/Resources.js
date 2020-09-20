import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Discutions from "../components/Resources/Discutions";
import TutorialsAndLearningMaterials from "../components/Resources/TutorialsAndLearningMaterials";
import ClojureTools from "../components/Resources/ClojureTools";
import Conferences from "../components/Resources/Conferences";

import { Container, Badge } from "react-bootstrap"

import Link from 'next/link';


const Resources = () => {
    return (
        <>
            <div>
                <Layout />
            </div>
            <Container style={{ "direction": "rtl", "text-align": "right" }}>

                <Discutions />
            </Container>
            <Container style={{ "direction": "rtl", "text-align": "right" }}>

                <TutorialsAndLearningMaterials />
            </Container>

            <Container style={{ "direction": "rtl", "text-align": "right" }}>
                <h2>
                    <Badge variant="success">
                        ابزارهای Clojure
                </Badge>{' '}
                </h2>
                <ClojureTools />
            </Container>

            <Container style={{ "direction": "rtl", "text-align": "right" }}>
                <h2>
                    <Badge variant="success">
                        کنفرانس‌ها
                </Badge>{' '}
                </h2>
                <Conferences />
            </Container>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Resources;