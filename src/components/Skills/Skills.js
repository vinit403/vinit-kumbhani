"use client";

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

export default function Skills() {
    return (
        <section
            className={styles.skills}
            id="skills"
        >
            <div className={styles.glow1}></div>
            <div className={styles.glow2}></div>

            <div className={styles.header}>
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
            </div>

            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={styles.card}
                    >
                        <div
                            className={`${styles.iconBox} ${skill.className}`}
                        >
                            {skill.icon}
                        </div>

                        <h3>{skill.title}</h3>

                        <div className={styles.cardLine}></div>

                        <div className={styles.dots}></div>
                    </div>
                ))}
            </div>

            <div className={styles.bottomDivider}>
                <span></span>
            </div>
        </section>
    );
}