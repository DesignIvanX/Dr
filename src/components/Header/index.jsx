import { useEffect } from "react";
import Text from "@containers/Text";
import Reservation from "@components/Reservation";
import styles from "./styles.module.css";
const index = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = (e) => {
    const bar = document.querySelector("#bar");
    let currentBar =
      (100 * Math.round(window.pageYOffset)) / Math.round(screen.height) + 10;
    bar.style.width = `${currentBar}%`;
  };

  return (
    <header onScroll={() => handleOnScrollHeader} className={styles["header"]}>
      <section className={styles["header-section"]}>
        <Text />
        <img className={styles["img"]} src="/static/header/img1.png" alt="" />
      </section>
      <section>
        <Reservation />
      </section>
    </header>
  );
};

export default index;
