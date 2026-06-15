"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import styles from "./Contact.module.scss";

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
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  return (
    <motion.section
      className={styles.contact}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      <div className={styles.glowLeft}></div>
      <div className={styles.glowRight}></div>

      <div className={styles.circleTop}></div>
      <div className={styles.circleBottom}></div>

      <div className={styles.dotsTop}></div>
      <div className={styles.dotsBottom}></div>

      {/* HEADER */}

      <motion.div
        className={styles.header}
        variants={fadeUp}
      >
        <span>GET IN TOUCH</span>

        <h2 className={styles.title}>
          Let's <span>Connect</span>
        </h2>

        <div className={styles.line}></div>

        <p>
          I'm always open to new
          opportunities, collaborations
          or just a friendly hello.
        </p>
      </motion.div>

      {/* CONTACT CARDS */}

      <div className={styles.cards}>
        <motion.div
          custom={0}
          variants={cardVariant}
          whileHover={{
            y: -8,
          }}
          className={styles.contactCard}
        >
          <motion.div
            className={styles.iconCircle}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Mail />
          </motion.div>

          <h4>EMAIL</h4>

          <h3>
            vinitkumbhani25@gmail.com
          </h3>

          <a
            href="mailto:vinitkumbhani25@gmail.com"
            className={styles.actionBtn}
          >
            <ArrowRight />
            Send Email
          </a>
        </motion.div>

        <motion.div
          custom={1}
          variants={cardVariant}
          whileHover={{
            y: -8,
          }}
          className={styles.contactCard}
        >
          <motion.div
            className={styles.iconCircle}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Phone />
          </motion.div>

          <h4>PHONE</h4>

          <h3>
            +91 95865 86365
          </h3>

          <a
            href="tel:+919586586365"
            className={styles.actionBtn}
          >
            <Phone />
            Call Now
          </a>
        </motion.div>
      </div>

      {/* SOCIAL */}

      <motion.div
        custom={2}
        variants={cardVariant}
        whileHover={{
          y: -5,
        }}
        className={styles.socialCard}
      >
        <h4>FOLLOW ME</h4>

        <div className={styles.socials}>
          <motion.a
            href="https://www.linkedin.com/in/vinitkumbhani/"
            whileHover={{
              scale: 1.08,
            }}
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/profile.php?id=100077912483233"
            whileHover={{
              scale: 1.08,
            }}
          >
            <FaFacebookF />
            <span>Facebook</span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/mr._v.k.____"
            whileHover={{
              scale: 1.08,
            }}
          >
            <FaInstagram />
            <span>Instagram</span>
          </motion.a>

          <motion.a
            href="https://github.com/"
            whileHover={{
              scale: 1.08,
            }}
          >
            <FaGithub />
            <span>GitHub</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}