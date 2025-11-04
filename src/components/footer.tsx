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

            <div className="flex gap-3">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="text-muted-foreground/60 size-5.5"
                >
                  <title>whatsapp</title>
                  <g className="fill-muted-foreground/60">
                    <path
                      d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
              </Button>
            </div>
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
