import AboutCard from "../../components/about/AboutCard";
import { gramaHome} from "../../dummydata";

const GramaSewakaHome = () => {
    console.log("grama");
     return (
        <div>
            <AboutCard 
            title = "Let's Begin Today's Work!"
            backgroundImage="./images/gs.jpg"
            homeAboutData={gramaHome}
            />
        </div>
    );

}

export default GramaSewakaHome