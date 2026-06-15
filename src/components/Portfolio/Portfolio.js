"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Monitor,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

import styles from "./Portfolio.module.scss";

const projects = [
  {
    title: "Brand Landing Page",
    description:
      "Modern and responsive landing page for digital agency.",
    image: "/projects/project1.jpg",
    type: "website",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Task Management Dashboard",
    description:
      "A productivity dashboard to manage tasks and team workflow.",
    image: "/projects/project2.jpg",
    type: "website",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Finance Mobile App",
    description:
      "A mobile app for tracking expenses and managing finance.",
    image: "/projects/project3.jpg",
    type: "mobile",
    tech: [
      "React Native",
      "Firebase",
      "TypeScript",
    ],
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

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] =
    useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.type === activeFilter
        );

  return (
    <motion.section
      className={styles.portfolio}
      id="portfolio"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      <div className={styles.glowLeft}></div>
      <div className={styles.glowRight}></div>

      {/* HEADER */}

      <motion.div
        className={styles.header}
        variants={fadeUp}
      >
        <span>MY WORK</span>

        <h2>
          Port<span>folio</span>
        </h2>

        <div className={styles.line}></div>

        <p>
          A showcase of my recent projects,
          where creativity meets
          functionality.
        </p>

        <div className={styles.tabs}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setActiveFilter("all")
            }
            className={
              activeFilter === "all"
                ? styles.active
                : ""
            }
          >
            All
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setActiveFilter("website")
            }
            className={
              activeFilter === "website"
                ? styles.active
                : ""
            }
          >
            Websites
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setActiveFilter("mobile")
            }
            className={
              activeFilter === "mobile"
                ? styles.active
                : ""
            }
          >
            Mobile Apps
          </motion.button>
        </div>
      </motion.div>

      {/* PROJECTS */}

      <div className={styles.projects}>
        {filteredProjects.map(
          (project, index) => (
            <motion.div
              key={`${activeFilter}-${index}`}
              custom={index}
              variants={cardVariant}
              whileHover={{
                y: -10,
              }}
              className={styles.card}
            >
              <motion.div
                className={styles.mockup}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {project.type ===
                "website" ? (
                  <div
                    className={
                      styles.laptop
                    }
                  >
                    <div
                      className={
                        styles.screen
                      }
                    >
                      <Image
                        src={
                          project.image
                        }
                        alt={
                          project.title
                        }
                        fill
                        className={
                          styles.projectImage
                        }
                      />
                    </div>

                    <div
                      className={
                        styles.base
                      }
                    ></div>
                  </div>
                ) : (
                  <div
                    className={
                      styles.phone
                    }
                  >
                    <div
                      className={
                        styles.phoneScreen
                      }
                    >
                      <Image
                        src={
                          project.image
                        }
                        alt={
                          project.title
                        }
                        fill
                        className={
                          styles.projectImage
                        }
                      />
                    </div>
                  </div>
                )}
              </motion.div>

              <div
                className={styles.content}
              >
                <div
                  className={styles.icon}
                >
                  {project.type ===
                  "website" ? (
                    <Monitor />
                  ) : (
                    <Smartphone />
                  )}
                </div>

                <div>
                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {
                      project.description
                    }
                  </p>
                </div>
              </div>

              <div
                className={styles.bottom}
              >
                <div
                  className={styles.tags}
                >
                  {project.tech.map(
                    (tech, i) => (
                      <span
                        key={i}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <motion.button
                  whileHover={{
                    rotate: 45,
                    scale: 1.08,
                  }}
                  className={
                    styles.arrow
                  }
                >
                  <ArrowUpRight />
                </motion.button>
              </div>
            </motion.div>
          )
        )}
      </div>
    </motion.section>
  );
}