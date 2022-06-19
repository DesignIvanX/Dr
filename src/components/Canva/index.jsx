import Navegation from "@components/Navegation";
import Footer from "@components/Footer";
import styles from "./styles.module.css";
const index = ({ children }) => {
  return (
    <main className={styles["canva"]}>
      <Navegation />
      {children}
      <Footer />
    </main>
  );
};

export default index;
