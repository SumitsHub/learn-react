import { projects } from '../data';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="projects" />
      <div className="py-16 grid lg:grid-cols2 xl:grid-cols-3 gap-8">
        {projects.map(project => {
          return <ProjectCard id={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
