import { Typography } from "@material-tailwind/react";

const logos = [
  "microsoft",
  "cisco",
  "ibm",
  "amazons",
  "salesforce",
  "vodafone",
];

export function LogoSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h2">EAS PLATFORM 주요 고객</Typography>
        <Typography color="blue-gray" className="text-xl font-extrabold mb-8">
          EAS PLATFORM의 솔루션을 이용하는 고객을 확인해보세요.
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, key) => (
            <img
              key={key}
              src={`logos/logo-${logo}.svg`}
              alt="logo"
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSectionOne;
