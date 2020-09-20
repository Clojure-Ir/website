import Podcasts from "./Podcasts";
import VideoTraining from "./VideoTraining";
import VideosAndPresentations from "./VideosAndPresentations";
import OfficialTutorials from "./OfficialTutorials";
import Community from "./Community";
import Newsletters from "./Community";

 
import {  Container , Badge } from "react-bootstrap"

const TutorialsAndLearningMaterials = () => {
    return (
        <>

            <h2>
                <Badge variant="success">
                    منابع یادگیری و آموزشی
                </Badge>{' '}
            </h2>

            <h4>
                رسمی
</h4>
            <OfficialTutorials />

            <h4>
                انجمن
</h4>
            <Community />

            <h4>
                خبرنامه‌ها
</h4>
            <Newsletters />

            <h4>
                ویدئوها و ارائه ها</h4>
            <VideosAndPresentations />
            <h4>
                پادکست‌ها</h4>
            <Podcasts />
            <h4>
                ویدئوهای آموزشی غیر رایگان
                    </h4>
            <VideoTraining />


        </>
    );
}

export default TutorialsAndLearningMaterials;