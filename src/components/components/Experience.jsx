import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "rgba(90, 112, 240, 0.3)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "9px solid rgba(90, 112, 240, 0.3)" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        WebkitBoxShadow: false,
        boxShadow: false,
        borderColor: "blue",
      }}
      icon={
        <div>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain w-full h-full rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[18px] mt-0 font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[#ffffff] text-[14px] pl-1 tracking-wider font-medium"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <p className={styles.sectionHeadText}>Work Experience</p>
      </motion.div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline lineColor="white">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
