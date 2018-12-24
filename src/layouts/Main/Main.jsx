import React, { Component } from "react";
import NavBar from "../../components/Navbar";
import styles from "./Main.module.scss";

class Main extends Component {
  render() {
    return (
      <div className={styles.Main}>
        <NavBar />
        <div className={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default Main;
