import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>WebSite</title>
        <meta charset="UTF-8" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <main className="flex justify-center h-screen bg-slate-400 items-center">
        Hello world
      </main>
    </div>
  );
}
