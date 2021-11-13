import Head from "next/head";
import MainPage from "../components/mainPage/MainPage";
import styles from "../styles/Home.module.css";
import CardList from "../components/CardList/CardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>greenhopper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
      <CardList />
    </div>
  );
}
