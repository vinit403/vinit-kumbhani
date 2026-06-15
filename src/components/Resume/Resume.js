"use client";

import {
  User,
  GraduationCap,
  Briefcase,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";

import styles from "./Resume.module.scss";

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
      duration: 0.8,
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
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const timelineItem = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Resume() {
  return (
    <motion.section
      className={styles.resume}
      id="resume"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      {/* HEADER */}

      <motion.div
        className={styles.header}
        variants={fadeUp}
      >
        <span>CAREER JOURNEY</span>

        <h2 className={styles.title}>
          Res<span>ume</span>
        </h2>

        <div className={styles.line}></div>

        <p>
          A quick overview of my background,
          education and professional experience.
        </p>
      </motion.div>

      <div className={styles.wrapper}>
        {/* LEFT */}

        <motion.div
          className={styles.leftColumn}
          variants={slideLeft}
        >
          {/* SUMMARY */}

          <motion.div
            className={styles.card}
            whileHover={{
              y: -8,
            }}
          >
            <div className={styles.cardTitle}>
              <motion.div
                className={styles.iconCircle}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <User />
              </motion.div>

              <div>
                <h3>SUMMARY</h3>
                <div className={styles.smallLine}></div>
              </div>
            </div>

            <h4>VINIT KUMBHANI</h4>

            <p className={styles.summaryText}>
              Innovative and deadline-driven
              Application Developer with experience
              designing and developing user-centered
              applications.
            </p>

            <div className={styles.contactList}>
              <motion.a
                href="https://maps.google.com/?q=Surat,Gujarat,India"
                whileHover={{ x: 6 }}
              >
                <MapPin />
                Surat, Gujarat, India
              </motion.a>

              <motion.a
                href="tel:+919586586365"
                whileHover={{ x: 6 }}
              >
                <Phone />
                +91 95865 86365
              </motion.a>

              <motion.a
                href="mailto:vinitkumbhani25@gmail.com"
                whileHover={{ x: 6 }}
              >
                <Mail />
                vinitkumbhani25@gmail.com
              </motion.a>

              <motion.a
                href="mailto:vinitkumbhani01@gmail.com"
                whileHover={{ x: 6 }}
              >
                <Mail />
                vinitkumbhani01@gmail.com
              </motion.a>
            </div>
          </motion.div>

          {/* EDUCATION */}

          <motion.div
            className={styles.card}
            whileHover={{
              y: -8,
            }}
          >
            <div className={styles.cardTitle}>
              <motion.div
                className={styles.iconCircle}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <GraduationCap />
              </motion.div>

              <div>
                <h3>EDUCATION</h3>
                <div className={styles.smallLine}></div>
              </div>
            </div>

            <div className={styles.educationItem}>
              <div className={styles.eduLine}></div>

              <div className={styles.eduContent}>
                <h4>B.TECH CSE AIML</h4>

                <span>2020 - 2024</span>

                <p>
                  P P Savani University,
                  Gujarat
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className={styles.rightColumn}
          variants={slideRight}
        >
          <motion.div
            className={styles.card}
            whileHover={{
              y: -8,
            }}
          >
            <div className={styles.cardTitle}>
              <motion.div
                className={styles.iconCircle}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Briefcase />
              </motion.div>

              <div>
                <h3>
                  PROFESSIONAL EXPERIENCE
                </h3>

                <div className={styles.smallLine}></div>
              </div>
            </div>

            <div className={styles.timeline}>
              <motion.div
                className={styles.timelineItem}
                variants={timelineItem}
              >
                <div className={styles.dot}></div>

                <div className={styles.timelineContent}>
                  <h4>
                    REACT NATIVE INTERN
                  </h4>

                  <span>
                    2023 - 2024
                  </span>

                  <h5>
                    ELITIST SOFTWARE
                    SOLUTIONS LLP,
                    SURAT, GUJARAT
                  </h5>

                  <ul>
                    <li>
                      Lead in the design,
                      development and
                      implementation of the
                      application.
                    </li>

                    <li>
                      Collaborated with team
                      members to deliver
                      scalable mobile
                      applications.
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className={styles.timelineItem}
                variants={timelineItem}
              >
                <div className={styles.dot}></div>

                <div className={styles.timelineContent}>
                  <h4>
                    REACT NATIVE DEVELOPER
                  </h4>

                  <span>
                    2024 - Present
                  </span>

                  <h5>
                    ELITIST SOFTWARE
                    SOLUTIONS LLP,
                    SURAT, GUJARAT
                  </h5>

                  <ul>
                    <li>
                      Lead in the design,
                      development and
                      implementation of the
                      application.
                    </li>

                    <li>
                      Delegate tasks and
                      mentor development
                      team members.
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}