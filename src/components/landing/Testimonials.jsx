import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Student",
    quote:
      "I locked a capsule on my graduation day. Opening it years later was emotional and unforgettable!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sophia Mehta",
    role: "Writer",
    quote:
      "This app lets me send messages to my future self. It’s like writing a letter to time itself.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Rahul Verma",
    role: "Engineer",
    quote:
      "I shared a capsule with my family. When we unlocked it, it brought us closer together.",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What People Say</h2>
        <p className={styles.subheading}>
          Thousands of users have created their time capsules. Here are some of their stories.
        </p>

        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <img src={t.avatar} alt={t.name} className={styles.avatar} />
              <p className={styles.quote}>“{t.quote}”</p>
              <div className={styles.userInfo}>
                <h3 className={styles.name}>{t.name}</h3>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
