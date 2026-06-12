"use client";

import Image from "next/image";

import {
    GraduationCap,
    Mail,
    MapPin,
    Phone,
    BriefcaseBusiness,
    Quote,
    Rocket,
} from "lucide-react";

import {
    FaUserAstronaut,
} from "react-icons/fa6";

import { HiCodeBracket } from "react-icons/hi2";

import { motion } from "framer-motion";
import styles from "./About.module.scss";

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

const slideLeft = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};

const slideRight = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};

export default function About() {
    return (
        <motion.section
            className={styles.about}
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.2,
            }}
        >

            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>
            <div className={styles.orb}></div>

            <motion.div
                className={styles.header}
                variants={fadeUp}
            >
                <h2>
                    About <span>Me</span>
                </h2>

                <p>
                    I'm Vinit Kumbhani, a passionate React Developer
                    (Application & Website) with 2 years of hands-on
                    experience. My journey into mobile application and
                    website development has been exciting and rewarding.
                </p>
            </motion.div>

            <div className={styles.content}>

                <motion.div
                    className={styles.imageSection}
                    variants={slideLeft}
                >

                    <motion.div
                        className={styles.userCard}
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <FaUserAstronaut />
                    </motion.div>

                    <motion.div
                        className={styles.codeCard}
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <HiCodeBracket />
                    </motion.div>

                    <motion.div
                        className={styles.imageFrame}
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/images/profile.jpeg"
                            alt="about"
                            fill
                            className={styles.image}
                        />
                    </motion.div>

                </motion.div>

                <motion.div
                    className={styles.infoSection}
                    variants={slideRight}
                >

                    <div className={styles.infoCard}>

                        <div className={styles.topIcon}>
                            <Rocket />
                        </div>

                        <h3>
                            React Native <span>Developer.</span>
                        </h3>

                        <p className={styles.description}>
                            I thrive on crafting elegant solutions to complex
                            problems. With a strong foundation in React Native
                            and React, I specialize in developing robust and
                            user-friendly mobile applications.
                        </p>

                        <div className={styles.detailsGrid}>

                            <motion.div
                                className={styles.infoItem}
                                whileHover={{
                                    y: -5,
                                }}
                            >
                                <GraduationCap />
                                <span>Degree:</span>
                                <p>B.Tech</p>
                            </motion.div>

                            <motion.div
                                className={styles.infoItem}
                                whileHover={{
                                    y: -5,
                                }}
                            >
                                <Phone />
                                <span>Phone:</span>
                                <p>+91 95865 86365</p>
                            </motion.div>

                            <motion.div
                                className={styles.infoItem}
                                whileHover={{
                                    y: -5,
                                }}
                            >
                                <Mail />
                                <span>Email:</span>
                                <p>vinitkumbhani25@gmail.com</p>
                            </motion.div>

                            <motion.div
                                className={styles.infoItem}
                                whileHover={{
                                    y: -5,
                                }}
                            >
                                <BriefcaseBusiness />
                                <span>Freelance:</span>
                                <p>Available</p>
                            </motion.div>

                            <motion.div
                                className={styles.infoItem}
                                whileHover={{
                                    y: -5,
                                }}
                            >
                                <MapPin />
                                <span>City:</span>
                                <p>Surat, Gujarat, India</p>
                            </motion.div>

                        </div>

                        <motion.div
                            className={styles.quoteBox}
                            whileHover={{
                                scale: 1.02,
                            }}
                        >
                            <Quote />

                            <p>
                                I'm excited to connect with fellow developers,
                                recruiters, and collaborators. Let's discuss
                                exciting projects and opportunities together.
                            </p>
                        </motion.div>

                    </div>

                </motion.div>

            </div>

        </motion.section>
    );
}