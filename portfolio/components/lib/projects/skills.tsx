interface SkillsProps {
  skills: string[];
}

export const SkillsList = ({ skills }: SkillsProps) => {
  return (
    <div className="mt-4 flex w-[80%] group-hover:opacity-0">
      <ul className="skillContainer">
        {skills.map((skill, index) => (
          <li key={index} className="skill">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
