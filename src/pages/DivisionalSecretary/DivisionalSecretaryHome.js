import AboutCard from "../../components/about/AboutCard";
import { homeAbout } from "../../dummydata";

const DivisionalSecretaryHome = () => {
    return (
        <div>
            <AboutCard 
            backgroundImage="./images/boss.jpg"
            homeAboutData={homeAbout}
            />
        </div>
    );
}

export default DivisionalSecretaryHome