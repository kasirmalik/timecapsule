"use client";

import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div className={styles.dashboard}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <h2 className={styles.logo}>TimeCapsule</h2>
            <nav>
              <ul>
                <li>📦 My Capsules</li>
                <li>➕ Create Capsule</li>
                <li>⚙️ Settings</li>
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <main className={styles.main}>
            <header className={styles.header}>
              <h1>Welcome back, {user?.firstName || "Explorer"} 👋</h1>
            </header>

            <section className={styles.cards}>
              <div className={styles.card}>
                <h3>📦 Total Capsules</h3>
                <p>12</p>
              </div>
              <div className={styles.card}>
                <h3>⏳ Pending Unlocks</h3>
                <p>3</p>
              </div>
              <div className={styles.card}>
                <h3>✅ Unlocked</h3>
                <p>9</p>
              </div>
            </section>

            <section className={styles.activity}>
              <h2>Recent Activity</h2>
              <ul>
                <li>✅ Capsule "Memories 2024" unlocked</li>
                <li>📦 Capsule "Birthday Surprise" created</li>
                <li>⏳ Capsule "Future Goals" pending unlock</li>
              </ul>
            </section>
          </main>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
