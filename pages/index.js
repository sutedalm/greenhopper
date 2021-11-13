import Head from "next/head";
import Image from "next/image";
import MainPage from "../components/mainPage/MainPage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainPage />
    </div>
  );
}
