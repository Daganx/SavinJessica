import Hero from "../../components/Hero/Hero";
import LatestProjects from "../../components/LatestProjects/LatestProjects";
import Presentation from "../../components/Presentation/Presentation";
import Separator from "../../components/Separator/Separator";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Separator />
      <Presentation />
      <Separator />
      <LatestProjects />
      <Separator />
    </>
  );
}
