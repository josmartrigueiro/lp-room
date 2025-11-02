import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { BlurPopUp } from "@/components/wrapper-default-animation";

export function WhoAreShepherds() {
  return (
    <div className="relative mt-20 lg:mt-32">
      <Image
        src="/blade-illustration.png"
        alt="Quem são os pastores"
        width={956}
        height={1177}
        quality={100}
        className="absolute lg:left-auto lg:top-1/2 lg:-translate-y-1/2 sm:hidden xl:block xl:-right-32 lg:right-0 w-[697px] h-[662px] md:w-[856px] md:h-[880px] xl:w-[956px] xl:h-[1177px] -bottom-20 left-0"
      />
      <section
        id="who-are-shepherds"
        className="max-w-7xl mx-auto px-6 xl:mt-0 xl:min-h-[680px] xl:h-screen flex items-center justify-between gap-8 flex-col lg:flex-row xl:items-center xl:gap-12 md:min-h-[375px] my-auto"
      >
        <Image
          src="/shepherds-photo.png"
          alt="Quem são os pastores"
          width={697}
          height={1021}
          quality={100}
          className="z-10 -translate-y-10 w-[497px] h-[582px] lg:w-[677px] lg:h-[1001px]"
        />

        <div className="space-y-5 flex flex-col items-center md:justify-end md:items-end">
          <h2 className="font-mono max-w-sm text-end leading-10 md:leading-snug sm:text-[3rem] text-[2.5rem] font-normal">
            <span className="sr-only">Quem são os pastores</span>
            <TextEffect
              as="span"
              preset="elegant"
              per="line"
              speedReveal={1.0}
              speedSegment={0.4}
              segmentTransition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              delay={0.2}
              useViewport={true}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-linear-to-r from-primary to-foreground text-transparent bg-clip-text *:text-transparent *:bg-clip-text *:[background:inherit]"
            >
              Quem são os
            </TextEffect>
            <TextEffect
              per="line"
              as="span"
              preset="elegant"
              speedReveal={1.0}
              speedSegment={0.4}
              segmentTransition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              delay={0.4}
              useViewport={true}
              viewport={{ once: true, margin: "-90px" }}
              className="bg-linear-to-r from-primary to-foreground text-transparent bg-clip-text *:text-transparent *:bg-clip-text *:[background:inherit]"
            >
              pastores
            </TextEffect>
            <TextEffect
              as="span"
              preset="elegant"
              per="line"
              speedReveal={1.0}
              speedSegment={0.4}
              segmentTransition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              delay={0.6}
              useViewport={true}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-linear-to-r from-primary to-foreground text-transparent bg-clip-text *:text-transparent *:bg-clip-text *:[background:inherit]"
            >
              Thiago e Anna
            </TextEffect>
          </h2>
          <div className="space-y-5 text-muted-foreground text-end text-sm sm:text-base">
            <TextEffect
              as="p"
              preset="fade-in-blur"
              per="line"
              speedReveal={1.0}
              speedSegment={0.4}
              segmentTransition={{
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              delay={0.8}
              useViewport={true}
              viewport={{ once: true, margin: "-70px" }}
              className="max-w-[300px] ml-4 md:ml-auto"
            >
              Thiago e Anna Coelho são pastores, comunicadores e mentores
              espirituais de milhares de pessoas.
            </TextEffect>

            <TextEffect
              as="p"
              per="line"
              preset="fade-in-blur"
              speedReveal={1.0}
              speedSegment={0.4}
              segmentTransition={{
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              delay={0.8}
              useViewport={true}
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-[352px] -ml-9 md:ml-auto"
            >
              Comunicam com profundidade, simplicidade e verdade. Conduzem sem
              gritar. E vivem o que ensinam.
            </TextEffect>

            <TextEffect
              as="p"
              per="line"
              preset="fade-in-blur"
              speedReveal={1.0}
              speedSegment={0.4}
              segmentTransition={{
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              delay={0.8}
              useViewport={true}
              viewport={{ once: true, margin: "-40px" }}
              className="max-w-[352px] -ml-9 md:ml-auto"
            >
              Room nasce da vivência deles com Deus, com a Palavra e com pessoas
              reais. É um desdobramento daquilo que já fazem: guiar pessoas para
              uma vida mais consciente, plena e fundamentada.
            </TextEffect>
          </div>

          <div className="w-full justify-end flex">
            <BlurPopUp delay={0.8} margin="-30px">
              <Button variant="secondary" size="lg" className="mt-6 ml-auto">
                Quero fazer parte
              </Button>
            </BlurPopUp>
          </div>
        </div>
      </section>
    </div>
  );
}
