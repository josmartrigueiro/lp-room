"use client";

import { TextEffect } from "@/components/ui/text-effect";
import { motion } from "motion/react";
import Image from "next/image";

const cards = [
  {
    name: "Devocionais",
    img: "bible",
    alt: "Muita Bíblia",
    description:
      "Reflexões profundas e práticas para iniciar sua semana com clareza e direção",
  },
  {
    name: "Microsalas",
    img: "rituals",
    alt: "Pequenas salas",
    description:
      "Grupos menores temáticos para conexão, aprofundamento e interações via Zoom.",
  },
  {
    name: "Curso e trilhas temáticas",
    img: "micro-rooms",
    alt: "Rituais",
    description:
      "Chamado, identidade, insegurança, saúde emocional, espiritualidade no dia a dia.",
  },
  {
    name: "Grupo no WhatsApp",
    img: "trail",
    alt: "Rituais",
    description:
      "Espaço de convivência, compartilhamento e crescimento constante.",
  },
  {
    name: "Lives exclusivas",
    img: "lives",
    alt: "Rituais",
    description:
      "Conversas mensais com os pastores Thiago e Anna, sobre temas que não cabem nas redes.",
  },
  {
    name: "Rituais mensais",
    img: "meet",
    alt: "Rituais",
    description: "Desafios, encontros, celebrações que fortalecem sua jornada.",
  },
];

export function InsideRoom() {
  return (
    <section
      id="inside-room"
      className="max-w-7xl sm:mx-auto px-4 sm:px-6 mt-24 sm:mt-28 xl:min-h-[680px] xl:h-screen flex flex-col justify-between gap-6 items-center xl:gap-10 md:min-h-[375px] my-auto"
    >
      <h2 className="inline-block text-primary font-mono [word-spacing:0.25em] sm:[word-spacing:0.5em] text-center max-w-sm sm:max-w-3xl leading-snug tracking-[-.022em] text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
        <span className="sr-only"> O que você vai receber dentro do Room</span>
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
          O que você vai
        </TextEffect>{" "}
        <TextEffect
          as="span"
          preset="elegant"
          speedReveal={1.0}
          speedSegment={0.4}
          segmentTransition={{
            duration: 0.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          delay={0.6}
          useViewport={true}
          viewport={{ once: true, margin: "-100px" }}
          className="text-primary sm:bg-linear-to-r from-primary to-foreground sm:text-transparent sm:bg-clip-text sm:*:text-transparent *:bg-clip-text *:[background:inherit]"
        >
          receber
        </TextEffect>{" "}
        <TextEffect
          as="span"
          preset="elegant"
          speedReveal={1.0}
          speedSegment={0.4}
          segmentTransition={{
            duration: 0.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          delay={0.7}
          useViewport={true}
          viewport={{ once: true, margin: "-100px" }}
        >
          dentro do
        </TextEffect>{" "}
        <TextEffect
          as="span"
          preset="elegant"
          speedReveal={1.0}
          speedSegment={0.4}
          segmentTransition={{
            duration: 0.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          delay={1}
          useViewport={true}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-linear-to-r from-primary to-foreground text-transparent bg-clip-text *:text-transparent *:bg-clip-text *:[background:inherit]"
        >
          Room
        </TextEffect>
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 place-items-center">
        {cards.map((card, index) => (
          <motion.div
            key={card.img}
            custom={index}
            className="flex flex-col justify-center items-center w-full h-[260px] sm:h-[280px] md:h-[300px] lg:h-[316px] rounded-4xl p-px bg-[linear-gradient(160deg,rgba(150,150,150,0.6)_0%,#151515_60%)] will-change-transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-140px" }}
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
                scale: 0.96,
                rotateX: -6,
                filter: "blur(8px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                  mass: 0.9,
                },
              },
            }}
          >
            <div className="relative size-full rounded-[inherit] overflow-hidden bg-[#0B0B0C] p-6 text-center flex flex-col">
              <span className="h-15 block font-mono text-lg font-bold">
                {card.name}
              </span>
              <p className="text-sm text-muted-foreground mt-2 mb-8 max-w-[242px] mx-auto">
                {card.description}
              </p>

              <Image
                src={`/card-img-${card.img}.png`}
                alt={card.alt}
                quality={100}
                width={106}
                height={112}
                className="mx-auto mt-auto w-[84px] sm:w-[96px] md:w-[106px] h-auto object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
