import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section className="py-20 align-element mx-8" id="skills">
      <SectionTitle text="Tech Stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(skill => {
          return <SkillsCard id={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
