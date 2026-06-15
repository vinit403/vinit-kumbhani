"use client";
import { motion } from "framer-motion";

import {
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiFirebase,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";

import styles from "./Skills.module.scss";

const skills = [
    {
        title: "React Native",
        icon: <FaReact />,
        className: styles.react,
    },
    {
        title: "React JS",
        icon: <FaReact />,
        className: styles.react,
    },
    {
        title: "Next JS",
        icon: <SiNextdotjs />,
        className: styles.next,
    },
    {
        title: "Node.js",
        icon: <FaNodeJs />,
        className: styles.node,
    },
    {
        title: "MongoDB / MySQL",
        icon: <SiMongodb />,
        className: styles.mongo,
    },
    {
        title: "Express",
        icon: <SiExpress />,
        className: styles.express,
    },
    {
        title: "Firebase",
        icon: <SiFirebase />,
        className: styles.firebase,
    },
    {
        title: "C / C++",
        icon: <TbBrandCpp />,
        className: styles.cpp,
    },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
    return (
        <motion.section
  className={styles.skills}
  id="skills"
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.2,
  }}
>
            <div className={styles.glow1}></div>
            <div className={styles.glow2}></div>

            <motion.div
  className={styles.header}
  variants={fadeUp}
>
                <span>MY EXPERTISE</span>

                <h2>
                    Sk<span>ills</span>
                </h2>

                <div className={styles.line}></div>

                <p>
                    Crafting seamless digital experiences
                    with expertise in React and React Native
                    for mobile and web applications.
                </p>
            </motion.div>

            <motion.div
  className={styles.grid}
  variants={container}
>
                {skills.map((skill, index) => (
                    <motion.div
  key={index}
  className={styles.card}
  variants={cardVariant}
  whileHover={{
    y: -8,
    scale: 1.02,
  }}
>
                        <motion.div
  className={`${styles.iconBox} ${skill.className}`}
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 4 + index * 0.3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
                            {skill.icon}
                        </motion.div>

                        <h3>{skill.title}</h3>

                        <div className={styles.cardLine}></div>

                        <div className={styles.dots}></div>
                    </motion.div>
                ))}
            </motion.div>

            <div className={styles.bottomDivider}>
                <span></span>
            </div>
        </motion.section>
    );
}