import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "App Development",
    "Graphic Designing",
    "UI/UX Design",
    "Branding",
  ];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS/SCSS",
    "Java",
    "XML",
    "Android Studio",
    "ReactJS",
    "Figma",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14 text-accent-300">
        <ServiceUi
          title="things i know."
          description="I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my tech box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
