import { certifications } from "../../constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My certifications and achievements
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group bg-gray-900 border border-white rounded-2xl p-4 shadow-xl hover:shadow-purple-500/40 hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-contain bg-white rounded-lg p-2 transition duration-300 group-hover:scale-105"
              />
            )}

            {/* Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {cert.issuer} • {cert.date}
              </p>
            </div>

            {/* Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-lg transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;