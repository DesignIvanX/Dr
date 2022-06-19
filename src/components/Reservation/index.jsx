import styles from "./styles.module.css";

const index = () => {
  return (
    <form className={styles["form"]}>
      <div className={styles["form-content-label"]}>
        <label className={styles["form-content-label--label"]}>Reserve</label>
      </div>
      <div className={styles["form-content-input"]}>
        <input
          className={styles["form-content-input--input"]}
          type="text"
          placeholder="Full Name"
          name="fullName"
          required
        />
        <input
          className={styles["form-content-input--input"]}
          type="number"
          min="0"
          placeholder="CI"
          name="ci"
          required
        />
        <button type="submit" className="btn-primary" href="/">
          Reserve
        </button>
      </div>
    </form>
  );
};

export default index;
