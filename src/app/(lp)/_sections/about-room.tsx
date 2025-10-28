"use client";

import { TextEffect } from "@/components/ui/text-effect";

export function AboutRoom() {
  return (
    <section
      id="about-room"
      className="px-6 mt-24 xl:mt-0 xl:min-h-[680px] xl:h-[calc(100vh-80px)] flex justify-center mx-auto gap-8 flex-col xl:flex-row xl:items-center xl:gap-12 md:min-h-[375px] my-auto"
    >
      {/* <Image
        src="/spolight-purple-bg.png"
        alt="Hero Image"
        width={500}
        height={500}
        className="pointer-events-none absolute right-0 mx-auto hidden h-screen w-full select-none md:block transition-all duration-500"
        quality={100}
      /> */}
      <h2 className="text-left [word-spacing:0.5em] max-w-xl leading-snug tracking-[-.022em] sm:text-[4rem] text-[2.5rem] font-medium">
        <span className="sr-only">Entre. Feche a porta. Permaneça.</span>
        <TextEffect
          as="span"
          preset="elegant"
          speedReveal={1.0}
          speedSegment={0.4}
          segmentTransition={{
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1],
          }}
          delay={0.3}
          className=""
          useViewport={true}
          viewport={{ once: true, margin: "-100px" }}
        >
          O que é a
        </TextEffect>
      </h2>
      {/* <h2 className="text-2xl font-bold">Sobre o Quarto</h2> */}
    </section>
  );
}
