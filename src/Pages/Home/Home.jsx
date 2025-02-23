
import Banner from './Banner';
import Categories from './Categories';
import Faq from './FAQ';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <div>
           <Banner/>
           <HeroSection></HeroSection>
           <Categories/>
           <Faq></Faq>
        </div>
    );
};

export default Home;