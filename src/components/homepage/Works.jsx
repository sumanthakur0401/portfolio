import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link=""
            img={ibgroup}
            alt="Snowchild website mockup"
            name="SnowChild"
            type="Web Design • Frontend Development"
            year="2022"
            tools="Java • XML • Android Studio"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link=""
            img={memento}
            alt="Unuasual page mockup"
            name="Unusual.imaginative"
            type="Graphic Designing"
            year="2020"
            tools="Photoshop • Lightroom • Illustator"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link=""
            img={acc}
            alt="Netflix clone"
            name="Netflix Clone"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link=""
            img={daddy}
            alt="sumanual page mockup"
            name="Sumanual"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • SCSS • JavaScript • ReactJs"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="p"
            img={sunnyside}
            alt="proudproject mockup"
            name="Proud"
            type="Web Development • Frontend Development"
            year="2022"
            tools="HTML • CSS • JavaScript • NextJs"
          />
         
        </div>
      </div>
    </section>
  );
}
