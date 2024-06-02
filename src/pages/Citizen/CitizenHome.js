import AboutCard from "../../components/about/AboutCard";
import { homeAbout } from "../../dummydata";

const CitizenHome = () => {
    return (
        <div>
            <AboutCard 
            title = "Explore Our Services"
            backgroundImage="./images/young-man-standing-park-character_25030-39570.avif"
            homeAboutData={homeAbout}
            />
        </div>
    );

}

export default CitizenHome