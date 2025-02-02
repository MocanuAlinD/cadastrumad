import React from "react";
import Navigation from "../Navigation";
import styles from "./CustomLayout.module.css";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  // TODO: Make navigation sticky or not thru props
  // TODO: Create custom components for navigation and footer
  // TODO: Create prop for ContentContainer to specify custom width (now is 100% with 100rem)

  return (
    <div className={styles.layoutTopContainer}>
      <nav className={styles.layoutNavigation}>
        <Navigation />
      </nav>

      <ContentContainer>{children}</ContentContainer>
      <footer className={styles.layoutFooter}>Footer goes here</footer>
    </div>
  );
};

export default CustomLayout;

/////// CONTAINER ///////////
const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  const Component = "div";
  const style = {
    // comment / remove next line in dev or production
    // border: "5px solid white",
    // backgroundColor: "#0077b6",
    // backgroundColor: "#202020",
    // backgroundColor: "#252422",
    backgroundColor: "var(--background)",
    display: "flex",
    flexGrow: "1",
    width: "100%",
    maxWidth: "100%",
    marginInline: "auto",
    // comment / remove next two lines in dev or production
    fontWeight: "400",
    // letterSpacing: "2px",
  };

  return <Component style={style}>{children}</Component>;
};
