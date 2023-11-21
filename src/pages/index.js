import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../../components/header";
import ManinBanner from "@/routes/landing-page/mainBanner";
import TripPlanSearch from "@/routes/landing-page/tripPlanSearch";
import TravelService from "@/routes/landing-page/travelService";
import OurStory from "@/routes/landing-page/ourStory";
import HolidayPackage from "@/routes/landing-page/holidayPackage";
import TravelTipBanner from "@/routes/landing-page/travelTipBanner";
import GroupTous from "@/routes/landing-page/groupTours";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="offer-banner">
          <p>Luxury Tours and Tailor-Made Holidays by Travel Memories</p>
        </div>
        <Header />
        <ManinBanner />
        <TripPlanSearch />
        <TravelService />
        <OurStory />
        <HolidayPackage />
        <TravelTipBanner />
        <GroupTous />
      </main>
    </>
  );
}
