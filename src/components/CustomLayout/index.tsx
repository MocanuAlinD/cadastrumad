import React from "react";
// import Navigation from "../Navigation";
import RadioNav from "../RadioNav";
import Footer from "../Footer";
import styles from "./CustomLayout.module.css";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  // TODO: Make navigation sticky or not thru props
  // TODO: Create custom components for navigation and footer
  // TODO: Create prop for ContentContainer to specify custom width (now is 100% with 100rem)

  return (
    <div className={styles.layoutTopContainer}>
      <nav className={styles.layoutNavigation}>
        <RadioNav />
      </nav>

      <main>
        <ContentContainer>{children}</ContentContainer>
      </main>
      <footer className={styles.layoutFooter}>
        <Footer />
      </footer>
    </div>
  );
};

export default CustomLayout;

/////// CONTAINER ///////////
const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  const Component = "div";
  const style = {
    // comment / remove next line in dev or production
    // border: "3px solid red",
    // backgroundColor: "#0077b6",
    // backgroundColor: "#202020",
    // backgroundColor: "#252422",
    backgroundColor: "var(--secondaryColor)",
    display: "flex",
    flexGrow: "1",
    width: "100%",
    maxWidth: "100%",
    marginInline: "auto",
    minHeight: "70vh",
    // comment / remove next two lines in dev or production
    // fontWeight: "400",
    // letterSpacing: "2px",
  };

  return <Component style={style}>{children}</Component>;
};
