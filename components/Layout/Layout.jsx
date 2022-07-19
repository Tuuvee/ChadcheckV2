import Header from "./Header";
import Footer from "./Footer";
import style from "./Layout.module.scss"
const Layout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.main}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
