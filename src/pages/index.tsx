import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import StartPage from "@/screens/StartPage";
import { useScreenStore } from "@/zustand";
import { SCREENS } from "@/constants";
import GamePlay from "@/screens/GamePlay";
import ResultScreen from "@/screens/ResultScreen";

export default function Home() {
  const { screen, setGameplay } = useScreenStore((state) => state);

  return (
    <>
      <Head>
        <title>Wordix</title>
        <meta name="description" content="Wordix - A word game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {screen === SCREENS.START && <StartPage onStart={setGameplay} />}
      {screen === SCREENS.GAMEPLAY && <GamePlay />}
      {screen === SCREENS.RESULT && <ResultScreen />}
    </>
  );
}
