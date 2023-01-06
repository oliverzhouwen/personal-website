import Pictures from "../../components/pictures/pictures.component";
import HomeBanner from "../../components/HomeBanner/home-banner";
import { HomeContainer } from "./home.styles";


const Home = () => {
    return (
        <HomeContainer>
            <HomeBanner />
            <Pictures />
        </HomeContainer>
    );
};

export default Home;