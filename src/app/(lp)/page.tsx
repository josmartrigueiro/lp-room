import { AboutRoom } from "./_sections/about-room";
import { FAQ } from "./_sections/faq";
import { Hero } from "./_sections/hero";
import { InsideRoom } from "./_sections/inside-room";
import { Testimonials } from "./_sections/testimonials";
import { WhoAreShepherds } from "./_sections/who-are-shepherds";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutRoom />
      <InsideRoom />
      <WhoAreShepherds />
      <FAQ />
      <Testimonials />
    </>
  );
}
