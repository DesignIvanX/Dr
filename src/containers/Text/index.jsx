import { BsArrowRight } from "react-icons/bs";
import { IoMdArrowDroprightCircle } from "react-icons/io";
// import Video from "@components/video";
import styles from "./styles.module.css";
const index = () => {
  // const handleOnClickVideo = () => {
  //   const video = document.querySelector("#video-content");
  //   video.style.scale = 1;
  // };
  return (
    <div className={styles["header-text"]}>
      <div className={styles["header-text-one"]}>
        <h1 className={styles["header-text-one--h1"]}>
          <span className="color--active">We care</span> about your health
        </h1>
        <p className={styles["header-text-one--p"]}>
          Good health is the state of mental, physical and social well being and
          it does not just mean absence of diseases.
        </p>
      </div>
      <div className={styles["header-text-two"]}>
        <a className={styles["header-text-two--btn"]} href="">
          Book your turn <BsArrowRight fontSize="1.5rem" />
        </a>
        <button
          className={styles["header-text-two--btn-video"]}
          // onClick={handleOnClickVideo}
        >
          <p className={styles["header-text-two--btn-video--icon"]}>
            <IoMdArrowDroprightCircle />
          </p>
          <p className={styles["header-text-two--btn-video--p"]}>
            Watch videos
          </p>
          {/* <Video /> */}
        </button>
      </div>
      <div className={styles["header-text-three"]}>
        <p className={styles["header-text-three--p"]}>
          Become member of our hospital community?
        </p>
        <a className="color--active" href="">
          Sing Up
        </a>
      </div>
    </div>
  );
};

export default index;
