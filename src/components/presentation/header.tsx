import { Button, Typography } from "@material-tailwind/react";
import Navbar from "../navbar";
import ThemeProvider from "../theme-provider";

export function HeroPresentation() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            {/* <div className="mb-8 inline-flex items-center">
              <Typography
                variant="small"
                className="mr-3 py-0.5 px-3 font-bold text-dark uppercase border-r border-dark"
              >
                New
              </Typography>
              <Typography
                color="dark"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
                Astro Starter Template
              </Typography>
            </div> */}
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
              <a href="#pricing">
                <Button color="dark" className="flex items-center">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img
            src="header.png"
            alt="components"
            className="absolute -top-10 right-0 w-1/2"
          />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
