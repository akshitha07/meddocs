import { Link } from 'react-router-dom';

export const FeatureCategories = () => {
  const categories = [
    { icon: <img src="/src/assets/icons/biotechnology.png" alt="Biotechnology" className="w-10 h-10" />, hoverIcon: <img src="/src/assets/icons/biotechnology-hover.png" alt="Biotechnology" className="w-10 h-10" />, title: "Biotechnology", desc: "The term biotechnology is said as a technological application that modifies the products or..." },
    { icon: <img src="/src/assets/icons/clinical-nutrition.png" alt="Clinical Nutrition" className="w-10 h-10" />, hoverIcon: <img src="/src/assets/icons/clinical-nutrition-hover.png" alt="Clinical Nutrition" className="w-10 h-10" />, title: "Clinical Nutrition", desc: "Clinical nutrition simply aims to maintain healthy energy balance in the patients and provide .." },
    { icon: <img src="/src/assets/icons/image.png" alt="Addiction and Recovery" className="w-10 h-10" />, hoverIcon: <img src="/src/assets/icons/image.png" alt="Addiction and Recovery" className="w-10 h-10" />, title: "Addiction and Recovery", desc: "Addiction is one of the major issues across the globe. There are several factors which leads to .." },
    { icon: <img src="/src/assets/icons/community.png" alt="Community Medicine" className="w-10 h-10" />, hoverIcon: <img src="/src/assets/icons/community-hover.png" alt="Community Medicine" className="w-10 h-10" />, title: "Community Medicine", desc: "Community medicine is a discipline of medicine which deals with the health issues of a community .." },
    { icon: <img src="/src/assets/icons/gastroenterology.png" alt="Gastroenterology and Digestive System" className="w-10 h-10" />, hoverIcon: <img src="/src/assets/icons/gastroenterology-hover.png" alt="Gastroenterology and Digestive System" className="w-10 h-10" />, title: "Gastroenterology and Digestive System", desc: "Gastroenterology majorly focuses on the digestive system of the humans.." },
    { icon: <img src="/src/assets/icons/neurology.png" alt="Neurology and Neurological Science" className="w-10 h-10" />, hoverIcon: <img src="/src/assets/icons/neurology-hover.png" alt="Neurology and Neurological Science" className="w-10 h-10" />, title: "Neurology and Neurological Science", desc: "Neurology is a medical discipline which teaches about the investigations .." },
  ];

  return (
    <section className="flex flex-col lg:flex-row min-h-screen w-full">

      {/* LEFT PANEL */}
      <div className="lg:w-[35%] w-full text-white px-10 lg:px-14 py-12 flex flex-col justify-center relative overflow-hidden" style={{
        backgroundImage: 'url("/src/assets/bgBanner.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

        
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-6">
            Open Access Peer Reviewed Journals
          </h2>

          <div className="w-20 h-[2px] bg-white/40 mb-6" />

          <p className="text-blue-100 text-base leading-relaxed mb-8">
            We are dedicated to publish informative journals covering various areas of science, medicine and latest technology. 
            We follow open access policies. All our published journals are peer-reviewed academic and scholarly articles.
          </p>

          <button className="px-6 py-3 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-[#2D68FF] transition">
            View All Journals
          </button>
        </div>
      </div>

      {/* RIGHT GRID */}
      <div className="lg:w-[65%] w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-6">

        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/category/${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="card-triangle relative flex flex-col items-center text-center p-8 border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 group overflow-hidden"
          >
            <div className="mb-4">
              <div className="text-[#2D68FF] group-hover:text-white transition-colors duration-300">
                <div className="relative">
                  <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    {cat.icon}
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.hoverIcon}
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#2D68FF] mb-2 transition-colors duration-300">
              {cat.title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {cat.desc}
            </p>

            <button className="px-4 py-2 border border-[#2D68FF] text-[#2D68FF] text-xs font-semibold uppercase hover:bg-[#2D68FF] hover:text-white transition">
              Read More
            </button>
          </Link>
        ))}

      </div>
    </section>
  );
};