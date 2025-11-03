"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";

const faqs = [
  {
    question: "É uma igreja?",
    answer:
      "Não, ROOM é uma comudade digital complementar à sua caminhada de fé.",
  },
  {
    question: "Como acesso o conteúdo?",
    answer:
      "Você receberá um login para acessar a plataforma ROOM, além de entrar no grupo de WhatsApp.",
  },
  {
    question: "Qual o valor?",
    answer: "R$47,90/mês. Sem taxas extras. Sem compromisso de permanência.",
  },
  {
    question: "Preciso participar de tudo?",
    answer: "Não, ROOM é uma jornada pessoal. Você caminha no seu ritmo.",
  },
  {
    question: "Tem como cancelar?",
    answer: "Sim, a qualquer momento.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="max-w-7xl w-full sm:mx-auto px-4 sm:px-6 mt-24 flex flex-col sm:mt-28 xl:min-h-[680px] max-h-[1080px] xl:h-screen justify-center items-start xl:gap-10 md:min-h-[375px] my-auto"
    >
      <div className="w-full flex mb-12 gap-6 lg:gap-14 xl:gap-20 items-center justify-center">
        <h2 className="text-primary flex-col flex sm:flex-row gap-6 text-left leading-8 sm:leading-snug sm:text-[3rem] text-[2.5rem] font-normal">
          <span className="sr-only">Perguntas frequentes</span>
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
            Perguntas
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
            delay={0.4}
            useViewport={true}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-linear-to-r from-primary to-[#A082D7] text-transparent bg-clip-text *:text-transparent *:bg-clip-text *:[background:inherit]"
          >
            frequentes
          </TextEffect>
        </h2>

        <motion.div
          initial={{ width: 0, opacity: 0.7 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.5, 0.32, 0.5, 1], delay: 0.8 }}
          className="w-full h-[2px] bg-linear-to-r from-[#A082D7] to-primary"
        />
      </div>

      <motion.div
        className="grid sm:grid-cols-2 w-full sm:gap-x-12 gap-8 max-w-[1136px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 1.0,
              ease: [0.215, 0.61, 0.355, 1],
            },
          },
        }}
      >
        {faqs.map((faq) => (
          <motion.div
            key={faq.question}
            className="max-w-[400px]"
            variants={{
              hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
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
            <strong className="font-mono text-xl font-normal">
              {faq.question}
            </strong>

            <p className="text-muted-foreground text-sm mt-1">{faq.answer}</p>
          </motion.div>
        ))}

        <motion.div
          className="mt-auto"
          variants={{
            hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
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
          <Button
            render={<Link href="https://sun.eduzz.com/60EE72PB03" />}
            size="lg"
            className="mt-6 sm:mt-0 sm:w-auto"
          >
            Descubra agora
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
