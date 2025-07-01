import { MotionWrapper } from "@/components/motion-wrapper";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Retention Edit",
    description: "Completed a practical video editing course specializing in short-form content and retention-focused editing.",
    imageUrl: "/projects/a.png",
    imageHint: "Project image",
    tags: ["Masking","Audio Mix","Text","Motion Tracking","Green Screen","Key Frame","R"],
    liveUrl: "https://www.instagram.com/reel/DLf7b-kzWP8/?igsh=MWg0Ymg2ZzhjbzZ3ZA==",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application to organize and track personal or team projects.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task board",
    tags: ["Java", "Spring Security", "Next.js", "MySQL", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Engine",
    description: "A simple and clean blogging platform with user authentication, post creation, and comment functionality.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "blog article",
    tags: ["Java", "JPA/Hibernate", "React", "H2 Database", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <MotionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Projects
          </h2>
        </MotionWrapper>

        <MotionWrapper variants={containerVariants}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
