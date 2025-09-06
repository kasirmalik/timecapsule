import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Ready to Lock Your First Time Capsule?
        </h2>
        <p className={styles.subheading}>
          Start capturing today’s moments and relive them in the future.
        </p>
        <Link href="/create" className={styles.button}>
          Create Capsule Now
        </Link>
      </div>
    </section>
  );
}
