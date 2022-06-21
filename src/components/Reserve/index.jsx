import styles from "./styles.module.css";
const index = () => {
  return (
    <section className={styles["reserve"]}>
      <div className={styles["reserve-img"]}>
        <img
          className={styles["reserve-img--img"]}
          src="/static/images/doctors.png"
          alt=""
        />
      </div>
      <div className={styles["reserve-content"]}>
        <h2 className={styles["reserve-content--title"]}>Reserva de turno</h2>
        <form className={styles["reserve-content-form"]}>
          <div className={styles["reserve-content-form-container"]}>
            <div className={styles["reserve-content-form-container-box"]}>
              <label
                className={styles["reserve-content-form-container-box-label"]}
              >
                Nombre
              </label>
              <input
                className={styles["reserve-content-form-container-box--input"]}
                type="text"
                name="first_name"
                placeholder="Nombre"
                required
              />
            </div>
            <div className={styles["reserve-content-form-container-box"]}>
              <label
                className={styles["reserve-content-form-container-box-label"]}
              >
                Apellido
              </label>
              <input
                className={styles["reserve-content-form-container-box--input"]}
                type="text"
                name="last_name"
                placeholder="Apellido"
                required
              />
            </div>
            <div className={styles["reserve-content-form-container-box"]}>
              <label
                className={styles["reserve-content-form-container-box-label"]}
              >
                Gmail
              </label>
              <input
                className={styles["reserve-content-form-container-box--input"]}
                type="text"
                name="gmail"
                placeholder="Gmail"
                required
              />
            </div>
            <div className={styles["reserve-content-form-container-box"]}>
              <label
                className={styles["reserve-content-form-container-box-label"]}
              >
                CI
              </label>
              <input
                className={styles["reserve-content-form-container-box--input"]}
                type="text"
                name="ci"
                placeholder="CI"
                required
              />
            </div>
						<input type="submit" value="Reserve" className={`${styles["reserve-content-form-container--btn"]} btn-primary`} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default index;
