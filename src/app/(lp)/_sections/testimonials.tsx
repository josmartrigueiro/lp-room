"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { TextEffect } from "@/components/ui/text-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    text: "A Room transformou completamente minha jornada de fé. Encontrei um espaço onde posso crescer espiritualmente e me aprofundar nas Escrituras de forma genuína. A comunidade aqui é acolhedora e desafiadora ao mesmo tempo.",
  },
  {
    id: 2,
    text: "Nunca imaginei que encontraria uma comunidade tão profunda e autêntica. Room não é apenas um lugar para assistir cultos, é um espaço de transformação real onde construí relações genuínas.",
  },
  {
    id: 3,
    text: "O ambiente de crescimento espiritual aqui é excepcional. Cada encontro, cada micro room, cada ritual tem sido fundamental para o meu desenvolvimento. Me sinto parte de algo maior.",
  },
  {
    id: 4,
    text: "Room é uma comunidade que realmente entende o que significa viver a fé com propósito. Não é superficial, é profundo. Não é temporário, é transformador. Aqui encontrei pessoas que caminham comigo.",
  },
  {
    id: 5,
    text: "Mais do que um espaço físico, Room é uma experiência de vida. A forma como a comunidade se organiza e principalmente as pessoas, tudo contribui para uma jornada de fé autêntica e significativa.",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!api) return;

    const updateCanScroll = () => {
      setCanScrollNext(api.canScrollNext());
      setCanScrollPrev(api.canScrollPrev());
    };

    const handlePointerDown = () => {
      setIsScrolling(true);
    };

    const handlePointerUp = () => {
      setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const handleScroll = () => {
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    updateCanScroll();
    api.on("select", updateCanScroll);
    api.on("reInit", updateCanScroll);
    api.on("pointerDown", handlePointerDown);
    api.on("pointerUp", handlePointerUp);
    api.on("scroll", handleScroll);

    return () => {
      api.off("select", updateCanScroll);
      api.off("reInit", updateCanScroll);
      api.off("pointerDown", handlePointerDown);
      api.off("pointerUp", handlePointerUp);
      api.off("scroll", handleScroll);
    };
  }, [api]);

  return (
    <section
      id="testimonials"
      className="w-full mt-24 sm:mt-28 xl:min-h-[580px] md:min-h-[375px] my-auto"
    >
      <div className="max-w-7xl w-full sm:mx-auto xl:px-6 flex flex-col xl:flex-row justify-start items-start xl:gap-12">
        <div className="px-4 sm:px-6 xl:px-0 flex flex-col gap-6 w-full xl:w-1/3">
          <h2 className="text-primary flex flex-col gap-6 text-left leading-8 sm:leading-snug sm:text-[3rem] text-[2.5rem] font-medium font-mono">
            <span className="sr-only">Depoimentos</span>
            <TextEffect
              as="span"
              preset="fade-in-blur"
              per="word"
              speedReveal={0.8}
              speedSegment={0.3}
              segmentTransition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              delay={0.1}
              useViewport={true}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-linear-to-r from-primary to-[#A082D7] text-transparent bg-clip-text *:text-transparent *:bg-clip-text *:[background:inherit]"
            >
              Depoimentos
            </TextEffect>
          </h2>

          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className="rounded-full"
            >
              <ArrowLeft className="size-4" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className="rounded-full"
            >
              <ArrowRight className="size-4" />
              <span className="sr-only">Próximo</span>
            </Button>
          </motion.div>
        </div>

        <div className="overflow-visible">
          <div className="w-full xl:w-[calc(66.666667%+((100vw-1280px)/2)+1.5rem)] xl:ml-0 relative -mr-4 sm:-mr-6 pr-4 sm:pr-0 overflow-visible">
            {(canScrollPrev || isScrolling) && (
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-4 bg-linear-to-r from-background to-transparent z-20 pointer-events-none transition-opacity duration-200" />
            )}

            {(canScrollNext || isScrolling) && (
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-16 lg:w-16 bg-linear-to-l from-background/95 via-background/60 to-transparent z-20 pointer-events-none transition-opacity duration-200" />
            )}

            <motion.div
              className="overflow-x-hidden ml-2 mt-0.5 xl:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  containScroll: "trimSnaps",
                  dragFree: false,
                  loop: true,
                }}
                className="w-full mt-4 lg:mt-10 cursor-grab"
              >
                <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4 pr-4 sm:pr-0">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={testimonial.id}
                      className="pl-2 sm:pl-3 md:pl-4 basis-[40%] sm:basis-[70%] md:basis-[45%] lg:basis-[35%] xl:basis-[45%]"
                    >
                      <motion.div
                        className="h-[280px] sm:h-[360px] md:h-[280px] xl:h-[340px] rounded-3xl p-px bg-linear-to-r from-[#282828] to-[#453662]"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 + index * 0.1,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      >
                        <div className="bg-linear-to-br from-[#131313] to-background w-full h-full rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col hover:bg-background/80 transition-colors duration-200 ease-out relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="absolute top-6 right-6 size-8 sm:size-10"
                          >
                            <title>Aspas decorativas</title>
                            <defs>
                              <linearGradient
                                id={`quoteGradient-${testimonial.id}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#11002F"
                                  stopOpacity="0.6"
                                />
                                <stop
                                  offset="50%"
                                  stopColor="#2D017D"
                                  stopOpacity="0.7"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#5A00FF"
                                  stopOpacity="0.8"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                              fill={`url(#quoteGradient-${testimonial.id})`}
                            />
                            <path
                              d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                              fill={`url(#quoteGradient-${testimonial.id})`}
                            />
                          </svg>

                          <div className="flex items-start gap-4 mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="size-10"
                            >
                              <title>user</title>
                              <g fill="none">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 11C2 5.47723 6.47723 1 12 1C17.5228 1 22 5.47723 22 11C22 16.5228 17.5228 21 12 21C6.47723 21 2 16.5228 2 11Z"
                                  fill="url(#1752500502811-9294189_user_existing_0_t4csz04ye)"
                                  data-glass="origin"
                                  mask="url(#1752500502811-9294189_user_mask_s86i2afs5)"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 11C2 5.47723 6.47723 1 12 1C17.5228 1 22 5.47723 22 11C22 16.5228 17.5228 21 12 21C6.47723 21 2 16.5228 2 11Z"
                                  fill="url(#1752500502811-9294189_user_existing_0_t4csz04ye)"
                                  data-glass="clone"
                                  filter="url(#1752500502811-9294189_user_filter_nsyh9isk4)"
                                  clipPath="url(#1752500502811-9294189_user_clipPath_1jvvjoq1t)"
                                ></path>
                                <path
                                  d="M12.4414 14C16.3397 14.0001 19.4999 17.1603 19.5 21.0586C19.5 22.1307 18.6307 23 17.5586 23H6.44141C5.36932 23 4.5 22.1307 4.5 21.0586C4.50012 17.1603 7.6603 14.0001 11.5586 14H12.4414ZM12 5C13.933 5 15.5 6.567 15.5 8.5C15.5 10.433 13.933 12 12 12C10.067 12 8.5 10.433 8.5 8.5C8.5 6.567 10.067 5 12 5Z"
                                  fill="url(#1752500502811-9294189_user_existing_1_bnqb6d6gm)"
                                  data-glass="blur"
                                ></path>
                                <path
                                  d="M17.5586 22.25V23H6.44141V22.25H17.5586ZM18.75 21.0586C18.7499 17.5745 15.9255 14.7501 12.4414 14.75H11.5586C8.07451 14.7501 5.25012 17.5745 5.25 21.0586C5.25 21.7165 5.78354 22.25 6.44141 22.25V23L6.24316 22.9902C5.26408 22.891 4.5 22.0638 4.5 21.0586C4.50012 17.1603 7.6603 14.0001 11.5586 14H12.4414L12.8047 14.0088C16.5342 14.198 19.4999 17.2821 19.5 21.0586C19.5 22.1307 18.6307 23 17.5586 23V22.25C18.2165 22.25 18.75 21.7165 18.75 21.0586Z"
                                  fill="url(#1752500502811-9294189_user_existing_2_duz35xtpd)"
                                ></path>
                                <path
                                  d="M14.75 8.5C14.75 6.98122 13.5188 5.75 12 5.75C10.4812 5.75 9.25 6.98122 9.25 8.5C9.25 10.0188 10.4812 11.25 12 11.25V12C10.067 12 8.5 10.433 8.5 8.5C8.5 6.567 10.067 5 12 5C13.933 5 15.5 6.567 15.5 8.5C15.5 10.433 13.933 12 12 12V11.25C13.5188 11.25 14.75 10.0188 14.75 8.5Z"
                                  fill="url(#1752500502811-9294189_user_existing_3_x5xjz4yjs)"
                                ></path>
                                <defs>
                                  <linearGradient
                                    id="1752500502811-9294189_user_existing_0_t4csz04ye"
                                    x1="12"
                                    y1="1"
                                    x2="12"
                                    y2="21"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#575757"></stop>
                                    <stop offset="1" stopColor="#151515"></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="1752500502811-9294189_user_existing_1_bnqb6d6gm"
                                    x1="12"
                                    y1="5"
                                    x2="12"
                                    y2="23"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop
                                      stopColor="#E3E3E5"
                                      stopOpacity=".6"
                                    ></stop>
                                    <stop
                                      offset="1"
                                      stopColor="#BBBBC0"
                                      stopOpacity=".6"
                                    ></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="1752500502811-9294189_user_existing_2_duz35xtpd"
                                    x1="12"
                                    y1="14"
                                    x2="12"
                                    y2="19.212"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#fff"></stop>
                                    <stop
                                      offset="1"
                                      stopColor="#fff"
                                      stopOpacity="0"
                                    ></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="1752500502811-9294189_user_existing_3_x5xjz4yjs"
                                    x1="12"
                                    y1="5"
                                    x2="12"
                                    y2="9.054"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#fff"></stop>
                                    <stop
                                      offset="1"
                                      stopColor="#fff"
                                      stopOpacity="0"
                                    ></stop>
                                  </linearGradient>
                                  <filter
                                    id="1752500502811-9294189_user_filter_nsyh9isk4"
                                    x="-100%"
                                    y="-100%"
                                    width="400%"
                                    height="400%"
                                    filterUnits="objectBoundingBox"
                                    primitiveUnits="userSpaceOnUse"
                                  >
                                    <feGaussianBlur
                                      stdDeviation="2"
                                      x="0%"
                                      y="0%"
                                      width="100%"
                                      height="100%"
                                      in="SourceGraphic"
                                      edgeMode="none"
                                      result="blur"
                                    ></feGaussianBlur>
                                  </filter>
                                  <clipPath id="1752500502811-9294189_user_clipPath_1jvvjoq1t">
                                    <path
                                      d="M12.4414 14C16.3397 14.0001 19.4999 17.1603 19.5 21.0586C19.5 22.1307 18.6307 23 17.5586 23H6.44141C5.36932 23 4.5 22.1307 4.5 21.0586C4.50012 17.1603 7.6603 14.0001 11.5586 14H12.4414ZM12 5C13.933 5 15.5 6.567 15.5 8.5C15.5 10.433 13.933 12 12 12C10.067 12 8.5 10.433 8.5 8.5C8.5 6.567 10.067 5 12 5Z"
                                      fill="url(#1752500502811-9294189_user_existing_1_bnqb6d6gm)"
                                    ></path>
                                  </clipPath>
                                  <mask id="1752500502811-9294189_user_mask_s86i2afs5">
                                    <rect
                                      width="100%"
                                      height="100%"
                                      fill="#FFF"
                                    ></rect>
                                    <path
                                      d="M12.4414 14C16.3397 14.0001 19.4999 17.1603 19.5 21.0586C19.5 22.1307 18.6307 23 17.5586 23H6.44141C5.36932 23 4.5 22.1307 4.5 21.0586C4.50012 17.1603 7.6603 14.0001 11.5586 14H12.4414ZM12 5C13.933 5 15.5 6.567 15.5 8.5C15.5 10.433 13.933 12 12 12C10.067 12 8.5 10.433 8.5 8.5C8.5 6.567 10.067 5 12 5Z"
                                      fill="#000"
                                    ></path>
                                  </mask>
                                </defs>
                              </g>
                            </svg>
                          </div>

                          <p className="text-muted-foreground/90 text-sm sm:text-base leading-relaxed">
                            {testimonial.text}
                          </p>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-10 px-4 sm:px-6 xl:px-0 w-full max-w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <motion.p
              className="text-zinc-100 text-base sm:text-lg font-mono max-w-md lg:max-w-xs"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              Acompanhe o nosso conteúdo, nos siga no Instragram
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <Button
                variant="default"
                size="lg"
                render={
                  <Link
                    href="https://www.instagram.com/entrenoroom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  />
                }
              >
                <span>Siga-nos</span>
                <ArrowUpRight className="size-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
