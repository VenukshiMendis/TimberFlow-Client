import AboutCard from "../../components/about/AboutCard";
import { homeAbout } from "../../assets/cardData";
import bossImage from "../../assets/boss.jpg";

const DivisionalSecretaryHome = () => {
    console.log()
    return (
        <div>
            <AboutCard 
            backgroundImage={bossImage}
            homeAboutData={homeAbout}
            />
        
        </div>
            
    );
}

export default DivisionalSecretaryHome