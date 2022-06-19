import styles from "./styles.module.css";
const index = () => {
  return (
    <section className={styles["newsletter"]}>
      <h2 className={styles["newsletter--title"]}>
        Subscribe To Our Newsletter
      </h2>
      <p className={styles["newsletter--subTitle"]}>
        Get latest news of our hospital
      </p>
      <form className={styles["newsletter-form"]}>
        <h3 className={styles["newsletter-form--title"]}>For Newsletter</h3>
        <div className={styles["newsletter-form-content"]}>
          <input
            className={styles["newsletter-form-content--input"]}
            type="email"
            placeholder="Enter your email here"
            required
          />
          <button
            className={styles["newsletter-form-content--btn"]}
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default index;
