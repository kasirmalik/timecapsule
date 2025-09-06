import styles from "./about.module.css";
import Image from "next/image";
 // put your svg/png in /public

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        
        {/* Left Column - Text */}
        <div className={styles.content}>
          <h1 className={styles.heading}>About TimeCapsule</h1>
          <p className={styles.text}>
            TimeCapsule is a unique way to preserve your memories, thoughts,
            and messages for the future. Whether it’s a letter to your future
            self, a memory for your loved ones, or a vision for tomorrow —
            TimeCapsule keeps it safe until the moment you choose to unlock it.
          </p>
          <p className={styles.text}>
            Our mission is to make digital memories meaningful. Unlike social
            media posts that vanish into the feed, a capsule is locked in time —
            creating anticipation and emotional value when it’s finally revealed.
          </p>
          <p className={styles.text}>
            Start your journey today and send a message to the future ✨
          </p>
        </div>

        {/* Right Column - Illustration */}
        <div className={styles.imageWrapper}>
          <Image
            width={700}
            height={600}
            src="/about-illustration.svg"
            alt="Time Capsule Illustration"
            className={styles.image}
          />
        </div>
       
      </div>
       <h1 className={styles.creator}>Created by Kasir Malik</h1>
    </section>
  );
}
