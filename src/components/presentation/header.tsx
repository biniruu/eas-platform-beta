import { Button, Typography } from "@material-tailwind/react";
import Navbar from "../navbar";
import ThemeProvider from "../theme-provider";

export function HeroPresentation() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36  md:mt-16">
        <div className="container mx-auto grid items-center lg:grid-cols-2 z-[1]">
          <div className="text-center lg:text-left pt-20 pb-12">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              세상에 이로운 것을 만듭니다
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32">
              EAS PLATFORM의 안전하고 효율적인 물류 솔루션을 경험해보세요. EAS는
              물류의 혁신을 선도하며, 고객의 비즈니스 성공을 지원합니다. 지금
              바로 시작하세요!
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="relative z-[2]">
                <a href="/about">
                  <Button color="dark" className="flex items-center">
                    회사 소개
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:flex absolute inset-0 justify-end items-center"
          style={{ zIndex: 0 }}
        >
          <img
            src="hero.jpg"
            alt="components"
            className="w-full h-full object-cover"
            style={{ maxWidth: "50%" }}
          />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
