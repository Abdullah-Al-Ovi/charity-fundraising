

const AboutUs = () => {
  const sections = [
    {
      title: "Our Mission",
      content: (
        <>
          <p>
            At Farjana&apos;s Charity, we believe in the power of community
            and the potential for every individual to make a difference. Our
            mission is to:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Support vulnerable communities through targeted relief efforts.</li>
            <li>Provide education and resources to enable self-sufficiency.</li>
            <li>Promote a culture of giving and collaboration across the globe.</li>
          </ul>
        </>
      ),
    },
    {
        title: "What We Do",
        content: (
          <>
            <p>We focus on creating meaningful impact in the following areas:</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Education:</strong> Scholarships, school supplies, and
                literacy programs to empower the next generation.
              </li>
              <li>
                <strong>Healthcare:</strong> Medical camps, access to clean water,
                and mental health support for those in need.
              </li>
              <li>
                <strong>Disaster Relief:</strong> Rapid response to natural
                disasters with food, shelter, and medical aid.
              </li>
              <li>
                <strong>Community Development:</strong> Skill training,
                employment opportunities, and infrastructure development to foster
                sustainable growth.
              </li>
              <li>
                <strong>Environmental Conservation:</strong> Initiatives to
                protect our planet and promote eco-friendly practices.
              </li>
            </ul>
          </>
        ),
      },
    {
      title: "Our Vision",
      content: (
        <p>
          We envision a world where every individual has access to basic
          necessities, education, and opportunities to thrive. Through our
          fundraising campaigns and partnerships, we strive to create lasting
          impact and inspire hope for a better tomorrow.
        </p>
      ),
    },
   
    {
      title: "Join Us",
      content: (
        <>
          <p>
            We believe that change starts with you. Here’s how you can
            contribute:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Donate:</strong> Every contribution, big or small, helps
              us make a difference.
            </li>
            <li>
              <strong>Volunteer:</strong> Join our team and be a part of
              life-changing initiatives.
            </li>
            <li>
              <strong>Partner:</strong> Collaborate with us to amplify our
              impact.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Get in Touch",
      content: (
        <>
          <p>
            We would love to hear from you! Whether you want to learn more about
            our work, volunteer, or collaborate, feel free to reach out:
          </p>
          <ul className="mt-2">
            <li>
              <strong>Email:</strong> contact@farjanascharity.com
            </li>
            <li>
              <strong>Phone:</strong> +8801745281921
            </li>
            <li>
              <strong>Address:</strong> Barishal Sadar, Barishal
            </li>
            <li>
              <strong>Website:</strong> farjanascharity.org
            </li>
           
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          About Us
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {/* First row: 2 cards, second card spans 2 columns */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-110">
            <h2 className="text-2xl text-center font-semibold text-black mb-4">
              {sections[0].title}
            </h2>
            <div className="text-black">{sections[0].content}</div>
          </div>
          <div className="bg-gray-100 shadow-md rounded-lg p-6 col-span-2 transform transition-transform duration-300 hover:scale-110">
            <h2 className="text-2xl text-center font-semibold text-black mb-4">
              {sections[1].title}
            </h2>
            <div className="text-black">{sections[1].content}</div>
          </div>

          {/* Second row: 3 cards */}
          {sections.slice(2).map((section, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-110"
            >
              <h2 className="text-2xl font-semibold text-center text-black mb-4">
                {section.title}
              </h2>
              <div className="text-black">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
