import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* LEFT */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Md Kaif Alam Khan
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Full Stack Developer',
                'React Developer',
                'Problem Solver',
                'Learner',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
            />
          </h3>

          {/* ✅ CORRECTED ABOUT */}
          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            I am a passionate Computer Science student at Amity University Jharkhand,
            with a strong interest in web development and software engineering.
            I enjoy building responsive web applications using modern technologies
            like React, Node.js, and MongoDB, and continuously strive to improve
            my problem-solving and development skills.
          </p>

          {/* Resume Button */}
          <a
            href={resume}
            download
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
          >
            <img
              src={profileImage}
              alt="Md Kaif Alam Khan"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;