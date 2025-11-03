"use client";

import { motion } from "motion/react";
import { useCallback, useState } from "react";

export function SpotlightLogoEffect() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseX(x);
    setMouseY(y);
  }, []);

  return (
    <div className="mx-auto w-fit opacity-80">
      <motion.svg
        width="1227"
        height="326"
        viewBox="0 0 1227 326"
        fill="none"
        className="max-w-[940px] translate-y-[18%] md:translate-y-[8%] w-full px-4"
        xmlns="http://www.w3.org/2000/svg"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 0.8, scale: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1.2,
          ease: [0.23, 1, 0.32, 1],
          opacity: { duration: 1.5 },
        }}
      >
        <title>Room uma comunidade de portas abertas para você</title>
        <g clipPath="url(#clip0_114_336)">
          <path
            d="M433.361 0.788696H344.285C302.296 0.788696 268.14 34.9589 268.14 76.965V249.834C268.14 291.84 302.296 326.01 344.285 326.01H433.361C475.35 326.01 509.506 291.84 509.506 249.834V76.965C509.506 34.9589 475.35 0.788696 433.361 0.788696ZM497.957 249.834C497.957 285.469 468.981 314.456 433.361 314.456H344.285C308.665 314.456 279.689 285.469 279.689 249.834V76.965C279.689 41.33 308.665 12.3427 344.285 12.3427H433.361C468.981 12.3427 497.957 41.33 497.957 76.965V249.834Z"
            fill="url(#paint0_linear_114_336)"
          />
          <path
            d="M700.303 0H611.227C569.238 0 535.082 34.1702 535.082 76.1763V249.045C535.082 291.051 569.238 325.222 611.227 325.222H700.303C742.292 325.222 776.448 291.051 776.448 249.045V76.1763C776.448 34.1702 742.292 0 700.303 0ZM764.899 249.045C764.899 284.68 735.924 313.668 700.303 313.668H611.227C575.607 313.668 546.631 284.68 546.631 249.045V76.1763C546.631 40.5413 575.607 11.554 611.227 11.554H700.303C735.924 11.554 764.899 40.5413 764.899 76.1763V249.045Z"
            fill="url(#paint1_linear_114_336)"
          />
          <path
            d="M1158.18 3.38012H1077.66C1048.99 3.38012 1024.39 23.282 1014.05 51.4909C1003.72 23.282 979.102 3.38012 950.434 3.38012H869.917C831.962 3.38012 801.093 38.2469 801.093 81.1031V313.176C801.093 314.047 801.185 314.886 801.205 315.757H811.638C811.608 314.897 811.526 314.047 811.526 313.176V81.0928C811.526 44.7306 837.716 15.1594 869.917 15.1594H950.434C982.634 15.1594 1008.82 44.7408 1008.82 81.0928V313.166C1008.82 314.036 1008.74 314.876 1008.71 315.747H1019.38C1019.35 314.886 1019.27 314.036 1019.27 313.166V81.0928C1019.27 44.7306 1045.46 15.1594 1077.66 15.1594H1158.18C1190.38 15.1594 1216.57 44.7408 1216.57 81.0928V313.166C1216.57 314.036 1216.48 314.876 1216.45 315.747H1226.89C1226.91 314.886 1227 314.036 1227 313.166V81.0928C1227 38.2366 1196.12 3.36987 1158.17 3.36987L1158.18 3.38012Z"
            fill="url(#paint2_linear_114_336)"
          />
          <path
            d="M241.356 81.5538C241.356 37.1612 207.2 1.03455 165.211 1.03455H76.1346C34.1561 1.03455 0 37.1612 0 81.5538V170.585V183.02H0.0819092V325.211H11.5492V183.02H98.8235L227.104 325.211H241.356L113.362 183.02H241.356V170.585V81.5538ZM11.5492 170.585V81.5538C11.5492 43.8805 40.5246 13.2441 76.1449 13.2441H165.221C200.841 13.2441 229.817 43.8907 229.817 81.5538V170.585H11.5492Z"
            fill="url(#paint3_linear_114_336)"
          />
          <g style={{ mixBlendMode: "screen" }}>
            <path
              d="M433.361 0.788696H344.285C302.296 0.788696 268.14 34.9589 268.14 76.965V249.834C268.14 291.84 302.296 326.01 344.285 326.01H433.361C475.35 326.01 509.506 291.84 509.506 249.834V76.965C509.506 34.9589 475.35 0.788696 433.361 0.788696ZM497.957 249.834C497.957 285.469 468.981 314.456 433.361 314.456H344.285C308.665 314.456 279.689 285.469 279.689 249.834V76.965C279.689 41.33 308.665 12.3427 344.285 12.3427H433.361C468.981 12.3427 497.957 41.33 497.957 76.965V249.834Z"
              fill="url(#spotlight)"
            />
            <path
              d="M700.303 0H611.227C569.238 0 535.082 34.1702 535.082 76.1763V249.045C535.082 291.051 569.238 325.222 611.227 325.222H700.303C742.292 325.222 776.448 291.051 776.448 249.045V76.1763C776.448 34.1702 742.292 0 700.303 0ZM764.899 249.045C764.899 284.68 735.924 313.668 700.303 313.668H611.227C575.607 313.668 546.631 284.68 546.631 249.045V76.1763C546.631 40.5413 575.607 11.554 611.227 11.554H700.303C735.924 11.554 764.899 40.5413 764.899 76.1763V249.045Z"
              fill="url(#spotlight)"
            />
            <path
              d="M1158.18 3.38012H1077.66C1048.99 3.38012 1024.39 23.282 1014.05 51.4909C1003.72 23.282 979.102 3.38012 950.434 3.38012H869.917C831.962 3.38012 801.093 38.2469 801.093 81.1031V313.176C801.093 314.047 801.185 314.886 801.205 315.757H811.638C811.608 314.897 811.526 314.047 811.526 313.176V81.0928C811.526 44.7306 837.716 15.1594 869.917 15.1594H950.434C982.634 15.1594 1008.82 44.7408 1008.82 81.0928V313.166C1008.82 314.036 1008.74 314.876 1008.71 315.747H1019.38C1019.35 314.886 1019.27 314.036 1019.27 313.166V81.0928C1019.27 44.7306 1045.46 15.1594 1077.66 15.1594H1158.18C1190.38 15.1594 1216.57 44.7408 1216.57 81.0928V313.166C1216.57 314.036 1216.48 314.876 1216.45 315.747H1226.89C1226.91 314.886 1227 314.036 1227 313.166V81.0928C1227 38.2366 1196.12 3.36987 1158.17 3.36987L1158.18 3.38012Z"
              fill="url(#spotlight)"
            />
            <path
              d="M241.356 81.5538C241.356 37.1612 207.2 1.03455 165.211 1.03455H76.1346C34.1561 1.03455 0 37.1612 0 81.5538V170.585V183.02H0.0819092V325.211H11.5492V183.02H98.8235L227.104 325.211H241.356L113.362 183.02H241.356V170.585V81.5538ZM11.5492 170.585V81.5538C11.5492 43.8805 40.5246 13.2441 76.1449 13.2441H165.221C200.841 13.2441 229.817 43.8907 229.817 81.5538V170.585H11.5492Z"
              fill="url(#spotlight)"
            />
          </g>
        </g>
        <defs>
          <radialGradient
            id="spotlight"
            cx={`${mouseX}%`}
            cy={`${mouseY}%`}
            r="20%"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor="white"
              stopOpacity={isHovering ? "0.4" : "0"}
            />
            <stop
              offset="50%"
              stopColor="white"
              stopOpacity={isHovering ? "0.2" : "0"}
            />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint0_linear_114_336"
            x1="388.823"
            y1="0.788696"
            x2="388.823"
            y2="326.01"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5A00FF" stopOpacity="0.5" />
            <stop offset="0.442308" stopColor="#5A00FF" stopOpacity="0.2" />
            <stop offset="0.778846" stopColor="#5A00FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_114_336"
            x1="655.765"
            y1="0"
            x2="655.765"
            y2="325.222"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5A00FF" stopOpacity="0.5" />
            <stop offset="0.442308" stopColor="#5A00FF" stopOpacity="0.2" />
            <stop offset="0.778846" stopColor="#5A00FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_114_336"
            x1="1014.05"
            y1="3.36987"
            x2="1014.05"
            y2="315.757"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5A00FF" stopOpacity="0.5" />
            <stop offset="0.442308" stopColor="#5A00FF" stopOpacity="0.2" />
            <stop offset="0.778846" stopColor="#5A00FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_114_336"
            x1="120.678"
            y1="1.03455"
            x2="120.678"
            y2="325.211"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5A00FF" stopOpacity="0.5" />
            <stop offset="0.442308" stopColor="#5A00FF" stopOpacity="0.2" />
            <stop offset="0.778846" stopColor="#5A00FF" stopOpacity="0.1" />
          </linearGradient>
          <clipPath id="clip0_114_336">
            <rect width="1227" height="326" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
}
