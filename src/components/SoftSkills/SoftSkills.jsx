const softSkills = [
  "Effective Communication",
  "Problem Solving & Troubleshooting",
  "Leadership & Initiative",
  "Team Collaboration & Team Building",
  "Adaptability to New Environments",
  "Quick Learner & Self-Motivated",
];

const SoftSkills = () => {
  return (
    <section
      id="soft-skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">SOFT SKILLS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Professional strengths that enhance my technical abilities and teamwork
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-xl p-5 text-center shadow-lg hover:shadow-purple-500/30 transition"
          >
            <p className="text-gray-300 font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;