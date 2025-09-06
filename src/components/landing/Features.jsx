import styles from "./Features.module.css";

const features = [
  {
    title: "Lock Memories",
    desc: "Secure your notes, photos, and videos inside a digital capsule.",
    icon: "🔒",
  },
  {
    title: "Set Unlock Date",
    desc: "Pick a future date to open and relive your memories.",
    icon: "📅",
  },
  {
    title: "Share with Loved Ones",
    desc: "Invite friends and family to create or access shared capsules.",
    icon: "🤝",
  },
  {
    title: "Cloud Secure",
    desc: "Your memories are encrypted and safely stored in the cloud.",
    icon: "☁️",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Features</h2>
        <p className={styles.subheading}>
          Everything you need to capture today and open tomorrow.
        </p>

        <div className={styles.grid}>
          {features.map((f, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
