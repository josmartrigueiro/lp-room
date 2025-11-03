import { Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <div className="relative z-20 -mt-[9vh] overflow-hidden border-t border-border/50 bg-black">
      <div
        className="left-1/2 top-0 w-[40%] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      <div
        className="-top-1 left-1/2 h-[100px] w-[70%] md:h-[300px] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
        }}
      />

      <footer className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 md:max-w-7xl">
        <div className="container flex flex-col gap-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex flex-col gap-4">
              <p className="max-w-xl text-start text-sm leading-relaxed text-muted-foreground/70">
                ROOM é uma comunidade independente liderada por Thiago e Anna
                Coelho.
              </p>
              <p className="text-sm text-muted-foreground/60">
                Para dúvidas, suporte ou parcerias:{" "}
                <a
                  href="mailto:contato@roomcomunidade.com"
                  className="text-muted-foreground/80 transition-colors duration-200 ease-out hover:text-muted-foreground"
                >
                  contato@roomcomunidade.com
                </a>
              </p>
            </div>

            <Button
              render={
                <Link
                  href="https://www.instagram.com/entrenoroom"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="icon"
              className="rounded-full size-10 transition-all duration-200 ease-out hover:scale-105"
            >
              <Instagram className="size-5 text-muted-foreground/60" />
            </Button>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-border/60 to-transparent" />

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-muted-foreground/60 sm:text-left">
              {"\u00A9"} {new Date().getFullYear()} ROOM. All Rights Reserved.
            </p>

            <p className="text-center text-[13px] text-muted-foreground/50 sm:text-right">
              desenvolvido por{" "}
              <Link
                href="https://trigueiro.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground/70 hover:text-muted-foreground/90 transition-colors duration-200 ease-out"
              >
                Josmar Trigueiro
              </Link>{" "}
              <span className="text-">ʕ•́ᴥ•̀ʔっ</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
