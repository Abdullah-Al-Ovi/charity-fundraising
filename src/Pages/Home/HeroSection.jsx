import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero bg-gray-100  my-10 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* YouTube Video */}
        <div className="w-[35%]  rounded-lg shadow-2xl">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/JvrBlPOcbpM?si=18B1VC3GnraBEhN2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Text Content */}
        <div className="lg:mr-5 w-[62%] ">
          <h1 className="text-5xl font-bold text-gray-800">
            Welcome to Farjana&apos;s Charity
          </h1>
          <p className="py-6 text-gray-600">
            Farjana&apos;s Charity is dedicated to bringing hope and support to
            those who need it most. Our mission is to provide resources,
            assistance, and a helping hand to individuals and communities facing
            hardship. Through our efforts, we strive to uplift lives, inspire
            positive change, and contribute to building a more compassionate
            society.
          </p>
          <p className="py-6 text-gray-600">
            We focus on several key areas, including education, healthcare,
            poverty alleviation, and disaster relief. We believe that every
            person deserves the chance to thrive, and with your support, we can
            make a significant difference in the lives of countless individuals.
            Together, we can bring light to those who need it most.
          </p>
          <button className="btn btn-primary"><Link to='/donate'>Donate now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
