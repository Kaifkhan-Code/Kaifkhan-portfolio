import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">

        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-500">
          Md Kaif Alam Khan
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Certifications", id: "certifications" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-6">
          <a
            href="https://github.com/Kaifkhan-Code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/md-kaif-alam-khan-7374a1321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/kaifkhan.dx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Md Kaif Alam Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;