import Image from 'next/image'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1 and its key features.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'Project 2',
    description: 'An overview of Project 2 and what it accomplishes.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    imageUrl: '/placeholder.svg?height=200&width=300',
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}