"use client";

import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.glowLeft}></div>
            <div className={styles.glowRight}></div>

            <div className={styles.card}>
                <h2>
                    Vinit <span>Kumbhani</span>
                </h2>

                <p>
                    I build modern, high-performance, and user-friendly mobile applications and websites that focus on delivering seamless user experiences, scalability, and reliable functionality across all devices.
                </p>

                <div className={styles.divider}>
                    <span></span>
                </div>

                <div className={styles.copyright}>
                    © 2025 <span>Vinit Kumbhani</span>.
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
}