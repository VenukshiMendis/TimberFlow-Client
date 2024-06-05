import AboutCard from "../../components/about/AboutCard";
import { gramaHome} from "../../assets/cardData";
import gramasewakaImage from '../../assets/gs.jpg'; 

const GramaSewakaHome = () => {
    console.log("grama");
     return (
        <div>
            <AboutCard 
            title = "Let's Begin Today's Work!"
            backgroundImage={gramasewakaImage}
            homeAboutData={gramaHome}
            />
        </div>
    );

}

export default GramaSewakaHome