import Head from "next/head";
import styles from "../styles/Home.module.css";
import { api_call } from "../utils/api-calls";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>greenhopper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={async () => {
          let cards = await api_call("from", "to");
          console.log(cards);
      } }> Click Me! </button>
      <main className={styles.main}>Hello World</main>
    </div>
  );
}
