import Head from "next/head";
import { api_call } from "../utils/api-calls";

export default function Home() {
  return (
    <div>
      <Head>
        <title>greenhopper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={async () => {
          let cards = await api_call("Paris", "Munich");
          console.log(cards);
      } }> Click Me! </button>
      <p>Hello World</p>
    </div>
  );
}
