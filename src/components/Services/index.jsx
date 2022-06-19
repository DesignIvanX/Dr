import { FaMicroscope, FaAmbulance, FaHeartbeat } from "react-icons/fa";
import { useId } from "react";
import { MdWifiCalling3 } from "react-icons/md";
import styles from "./styles.module.css";

const index = () => {
  const services = [
    {
      id: useId(),
      title: "Well equipped lab",
      icon: <FaMicroscope />,
    },
    {
      id: useId(),
      title: "Well equipped lab",
      icon: <FaAmbulance />,
    },
    {
      id: useId(),
      title: "Well equipped lab",
      icon: <MdWifiCalling3 />,
    },
    {
      id: useId(),
      title: "Well equipped lab",
      icon: <FaHeartbeat />,
    },
  ];
  return (
    <section className={styles["services"]}>
      <div className={styles["services-text"]}>
        <h2 className={styles["services-text--title"]}>Our Medical Services</h2>
        <p className={styles["services-text--paragraph"]}>
          We are dedicated to serve you best medical services
        </p>
      </div>
      <div className={styles["services-content"]}>
        {services.map((service) => {
          return (
            <div key={service.id} className={styles["services-content-box"]}>
              <span className={styles["services-content-box--icon"]}>
                {service.icon}
              </span>
              <h3 className={styles["services-content-box--title"]}>
                {service.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default index;
