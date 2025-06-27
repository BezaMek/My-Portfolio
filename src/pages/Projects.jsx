import Movie from "../assets/Movie.svg";
import Cake from "../assets/Cake.svg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Movie IMDB",
      description: "A modern movie database application built with React",
      icon: Movie,
      link: "https://bmdb.pages.dev/",
      tags: ["React", "API", "Responsive"],
    },
    {
      id: 2,
      title: "Website design",
      description: "A modern website built with Nextjs",
      icon: Movie,
      link: "https://palnet.pages.dev/",
      tags: ["React", "API", "Responsive"],
    },
    {
      id: 3,
      title: "Website design",
      description: "A modern website built with Nextjs",
      icon: Movie,
      link: "https://bolgroup.pages.dev",
      tags: ["Nextjs",  "Responsive"],
    },
    {
      id: 4,
      title: "Website design",
      description: "A modern website built with Nextjs",
      icon: Movie,
      link: "https://bol-8lz.pages.dev/",
      tags: ["Nextjs", "Responsive"],
    },
  
    {
      id: 5,
      title: "Currency Converter",
      description: "A modern Currency Converter site built using react",
      icon: Cake,
      link: "https://forex.bezamekonnen.com/",
      tags: ["React", "API", "UI/UX"],
    },
    {
      id: 6,
      title: "Investment Calculator",
      description: "A modern investment calculator site built using react",
      icon: Cake,
      link: "https://investment.bezamekonnen.com/",
      tags: ["React", "API", "UI/UX"],
    },
    {
      id: 7,
      title: "Order Page",
      description: "An e-commerce order management system",
      icon: Cake,
      link: "#",
      tags: ["React", "E-commerce", "UI/UX"],
    },
    {
      id: 8,
      title: "Period Tracker",
      description: "A period tracker web app built using nextjs",
      icon: Cake,
      link: "https://newtracker.pages.dev/",
      tags: ["React", "API", "UI/UX"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">My Projects</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="w-12 h-12 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
