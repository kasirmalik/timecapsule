"use client";
import { useUser, UserButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useState,useRef } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const { openSignUp } = useClerk();
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);


  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={35} height={35} className={styles.logoImg}/>
          <Link href="/" className={styles.logo}>
            TimeCapsule
          </Link>
        </div>

        {/* Desktop Menu (unchanged) */}
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/create">Create Capsule</Link>
        </div>

        {/* Auth / Buttons */}
        {user ? (
          <UserButton />
        ) : (
          <button
            className={styles.createBtn}
            onClick={() => openSignUp()}
          >
            Create Account
          </button>
        )}

        {/* Hamburger only visible on mobile */}
        <button
          className={styles.toggle}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} >
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link href="/create" onClick={() => setMenuOpen(false)}>Create Capsule</Link>
          {!user && (
            <button
              className={styles.createBtn}
              onClick={() => { openSignUp(); setMenuOpen(false); }}
            >
              Create Account
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
