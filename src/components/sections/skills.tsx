import { MotionWrapper } from "@/components/motion-wrapper";
import { SkillChip } from "@/components/skill-chip";

const skills = {
  "Premier Pro": [
    "Cut & Trim","Sequence","Transition","Colour Grading","Audio Editing","Text & Title","VFX","Multicam Editing","Exporting"
  ],
  // "Frontend": [
  //   "React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"
  // ],
  "After Effects": [
    "Key frame & Animation","Masking & ROTO","Text Animation","Motion Graphics","3D-Cam","Effects","Tracking & Stabilization","VFX","Pre-com & Layer Management","Exporting"
  ],
  "Photoshop": [
    "Masking","Background Remove","Basics","Text","Layer Edit"
  ]
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <MotionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
        </MotionWrapper>

        <div className="space-y-12">
            {Object.entries(skills).map(([category, skillList]) => (
                <MotionWrapper key={category}>
                    <h3 className="text-2xl font-semibold mb-6 text-center text-accent">{category}</h3>
                    <MotionWrapper
                        variants={containerVariants}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {skillList.map((skill) => (
                           <SkillChip key={skill} name={skill} />
                        ))}
                    </MotionWrapper>
                </MotionWrapper>
            ))}
        </div>
      </div>
    </section>
  );
}
