"use client";

import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { BlurPopUp } from "@/components/wrapper-default-animation";
import Image from "next/image";

export function AboutRoom() {
  return (
    <div className="relative bg-[url('/bg-spotlight.png')] bg-no-repeat bg-cover bg-bottom-left before:absolute before:inset-0 before:bg-black/40 before:content-[''] before:pointer-events-none after:absolute after:inset-0 after:content-[''] after:pointer-events-none after:bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_12%,transparent_88%,var(--background)_100%)]">
      <section
        id="about-room"
        className="max-w-7xl mx-auto px-6 mt-24 xl:mt-0 xl:min-h-[680px] xl:h-screen flex justify-between gap-8 flex-col xl:flex-row xl:items-center xl:gap-12 md:min-h-[375px] my-auto"
      >
        <div className="space-y-5">
          <h2 className="font-mono text-left max-w-sm leading-snug sm:text-[3rem] text-[2.5rem] font-bold">
            <span className="sr-only">O que é a comunidade Room</span>
            <TextEffect
              as="span"
              preset="elegant"
              speedReveal={1.0}
              speedSegment={0.4}
              segmentTransition={{
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              delay={0.2}
              useViewport={true}
              viewport={{ once: true, margin: "-100px" }}
            >
              O que é a Comunidade Room
            </TextEffect>
          </h2>

          <div className="space-y-5 text-muted-foreground">
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
              delay={0.6}
              useViewport={true}
              viewport={{ once: true }}
              className="max-w-[400px]"
            >
              Room não é um grupo, nem um curso. Room é um ambiente. Um espaço
              reservado para quem decidiu sair da superficialidade e viver a fé
              com maturidade.
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
              viewport={{ once: true }}
              className="max-w-[400px]"
            >
              Aqui, você encontra ensinos que não cabem apenas no Instagram.
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
              delay={1}
              useViewport={true}
              viewport={{ once: true }}
              className="max-w-[400px]"
            >
              São conexões reais, e uma experiência espiritualque atravessa
              conteúdo e muda sua rotina.
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
              delay={1.2}
              useViewport={true}
              viewport={{ once: true }}
              className="max-w-[480px]"
            >
              Não é sobre aprender mais. É sobre viver com propósito.
            </TextEffect>
          </div>
          <BlurPopUp delay={1.6}>
            <Button variant="secondary" size="lg" className="mt-6">
              Quero fazer parte
            </Button>
          </BlurPopUp>
        </div>
        <div>
          <Image
            src="/lp-room-screenshot.png"
            alt="About Room"
            width={1100}
            height={992}
            quality={100}
            className="w-[550px] h-auto z-50"
            priority
          />
        </div>
      </section>
    </div>
  );
}
