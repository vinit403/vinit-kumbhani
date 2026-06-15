"use client";

import Image from "next/image";
import {
  Download,
  Briefcase,
  FolderKanban,
  Heart,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import styles from "./Hero.module.scss";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
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
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      id="home"
      animate="show"
    >
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>
      <div className={styles.orb}></div>

      <motion.div
        className={styles.leftCard}
        variants={fadeUp}
      >
        <motion.span
          className={styles.label}
          variants={fadeUp}
        >
          HELLO, I'M
        </motion.span>

        <motion.h1 variants={fadeUp}>
          Vinit
          <br />
          Kumbhani
        </motion.h1>

        <motion.h2 variants={fadeUp}>
          I'm <span>Software Developer</span> (Web & Mobile)
        </motion.h2>

        <motion.p variants={fadeUp}>
          I build modern, responsive and scalable web applications
          with clean code and great user experience.
        </motion.p>

        <div className={styles.buttons}>
          <button
            className={styles.primary}
            onClick={() => {
              document
                .getElementById("portfolio")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
          >
            View My Work
          </button>

          <a
            href="/doc/Vinit-Kumbhani.pdf"
            download="Vinit-Kumbhani.pdf"
            className={styles.secondary}
          >
            Download CV
            <Download size={18} />
          </a>
        </div>

        <div className={styles.stats}>
          <div>
            <Briefcase size={18} />
            <h3>2.5+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <FolderKanban size={18} />
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>

          <div>
            <Heart size={18} />
            <h3>10+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={styles.right}
        variants={slideRight}
      >
        <motion.div
          className={styles.reactCard}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaReact />
        </motion.div>

        <motion.div
          className={styles.nextCard}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>Next.js</span>
        </motion.div>

        <motion.div
          className={styles.codeCard}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code2 />
        </motion.div>

        <motion.div
          className={styles.tailwindCard}
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <RiTailwindCssFill />
        </motion.div>

        <motion.div
          className={styles.imageFrame}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 0.5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className={styles.imageBox}>
            <Image
              src="/images/profile.jpeg"
              alt="profile"
              fill
              priority
              className={styles.image}
            />
          </div>
        </motion.div>

        <div className={styles.dots}></div>
      </motion.div>
    </motion.section>
  );
}