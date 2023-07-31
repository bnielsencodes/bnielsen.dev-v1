"use client";
import { motion } from "framer-motion";
import { skills } from "../../../data";
import Skill from "@/app/components/about/Skill";

const skillsLeft = skills.slice(0, 3).map((skill) => {
  return <Skill key={skill.id} skill={skill} />;
});

const skillsMiddle = skills.slice(3, 7).map((skill) => {
  return <Skill key={skill.id} skill={skill} />;
});

const skillsRight = skills.slice(7, 11).map((skill) => {
  return <Skill key={skill.id} skill={skill} />;
});

export default function Skills() {
  return (
    <>
      <motion.div
        className={styles.motion}
        initial={{ opacity: 0, translateX: "25rem" }}
        whileInView={{ opacity: 1, translateX: "0" }}
        transition={{
          duration: 1.4,
          ease: [0.21, 1.11, 0.81, 0.99],
        }}
        viewport={{ once: true }}
      >
        <aside className={styles.skills}>
          <h4 className={styles.heading}>Top Skills</h4>
          <div className={styles.container}>
            <div className={styles["hex-group--left"]}>{skillsLeft}</div>
            <div className={styles["hex-group--middle"]}>{skillsMiddle}</div>
            <div className={styles["hex-group--right"]}>{skillsRight}</div>
          </div>
        </aside>
      </motion.div>
    </>
  );
}
