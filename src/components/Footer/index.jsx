import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import styles from "./styles.module.css";
const index = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-text"]}>
        <h2 className={styles["footer-text--logo"]}>
          <span className="color--active">Hospital</span> logo
        </h2>
        <h3 className={styles["footer-text--title"]}>Card title</h3>
        <p className={styles["footer-text-paragraph"]}>
          Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sit rhoncus imperdiet nisi.
        </p>
      </div>
      <div className={styles["footer-sections"]}>
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">About us</a>
        <a href="">Contact us</a>
      </div>
      <div className={styles["footer-social"]}>
        <h3 className="color--active">Follow us</h3>
        <a className={styles["footer-social--icon"]} href="">
          <AiFillInstagram />
        </a>
        <a className={styles["footer-social--icon"]} href="">
          <AiFillFacebook />
        </a>
        <a className={styles["footer-social--icon"]} href="">
          <AiFillTwitterSquare />
        </a>
      </div>
    </footer>
  );
};

export default index;
