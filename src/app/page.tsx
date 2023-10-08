import Banner from "@/components/Banner";
import RecentlyPosted from "@/components/RecentlyPosted";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <RecentlyPosted />
    </>
  );
};

export default Home;
