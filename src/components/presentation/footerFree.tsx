import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const COMPANY = [
  {
    name: "About Us",
    link: "https://www.creative-tim.com/presentation?ref=astrolaunch-ui",
  },
  {
    name: "Blog",
    link: "https://www.creative-tim.com/blog?ref=astrolaunch-ui",
  },
  {
    name: "Github",
    link: "https://github.com/creativetimofficial?ref=astrolaunch-ui",
  },
  {
    name: "Free Products",
    link: "https://www.creative-tim.com/templates/free?ref=astrolaunch-ui",
  },
];

const HELP = [
  {
    name: "Knowledge Center",
    link: "https://www.creative-tim.com/knowledge-center?ref=astrolaunch-ui",
  },
  {
    name: "Contact Us",
    link: "https://www.creative-tim.com/contact-us?ref=astrolaunch-ui",
  },
  {
    name: "Premium Support",
    link: "https://www.creative-tim.com/support-terms?ref=astrolaunch-ui",
  },
  {
    name: "Pricing",
    link: "/#pricing",
  },
];

const RESOURCES = [
  {
    name: "Documentation",
    link: "https://www.creative-tim.com/learning-lab/astro/overview/astro-launch-ui?ref=astrolaunch-ui",
  },
  {
    name: "Custom Development",
    link: "https://www.creative-tim.com/services/updivision?ref=astrolaunch-ui",
  },
  {
    name: "Discord",
    link: "https://discord.gg/WCvQWMwT",
  },
  {
    name: "Tailwind Components",
    link: "https://tailwindcomponents.com/?ref=astrolaunch-ui",
  },
];

const TECHS = [
  {
    name: "React",
    link: "#",
  },
  {
    name: "Astro",
    link: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap px-1">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              EAS PLATFORM
            </Typography>
          </div>
          <address className="ml-auto w-full md:px-4 md:w-7/12 not-italic">
            <dl className="mb-4">
              <dt className="font-bold">주소:</dt>
              <dd>경기도 안성시 독정길 3-9</dd>
            </dl>
            <dl className="mb-4">
              <dt className="font-bold">전화번호:</dt>
              <dd>070-4571-4880</dd>
            </dl>
            <dl className="mb-4">
              <dt className="font-bold">운영시간:</dt>
              <dd>평일 9:00am ~ 18:00pm</dd>
            </dl>
          </address>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between lg:px-2">
          <div className="text-center lg:text-left">
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}
              <a href="/" className="text-inherit transition-all">
                EAS PLATFORM
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
