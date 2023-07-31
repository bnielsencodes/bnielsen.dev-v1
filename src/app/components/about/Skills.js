"use client";
import { motion } from "framer-motion";
import { skills } from "../../../data";
import Skill from "@/app/components/about/Skill";
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
          </div>
        </aside>
      </motion.div>
    </>
  );
}
