import Canva from "@components/Canva";
import "../styles/global.css";
import "../styles/styles.css";
const MyApp = ({ Component, pageProps }) => {
  return (
    <Canva>
      <Component {...pageProps} />
    </Canva>
  );
};

export default MyApp;
