import { StackedBlades } from "@/components/stacked-blades";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { BlurPopUp } from "@/components/wrapper-default-animation";

export function Hero() {
  return (
    <section
      id="hero"
      className="px-6 mt-24 xl:mt-0 xl:min-h-[680px] xl:h-[calc(100vh-80px)] flex justify-center mx-auto gap-8 flex-col xl:flex-row xl:items-center xl:gap-12 md:min-h-[375px] my-auto"
    >
      <div className="space-y-4">
        <h1 className="text-left [word-spacing:0.5em] max-w-xl leading-snug tracking-[-.022em] sm:text-[4rem] text-[2.5rem] font-medium">
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
            delay={0}
            className=""
          >
            Entre.
          </TextEffect>
          <TextEffect
            as="span"
            preset="elegant"
            speedReveal={1.0}
            speedSegment={0.4}
            segmentTransition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
            }}
            delay={0.4}
            className="ml-7 tracking-[0em] [word-spacing:0.42em]"
          >
            Feche a porta.
          </TextEffect>
          <TextEffect
            as="span"
            preset="dramatic"
            per="char"
            speedReveal={1.5}
            speedSegment={0.6}
            segmentTransition={{
              duration: 2,
              ease: [0.19, 1, 0.22, 1],
            }}
            delay={1.2}
            className="ml-7"
          >
            Permaneça.
          </TextEffect>
        </h1>

        <TextEffect
          per="line"
          as="p"
          preset="fade-in-blur"
          segmentTransition={{
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          delay={1.8}
          className="text-sm sm:text-base text-muted max-w-xs"
        >
          Uma comunidade para quem quer viver a fé com profundidade, direção e
          transformação.
        </TextEffect>

        <BlurPopUp delay={2}>
          <Button size="lg" className="mt-5">
            Descubra agora
          </Button>
        </BlurPopUp>
      </div>
      <div className="">
        <StackedBlades className="translate-x-12" />
      </div>
    </section>
  );
}
