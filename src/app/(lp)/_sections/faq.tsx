"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";

const faqs = [
  {
    question: "É uma igreja?",
    answer:
      "Não, ROOM é uma comunidade digital complementar à sua caminhada de fé.",
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
            render={
              <Link
                href="https://wa.me/5584987885140?text=Ol%C3%A1%2C%20gostaria%20de%20entender%20mais%20sobre%20o%20ROOM"
                target="_blank"
              />
            }
            size="lg"
            className="mt-6 sm:mt-0 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="text-white"
            >
              <title>whatsapp</title>
              <g fill="white">
                <path
                  d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z"
                  fillRule="evenodd"
                />
              </g>
            </svg>
            Entre em contato
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
