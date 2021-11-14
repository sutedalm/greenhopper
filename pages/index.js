import Head from "next/head";
import MainPage from "../components/MainPage/MainPage";
import styles from "../styles/Home.module.css";
import CardList from "../components/co2Comparison/CardList/CardList";
import TravelCardList from "../components/travelItems/TravelCardList/TravelCardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>greenhopper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
      {/* <TravelCardList /> */}
    </div>
  );
}
