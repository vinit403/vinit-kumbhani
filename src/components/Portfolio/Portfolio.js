"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  Monitor,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

import styles from "./Portfolio.module.scss";

const projects = [
  {
    title: "The Fantom Exclusive Furniture",
    description:
      "A premium furniture website with a modern, elegant, and responsive design.",
    image: "/images/fantom.png",
    type: "website",
    tech: ["Next.js", "React", "NodeJs"],
    link: "https://www.thefantomexclusivefurniture.com/"
  },
  {
    title: "Vinit Kumbhani | Portfolio Website",
    description:
      "A modern portfolio highlighting my projects, skills, and creative work.",
    image: "/images/vinit-portfolio.png",
    type: "website",
    tech: ["Next.js", "JavaScript", "Tailwind CSS"],
    link: "https://vinit-kumbhani.vercel.app/"
  },
  {
    title: "Tours & Travels App",
    description:
      "A mobile app for tracking expenses and managing finance.",
    image: "/images/travel.png",
    type: "mobile",
    tech: ["React Native", "Firebase", "JavaScript"],
    link:"https://github.com/vinit403/Cab-Booking-React_Native"
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
    y: 40,
    scale: 0.95,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] =
    useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.type.toLowerCase() ===
        activeFilter.toLowerCase()
    );
  }, [activeFilter]);

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
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      {/* HEADER */}

      <motion.div
        className={styles.header}
        variants={fadeUp}
      >
        <span>MY WORK</span>

        <h2>
          Port<span>folio</span>
        </h2>

        <div className={styles.line} />

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
            type="button"
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
            type="button"
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
            type="button"
          >
            Mobile Apps
          </motion.button>
        </div>
      </motion.div>

      {/* PROJECTS */}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className={styles.projects}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          {filteredProjects.length >
          0 ? (
            filteredProjects.map(
              (project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    y: -10,
                  }}
                  className={styles.card}
                >
                  <motion.div
                    className={
                      styles.mockup
                    }
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
                            sizes="100vw"
                            className={
                              styles.projectImage
                            }
                          />
                        </div>
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
                            sizes="100vw"
                            className={
                              styles.projectImage
                            }
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <div
                    className={
                      styles.content
                    }
                  >
                    <div
                      className={
                        styles.icon
                      }
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
                    className={
                      styles.bottom
                    }
                  >
                    <div
                      className={
                        styles.tags
                      }
                    >
                      {project.tech.map(
                        (
                          tech,
                          techIndex
                        ) => (
                          <span
                            key={
                              techIndex
                            }
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
  className={styles.arrow}
  type="button"
  onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
>
  <ArrowUpRight />
</motion.button>
                  </div>
                </motion.div>
              )
            )
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "50px 0",
                width: "100%",
              }}
            >
              No projects found.
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}