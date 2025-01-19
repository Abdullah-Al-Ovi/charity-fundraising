import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jfif'
import banner3 from '../../assets/banner3.webp'

const Banner = () => {
    return (
        <Carousel className="" >
        <div>
            <img src={banner1} />          
        </div>
        <div>
            <img src={banner2} />          
        </div>
        <div>
            <img src={banner3} />          
        </div>
      
        
    </Carousel>
    );
};

export default Banner;