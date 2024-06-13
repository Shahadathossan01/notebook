import BestIdeaSection from "../../components/shared/BestIdeaSection/BestIdeaSection";
import FlexiblePricing from "../../components/shared/FlexiblePricing/FlexiblePricing";
import Footer from "../../components/shared/Footer/Footer";
import GetTouch from "../../components/shared/GetTouch/GetTouch";
import StartPhototyping from "../../components/shared/StartPhototyping/StartPhototyping";
import WorksBrowser from "../../components/shared/WorksBrowser/WorksBrowser";

const Home = () => {
    return (
        <div>
            <BestIdeaSection></BestIdeaSection>
            <StartPhototyping></StartPhototyping>
            <WorksBrowser></WorksBrowser>
            <FlexiblePricing></FlexiblePricing>
            <GetTouch></GetTouch>
            <Footer></Footer>
        </div>
    );
};

export default Home;