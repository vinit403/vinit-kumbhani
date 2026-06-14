"use client";

import {
    User,
    GraduationCap,
    Briefcase,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

import styles from "./Resume.module.scss";

export default function Resume() {
    return (
        <section
            className={styles.resume}
            id="resume"
        >
            <div className={styles.glow1}></div>
            <div className={styles.glow2}></div>

            <div className={styles.header}>
                <span>CAREER JOURNEY</span>
                <h2 className={styles.title}>
                    Res<span>ume</span>
                </h2>

                <div className={styles.line}></div>

                <p>
                    A quick overview of my background,
                    education and professional experience.
                </p>
            </div>

            <div className={styles.wrapper}>
                {/* LEFT SIDE */}
                <div className={styles.leftColumn}>
                    {/* SUMMARY */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <div className={styles.iconCircle}>
                                <User />
                            </div>

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
                            <a href="https://maps.google.com/?q=Surat,Gujarat,India">
                                <MapPin />
                                Surat, Gujarat, India
                            </a>

                            <a href="tel:+919586586365">
                                <Phone />
                                +91 95865 86365
                            </a>

                            <a href="mailto:vinitkumbhani25@gmail.com">
                                <Mail />
                                vinitkumbhani25@gmail.com
                            </a>

                            <a href="mailto:vinitkumbhani01@gmail.com">
                                <Mail />
                                vinitkumbhani01@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <div className={styles.iconCircle}>
                                <GraduationCap />
                            </div>

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
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className={styles.rightColumn}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>
                            <div className={styles.iconCircle}>
                                <Briefcase />
                            </div>

                            <div>
                                <h3>
                                    PROFESSIONAL EXPERIENCE
                                </h3>

                                <div className={styles.smallLine}></div>
                            </div>
                        </div>

                        <div className={styles.timeline}>
                            {/* ITEM 1 */}
                            <div className={styles.timelineItem}>
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
                            </div>

                            {/* ITEM 2 */}
                            <div className={styles.timelineItem}>
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}