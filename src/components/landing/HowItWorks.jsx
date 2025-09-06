import styles from "./HowItWorks.module.css";

const steps = [
  {
    step: "1",
    title: "Create Your Capsule",
    desc: "Start by writing notes, uploading photos, or recording voice messages.",
    icon: "✍️",
  },
  {
    step: "2",
    title: "Lock with a Date",
    desc: "Choose a future date when your capsule will unlock.",
    icon: "🔒",
  },
  {
    step: "3",
    title: "Share or Keep Private",
    desc: "Invite friends and family, or keep it personal.",
    icon: "🤝",
  },
  {
    step: "4",
    title: "Unlock & Relive",
    desc: "When the time comes, open your capsule and revisit the moment.",
    icon: "🎉",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.how}>
      <div className={styles.container}>
        <h2 className={styles.heading}>How It Works</h2>
        <p className={styles.subheading}>
          Creating a time capsule is simple and meaningful.
        </p>

        <div className={styles.grid}>
          {steps.map((s, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stepNumber}>{s.step}</div>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
