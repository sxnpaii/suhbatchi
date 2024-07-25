import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Descriptions from "@/sections/Descriptions";
import Diff from "@/sections/Diff";
import GridBox from "@/sections/GridBox";
import Hero from "@/sections/Hero";
import IntroVideo from "@/sections/IntroVideo";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero title="Hero.title" />
      <IntroVideo />
      <Hero title="MakeYourOwn.title" description="MakeYourOwn.description" />
      <Descriptions />
      <Hero title="NextGen.title" />
      <Diff />
      <GridBox />
      <Footer />
    </main>
  );
}
