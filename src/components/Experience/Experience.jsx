import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My roles and experience across different organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 -translate-x-1/2 w-1 bg-white h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Circle */}
            <div className="absolute sm:left-1/2 left-0 -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10">
              
              {experience.img ? (
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-white text-xs">🏢</span>
              )}

            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl border border-white bg-gray-900 shadow-[0_0_20px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
              } ml-8 transition-transform duration-300 hover:scale-105`}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                
                {experience.img && (
                  <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="text-white font-medium">Skills:</h5>
                <div className="flex flex-wrap mt-2 gap-2">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-lg border border-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;