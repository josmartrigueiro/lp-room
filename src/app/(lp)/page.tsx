import { AboutRoom } from "./_sections/about-room";
import { Hero } from "./_sections/hero";
import { InsideRoom } from "./_sections/inside-room";
import { WhoAreShepherds } from "./_sections/who-are-shepherds";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutRoom />
      <InsideRoom />
      <WhoAreShepherds />
    </>
  );
}
