import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and educational background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
              }`}
          >
            {/* Circle */}
            <div className="absolute sm:left-1/2 left-0 -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10">

              {edu.img ? (
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-white text-xs">🎓</span>
              )}

            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl border border-white bg-gray-900 shadow-[0_0_20px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
                } ml-8 transition-transform duration-300 hover:scale-105`}
            >
              {/* Header */}
              <div className="flex items-center gap-4">

                {edu.img && (
                  <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              {edu.grade && (
                <p className="mt-3 text-gray-400 font-semibold">
                  Grade: {edu.grade}
                </p>
              )}

              {/* Description */}
              <p className="mt-3 text-gray-400">{edu.desc}</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;