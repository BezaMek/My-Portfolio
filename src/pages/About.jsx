import Education from "../sections/Education";
import WorkExperience from "../sections/WorkExperience";
import Skills from "../sections/Skills";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Navigation */}
      

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <Education />
            <WorkExperience />
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
