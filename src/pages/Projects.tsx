import { ProjectCard } from '../components/sections';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-xl text-gray-600">
            A collection of projects I've built, from distributed systems to developer tools. Each project
            represents a challenge I've enjoyed solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
