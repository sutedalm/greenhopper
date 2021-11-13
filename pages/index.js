import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainPage from "./components/mainPage/MainPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainPage />
    </div>
  );
}
