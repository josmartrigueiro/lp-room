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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    avatar: "https://github.com/shadcn.png",
    text: "A Room transformou minha jornada de fé de uma forma que nunca imaginei possível.",
    author: "Maria Silva",
  },
  {
    id: 2,
    avatar: "https://github.com/josmartrigueiro.png",
    text: "Encontrei profundidade e comunidade aqui. É mais do que eu esperava.",
    author: "João Santos",
  },
  {
    id: 3,
    avatar: "https://github.com/diego3g.png",
    text: "O ambiente de crescimento e maturidade é excepcional.",
    author: "Ana Costa",
  },
  {
    id: 4,
    avatar: "https://github.com/shadcn.png",
    text: "Uma comunidade que realmente entende o que significa viver a fé com propósito.",
    author: "Carlos Oliveira",
  },
  {
    id: 5,
    avatar: "https://github.com/shadcn.png",
    text: "Room não é só um espaço, é uma transformação de vida.",
    author: "Patricia Lima",
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
      className="w-full mt-24 sm:mt-28 xl:min-h-[680px] xl:h-screen md:min-h-[375px] my-auto"
    >
      <div className="max-w-7xl w-full sm:mx-auto xl:px-6 flex flex-col xl:flex-row justify-start items-start xl:gap-12">
        <div className="px-4 sm:px-6 xl:px-0 flex flex-col gap-6 w-full xl:w-1/3">
          <h2 className="text-primary flex flex-col gap-6 text-left leading-8 sm:leading-snug sm:text-[3rem] text-[2.5rem] font-medium">
            <span className="sr-only">Depoimentos</span>
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
              className="bg-linear-to-r from-primary to-[#A082D7] text-transparent bg-clip-text *:text-transparent *:bg-clip-text *:[background:inherit]"
            >
              Depoimentos
            </TextEffect>
          </h2>

          <div className="flex items-center gap-2">
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
          </div>
        </div>

        <div>
          <div className="w-full xl:w-[calc(66.666667%+((100vw-1280px)/2)+1.5rem)] xl:ml-0 relative -mr-4 sm:-mr-6 pr-4 sm:pr-0">
            {(canScrollPrev || isScrolling) && (
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-4 bg-linear-to-r from-background to-transparent z-20 pointer-events-none transition-opacity duration-200" />
            )}

            {(canScrollNext || isScrolling) && (
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-16 lg:w-16 bg-linear-to-l from-background/95 via-background/60 to-transparent z-20 pointer-events-none transition-opacity duration-200" />
            )}

            <div className="overflow-x-hidden ml-2 mt-0.5 xl:mt-0">
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
                  {testimonials.map((testimonial) => (
                    <CarouselItem
                      key={testimonial.id}
                      className="pl-2 sm:pl-3 md:pl-4 basis-[40%] sm:basis-[40%] md:basis-[35.4%] lg:basis-[30.4%] xl:basis-[42.4%]"
                    >
                      <div className="aspect-square rounded-3xl p-px bg-linear-to-r from-[#282828] to-[#453662]">
                        <div className="bg-linear-to-br from-[#131313] to-background w-full h-full rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col hover:bg-background/80 transition-colors duration-200">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <Avatar className="size-10 sm:size-12">
                              <AvatarImage src={testimonial.avatar} />
                              <AvatarFallback>
                                {testimonial.author}
                              </AvatarFallback>
                            </Avatar>

                            <div>
                              <span className="text-xs sm:text-sm font-medium">
                                {testimonial.author}
                              </span>
                              <p className="text-xs sm:text-sm text-muted-foreground">
                                C&O Reais Magos
                              </p>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-6 sm:mt-8">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-10 px-4 md:px-6">
            <p className="text-zinc-100 text-base sm:text-lg font-mono max-w-md lg:max-w-xs">
              Acompanhe o nosso conteúdo, nos siga no Instragram
            </p>
            <Button
              variant="default"
              size="lg"
              render={
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                />
              }
            >
              <span>Siga-nos</span>
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
