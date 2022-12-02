import { getLayout } from "./components/layout";
import { NextPageWithLayout } from "./_app";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>HouseTalker</title>
        <meta
          name="description"
          content="這是一個專門收集惡房東或有關租屋踩雷新聞的平台，讓有租房需求的人免於成為受害者，改善租屋大環境，使社會變得佳和諧。"
        />
      </Head>
    </>
  );
};

Home.getLayout = getLayout;
export default Home;
