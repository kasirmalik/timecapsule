"use client";
import React from "react";
import styles from "./create.module.css";
import { useForm } from "react-hook-form";

const CreateCapsule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Capsule Created:", data);
    alert("Capsule Created Successfully!");
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Create Your Time Capsule</h1>
        <p>Save your memories, thoughts, and dreams to unlock in the future.</p>
      </section>

      {/* Preview Section */}
      <section className={styles.preview}>
        <h2>How Your Capsule Will Look</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>🎉 Birthday Surprise</h3>
            <p>"Happy Birthday future me!"</p>
            <span>Unlocks: 2026</span>
          </div>
          <div className={styles.card}>
            <h3>🌍 Travel Memories</h3>
            <p>"Best trip of my life, can’t wait to relive this."</p>
            <span>Unlocks: 2027</span>
          </div>
          <div className={styles.card}>
            <h3>🌍 Travel Memories</h3>
            <p>"Best trip of my life, can’t wait to relive this."</p>
            <span>Unlocks: 2027</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
       <h2 className="heading">Create a Time Capsule</h2>
      <section className={styles.formSection}>
       
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label>Title</label>
          <input type="text" {...register("title", { required: true })} />
          {errors.title && (
            <span className={styles.error}>Title is required</span>
          )}

          <label>Message</label>
          <textarea {...register("message", { required: true })}></textarea>
          {errors.message && (
            <span className={styles.error}>Message is required</span>
          )}

          <label>Date to Unlock</label>
          <input type="date" {...register("date", { required: true })} />
          {errors.date && (
            <span className={styles.error}>Unlock date is required</span>
          )}

          <button type="submit" className={styles.button}>
            Create Capsule
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateCapsule;
